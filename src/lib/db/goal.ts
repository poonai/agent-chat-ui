import { PrismaClient, habit_plan,Prisma } from "@prisma/client";
import { Goal } from "lucide-react";
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
