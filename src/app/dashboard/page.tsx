
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CalendarPlus, Flag } from "lucide-react";

import { currentUser } from '@clerk/nextjs/server'
import { DashboardGoals } from "@/components/dashboard/dashboardGoals";

// DashboardCard component
type DashboardCardProps = {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  icon?: React.ReactNode;
};

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, link, linkLabel, icon }) => (
  <Card className="m-1 rounded-sm border border-gray-300 shadow-none ml-4 mr-4 mt-2">
    <CardHeader>
      <CardTitle className="font-bold">{title}</CardTitle>
      <CardDescription className="font-normal">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Button className="rounded-sm" size="lg">
        {icon}
        <Link href={link}>{linkLabel}</Link>
      </Button>
    </CardContent>
  </Card>
);



export default async function DashboardPage(): Promise<React.ReactNode> {
  const user = await currentUser()
  const cards: DashboardCardProps[] = [
    {
      title: "Goal Planner",
      description: "Your AI health coach is ready to help you build sustainable habits to acheive your goal.",
      link: `/chat?assistantId=plan_habit&userId=${user?.id}`,
      linkLabel: "Plan Habit",
      icon: <CalendarPlus className="h-10 w-10" />,
    },
    {
      title: "Daily Checkin",
      description: "What did you accomplish today?",
      link: `/chat?assistantId=check_in_habit&userId=${user?.id}`,
      linkLabel: "Check-In",
      icon: <Flag className="h-10 w-10" />,
    },
  ];


  return (
    <React.Suspense fallback={<div>Loading (layout)...</div>}>
      <div className="gap-4">
        <div >
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Welcome back, {user?.firstName}</h2>
            <p className="text-gray-500">Let's continue your wellness journey</p>
          </div>
        </div>
        {cards.map((card, idx) => (
          <DashboardCard key={idx} {...card} />
        ))}
        <div>
          <div className="ml-4 sticky top-0 z-10 bg-white my-2">
            <h2 className="text-2xl font-bold">Your Goals</h2>
            <p className="text-gray-500">Here are your current goals:</p>
          </div>
          <DashboardGoals />
        </div>
      </div>
    </React.Suspense>
  );
}

