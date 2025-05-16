"use client";

import { Thread } from "@/components/thread";
import { StreamProvider } from "@/providers/Stream";
import { ThreadProvider } from "@/providers/Thread";
import { ArtifactProvider } from "@/components/thread/artifact";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Calendar, Heart, MessageSquare, Trophy } from "lucide-react"
import Link from 'next/link'


export default function DemoPage(): React.ReactNode {
  return (
    <React.Suspense fallback={<div>Loading (layout)...</div>}>
      <Toaster />
      <div className="flex flex-col min-h-screen justify-center items-center">

        <main className="flex-1">
          <section className="py-20">
            <div className="container center">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Your AI Health Coach for Lasting Habits</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Build sustainable health habits with personalized guidance from your AI companion. Achieve your wellness
                  goals with smart, adaptive coaching.
                </p>
              </div>
              <div className="flex justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <Link href="/dashboard">Get Started</Link>
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </section>
          <section id="features" className="py-20">
            <div className="container center">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Smart Features for Your Health Journey</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our AI health coach combines cutting-edge technology with proven health science to help you achieve your
                  goals.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Brain className="h-10 w-10" />}
                  title="Personalized Guidance"
                  description="Receive custom advice tailored to your unique health profile, goals, and preferences."
                />
                <FeatureCard
                  icon={<Calendar className="h-10 w-10" />}
                  title="Habit Building"
                  description="Develop sustainable health routines with science-backed habit formation techniques."
                />
                <FeatureCard
                  icon={<MessageSquare className="h-10 w-10" />}
                  title="24/7 Support"
                  description="Get answers, motivation, and guidance whenever you need it through our AI chat."
                />
                <FeatureCard
                  icon={<Trophy className="h-10 w-10" />}
                  title="Goal Tracking"
                  description="Monitor your progress with intuitive dashboards and celebrate your achievements."
                />
                <FeatureCard
                  icon={<Heart className="h-10 w-10" />}
                  title="Holistic Wellness"
                  description="Balance nutrition, exercise, sleep, and mental health for complete wellbeing."
                />
                <FeatureCard
                  icon={<Brain className="h-10 w-10" />}
                  title="Adaptive Learning"
                  description="Your coach evolves with you, adjusting recommendations based on your feedback and progress."
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </React.Suspense>
  );
}



function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}