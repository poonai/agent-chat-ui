"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { EnrichedGoalForDashboard, getEnrichedGoals, GoalWithCheckIn } from "@/lib/db/goal";
import { useUser } from "@clerk/nextjs";
import useSWR from 'swr'
import { usePostHog } from 'posthog-js/react'
import { Progress } from "@/components/ui/progress";
import { percent } from "@/lib/utils";



const fetcher = (url: string) => fetch(url).then((r) => r.json())




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

const GoalCard: React.FC<EnrichedGoalForDashboard> = (goal) => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{goal.goal}</CardTitle>
        <CardDescription>{goal.action}</CardDescription>
      </CardHeader>
      <CardContent>
        {(!goal.weekly && goal.totalCheckInsCount > 0) ? (
          <div>
            <p>completed Days: {goal.currentCheckInsCount}</p>
            <p>total Days: {goal.totalCheckInsCount}</p>
            <p> Progress: <Progress value={percent(goal.currentCheckInsCount, goal.totalCheckInsCount)}></Progress></p>

          </div>
        ) : goal.weekly ? (
          <div>
            <p>completed Weekly Days: {goal.currentWeekCount}</p>
            <p>completed Days: {goal.currentCheckInsCount}</p>
            <p>total Days: {goal.totalCheckInsCount}</p>
            <p>Current Week Progress: <Progress value={percent(goal.currentWeekCount, goal.targetWeekCount)}></Progress></p>
            <p>Overall Progress: <Progress value={percent(goal.currentCheckInsCount, goal.totalCheckInsCount)}></Progress></p>
          </div>

        ) : (<div>
          <p>Current Streak: {goal.currentStreak > 0 ? goal.currentStreak : 0}</p>
          <p>Highest Streak: {goal.highestStreak > 0 ? goal.highestStreak : 0}</p>
        </div>)}

        {/* {!goal.weekly && goal.totalCheckInsCount > 0 ? ()} */}
      </CardContent>
    </Card>
  );
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export default function DashboardPage(): React.ReactNode {
  const { isSignedIn, user, isLoaded } = useUser();
  const posthog = usePostHog()

  const { data, error, isLoading } = useSWR(
    '/api/goal',
    fetcher
  )

  const goals = getEnrichedGoals(data as GoalWithCheckIn[]);

  useEffect(() => {
    const subscribePush = async () => {
      if (!('serviceWorker' in navigator)) {
        console.error('Service workers are not supported in this browser.');
        return;
      }

      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });

      await navigator.serviceWorker.ready;

      await registration.pushManager.permissionState({ userVisibleOnly: true })

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || ''),
      });

      await fetch('/api/push', {
        method: 'POST',
        body: JSON.stringify({ subscription }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    subscribePush().catch((error) => {
      console.error('Error subscribing to push notifications:', error);
    });
  }, []);

  useEffect(() => {
    if (posthog && user) {
      posthog.identify(user.id, {
        email: user.emailAddresses[0]?.emailAddress,
      });
    }
  }, [user, posthog]);

  if (!isLoaded) {
    return (<div>Loading...</div>);
  }

  if (!isSignedIn) {
    return (<div>Sign in to view this page</div>);
  }



  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

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
            {goals.map((goal: EnrichedGoalForDashboard) => (
              <GoalCard key={goal.id} {...goal} />
            ))}
          </section>
        </div>
      </div>
    </React.Suspense>
  );
}

