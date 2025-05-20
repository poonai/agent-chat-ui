import { PrismaClient, habit_plan, Prisma } from "@prisma/client";
import { Goal } from "lucide-react";
import { idea } from "react-syntax-highlighter/dist/esm/styles/hljs";
const prisma = new PrismaClient();

type GoalWithCheckIn = Prisma.habit_planGetPayload<{
  include: {
    check_in: true;
  };
}>;


export type { GoalWithCheckIn };

export const getGoals = async (userId: string): Promise<GoalWithCheckIn[]> => {
  const goals = await prisma.habit_plan.findMany({
    where: {
      userId: userId
    },
    include: {
      check_in: true
    },
  });
  return goals;
};

export const getEnrichedGoalsFromDB = async (userId: string): Promise<EnrichedGoalForDashboard[]> => {
  const goals = await getGoals(userId);
  return getEnrichedGoals(goals);
};

export function getEnrichedGoals(goals: GoalWithCheckIn[]): EnrichedGoalForDashboard[] {
  if (!goals) {
    return [];
  }
  return goals.map((goal) => {
    // sort check-ins by date
    const checkIns = [...goal.check_in]
      .filter((ci) => ci.status)
      .filter((ci) => ci.date !== null)
      .sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });

    if (!goal.weekly && goal.duration != 0) {
      return {
        id: goal.id,
        goal: goal.goal ?? "",
        action: goal.action ?? "",
        currentStreak: 0,
        highestStreak: 0,
        weekly: goal.weekly ?? false,
        currentWeekCount: 0,
        targetWeekCount: 0,
        startDate: goal.created_at ?? new Date(0),
        currentCheckInsCount: goal.check_in.length,
        totalCheckInsCount: goal.duration ?? 0,
      }
    }

    if (goal.weekly && goal.duration != 0) {
      // calculate current week start date
      const currentDate = new Date();
      const currentWeekStart = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));

      const checkInsThisWeek = checkIns.filter((ci) => {
        const checkInDate = new Date(ci.date ?? "");
        return checkInDate >= currentWeekStart;
      });

      const targetWeekCount = Math.floor((goal.duration ?? 0) / 7);
      const targetCheckInCount = targetWeekCount * (goal.days_in_week ?? 0);
      return {
        id: goal.id,
        goal: goal.goal ?? "",
        action: goal.action ?? "",
        currentStreak: 0,
        highestStreak: 0,
        weekly: goal.weekly ?? false,
        currentWeekCount: checkInsThisWeek.length,
        targetWeekCount: goal.days_in_week ?? 0,
        startDate: goal.created_at ?? new Date(0),
        currentCheckInsCount: checkIns.length,
        totalCheckInsCount: targetCheckInCount,
      }
    }

    let highestStreak = 0;
    let currentStreak = 0;
    console.log("checkIns", checkIns.length );
    for (let i = 0; i < checkIns.length; i++) {
      const checkInDate = new Date(checkIns[i].date ?? "");
      const prevCheckInDate = i > 0 ? new Date(checkIns[i - 1].date ?? "") : null;

      if (prevCheckInDate) {
        const diffDays = Math.round((checkInDate.getTime() - prevCheckInDate.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          currentStreak++;
        } else {
          highestStreak = Math.max(highestStreak, currentStreak);
          currentStreak = 1;
        }
      } else {
        currentStreak = 1;
      }
    }
    return {
      id: goal.id,
      goal: goal.goal ?? "",
      action: goal.action ?? "",
      currentStreak: currentStreak,
      highestStreak: highestStreak,
      weekly: goal.weekly ?? false,
      currentWeekCount: 0,
      targetWeekCount: 0,
      startDate: goal.created_at ?? new Date(0),
      currentCheckInsCount: checkIns.length,
      totalCheckInsCount: goal.duration ?? 0,
    };
  });
};

export type EnrichedGoalForDashboard = {
  id: number;
  goal: string;
  action: string;
  currentStreak: number;
  highestStreak: number;
  weekly: boolean;
  currentWeekCount: number;
  targetWeekCount: number;
  startDate: Date;
  totalCheckInsCount: number;
  currentCheckInsCount: number;
}
