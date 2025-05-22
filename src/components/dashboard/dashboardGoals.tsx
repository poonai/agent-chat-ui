'use client'
import { useUser } from "@clerk/nextjs";
import useSWR from 'swr'
import { EnrichedGoalForDashboard, getEnrichedGoals, GoalWithCheckIn } from "@/lib/db/goal";
import { usePostHog } from 'posthog-js/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { percent } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import React, { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
const fetcher = (url: string) => fetch(url).then((r) => r.json())
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

const GoalCard: React.FC<EnrichedGoalForDashboard> = (goal) => {
    return (
        <Card className="col-span-2 m-1 gap-2 rounded-sm border border-gray-300 shadow-none ml-4 mr-4 mt-2">
            <CardHeader className="gap-1 ml-.2">
                <CardTitle className="font-bold">{goal.goal}</CardTitle>
                <CardDescription className="font-normal text-sm">{goal.action}</CardDescription>
            </CardHeader>
            <CardContent className="mt-px">
                <Separator className="m-2" />
                {(!goal.weekly && goal.totalCheckInsCount > 0) ? (
                    <div>
                        <div className="grid grid-cols-8" >
                            <p className="font-[450] text-sm col-span-4 ">Completed Days : {goal.currentCheckInsCount}</p>
                            <Separator orientation="vertical" className="col-span-1 justify-self-center" />
                            <p className="font-[450] text-sm col-span-3">Total Days : {goal.totalCheckInsCount}</p>
                        </div>
                        <div className="grid grid-cols-4 mt-2">
                            <p className="font-semibold col-span-3">Weekly Progress</p>
                            <p className="font-semibold flex justify-end">{percent(goal.currentWeekCount, goal.targetWeekCount)}%</p>
                        </div>
                        <Progress className="h-4 bg-[#F5F5F5] mt-3" value={percent(goal.currentWeekCount, goal.targetWeekCount)}></Progress>
                        <div className="grid grid-cols-4 mt-2">
                            <p className="font-semibold col-span-3">Overall Progress</p>
                            <p className="font-semibold flex justify-end">{percent(goal.currentCheckInsCount, goal.totalCheckInsCount)}%</p>
                        </div>
                        <Progress className="h-4 bg-[#F5F5F5] mt-3" value={percent(goal.currentCheckInsCount, goal.totalCheckInsCount)}></Progress>

                    </div>

                ) : goal.weekly ? (
                    <div>
                        <div className="grid grid-cols-8" >
                            <p className="font-[450] text-sm col-span-4 ">Completed Days : {goal.currentCheckInsCount}</p>
                            <Separator orientation="vertical" className="col-span-1 justify-self-center" />
                            <p className="font-[450] text-sm col-span-3">Total Days : {goal.totalCheckInsCount}</p>
                        </div>
                        <div className="grid grid-cols-4 mt-2">
                            <p className="font-semibold col-span-3">Overall Progress</p>
                            <p className="font-semibold flex justify-end">{percent(goal.currentCheckInsCount, goal.totalCheckInsCount)}%</p>
                        </div>
                        <Progress className="h-4 bg-[#F5F5F5] mt-3" value={percent(goal.currentCheckInsCount, goal.totalCheckInsCount)}></Progress>
                    </div>

                ) : (
                    <div className="grid grid-cols-8" >
                        <p className="font-[450] text-sm col-span-3 ">Current Streak: {goal.currentStreak > 0 ? goal.currentStreak : 0}</p>
                        <Separator orientation="vertical" className="col-span-1 justify-self-center" />
                        <p className="font-[450] text-sm col-span-4">Highest Streak: {goal.highestStreak > 0 ? goal.highestStreak : 0}</p>
                    </div>
                )}

                {/* {!goal.weekly && goal.totalCheckInsCount > 0 ? ()} */}
            </CardContent>
        </Card>
    );
}

export function DashboardGoals() {
    const { user } = useUser();
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

    return (
        <React.Suspense fallback={<Skeleton className=" col-span-2 w-full h-full rounded-full"/>}>
        <section>
            {goals.map((goal: EnrichedGoalForDashboard) => (
                <GoalCard key={goal.id} {...goal} />
            ))}
        </section>
        </React.Suspense>
    )
}