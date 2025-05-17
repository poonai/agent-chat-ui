"use server";

import { Thread } from "@/components/thread";
import { StreamProvider } from "@/providers/Stream";
import { ThreadProvider } from "@/providers/Thread";
import { ArtifactProvider } from "@/components/thread/artifact";
import { Toaster } from "@/components/ui/sonner";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import { currentUser } from '@clerk/nextjs/server'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default async function DashboardPage(): Promise<React.ReactNode> {
  const user = await currentUser();

  return (
    <React.Suspense fallback={<div>Loading (layout)...</div>}>
      <div className="grid grid-cols-2 gap-4 bg-gray-50">
        <div className="col-span-2">
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Welcome back, {user?.firstName}</h2>
            <p className="text-gray-500">Let's continue your wellness journey</p>
          </div>
        </div>

        <Card className="col m-3">
          <CardHeader>
            <CardTitle>Goal Planner</CardTitle>
            <CardDescription>Your AI health coach is ready to help you build sustainable habits to acheive your goal.</CardDescription>
          </CardHeader>
          <CardContent>

          </CardContent>
          <CardFooter>
            <Button><Link href={`/chat?assistantId=plan_habit&userId=${user?.id}`}>Plan Habit</Link></Button>
          </CardFooter>
        </Card>
        <Card className="col m-3">
          <CardHeader>
            <CardTitle>Daily Checkin</CardTitle>
            <CardDescription>What did you accomplish today?</CardDescription>
          </CardHeader>
          <CardContent>

          </CardContent>
          <CardFooter>
            <Button><Link href={`/chat?assistantId=check_in_habit&userId=${user?.id}`}>Checkin</Link></Button>
          </CardFooter>
        </Card>

      </div>
    </React.Suspense>
  );
}
