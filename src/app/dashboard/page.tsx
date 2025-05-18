"use server";

import React from "react";
import { currentUser } from '@clerk/nextjs/server'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { getGoals } from "@/lib/db/goal";
import { habit_plan } from "@prisma/client/client";

/**
 * Calculates the current and highest streak for a goal's check-ins.
 * @param goal - The goal object with check_in array (sorted or unsorted).
 * @returns { current: number, highest: number }
 */
function calculateStreaks(goal: { check_in: { date: Date | string; status: boolean }[] }) {
  // Sort check-ins by date ascending
  const checkIns = [...goal.check_in]
    .filter(ci => ci.status)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (checkIns.length === 0) return { current: 0, highest: 0 };

  let currentStreak = 1;
  let highestStreak = 1;
  let streak = 1;

  for (let i = 1; i < checkIns.length; i++) {
    const prev = new Date(checkIns[i - 1].date);
    const curr = new Date(checkIns[i].date);

    // Check if consecutive days
    const diffDays = Math.round((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      streak++;
      if (streak > highestStreak) highestStreak = streak;
    } else {
      streak = 1;
    }
  }

  // Calculate current streak (from the end)
  streak = 1;
  for (let i = checkIns.length - 1; i > 0; i--) {
    const curr = new Date(checkIns[i].date);
    const prev = new Date(checkIns[i - 1].date);
    const diffDays = Math.round((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }
  currentStreak = streak;

  return { current: currentStreak, highest: highestStreak };
}

// DashboardCard component
type DashboardCardProps = {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
};

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, link, linkLabel }) => (
  <Card className="col m-3">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {/* Add more content here if needed */}
    </CardContent>
    <CardFooter>
      <Button>
        <Link href={link}>{linkLabel}</Link>
      </Button>
    </CardFooter>
  </Card>
);

const GoalCard: React.FC<habit_plan> = ({ goal, action, check_in }) => {
  const { current, highest } = calculateStreaks({ check_in: check_in });

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{goal}</CardTitle>
        <CardDescription>{action}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Current Streak: {current} days</p>
        <p>Highest Streak: {highest} days</p>
      </CardContent>
    </Card>
  );
}


export default async function DashboardPage(): Promise<React.ReactNode> {
  const user = await currentUser();

  const cards: DashboardCardProps[] = [
    {
      title: "Goal Planner",
      description: "Your AI health coach is ready to help you build sustainable habits to acheive your goal.",
      link: `/chat?assistantId=plan_habit&userId=${user?.id}`,
      linkLabel: "Plan Habit",
    },
    {
      title: "Daily Checkin",
      description: "What did you accomplish today?",
      link: `/chat?assistantId=check_in_habit&userId=${user?.id}`,
      linkLabel: "Checkin",
    },
  ];

  // Fetch goals data
  const goals = await getGoals(user?.id as string);

  return (
    <React.Suspense fallback={<div>Loading (layout)...</div>}>
      <div className="grid grid-cols-2 gap-4 bg-gray-50">
        <div className="col-span-2">
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Welcome back, {user?.firstName}</h2>
            <p className="text-gray-500">Let's continue your wellness journey</p>
          </div>
        </div>
        {cards.map((card, idx) => (
          <DashboardCard key={idx} {...card} />
        ))}
        <div className="col-span-2">
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Your Goals</h2>
            <p className="text-gray-500">Here are your current goals:</p>
          </div>
          <section>
            {goals.map((goal) => (
              <GoalCard key={goal.id} {...goal} />
            ))}
          </section>
        </div>
      </div>
    </React.Suspense>
  );
}
