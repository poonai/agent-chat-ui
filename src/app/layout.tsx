import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import { PostHogProvider } from "@/providers/PostHogProvider";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Share, Plus, Download, EllipsisVertical } from "lucide-react";
import { headers } from 'next/headers'



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});



async function InstallPrompt() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent')
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent || "") && !(userAgent || "").includes("MSStream");

  const isAndroid =
    /Android/.test(userAgent || "") && /Chrome/.test(userAgent || "");

  // Standalone detection is not possible server-side, so assume false
  const isStandalone = false;

  if (isStandalone || (!isIOS && !isAndroid)) {
    return null; // Don't show install button if already installed
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger><Button className="rounder-xl"><Download /></Button></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>To install this app on your {isIOS ? "iOS" : "Android"} device</AlertDialogTitle>
          <AlertDialogDescription>
            {
              (isIOS) ? (<div className="mt-2">
                <div className="flex items-center space-x-2" >
                  <Share className="h-4 w-4" />
                  <span>Tap the share button</span>
                </div>
                <br />
                <div className="flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Select "Add to Home Screen"</span>
                </div>
              </div>) : (
                <div className="mt-2">
                  <div className="flex items-center space-x-2" >
                    <EllipsisVertical className="h-4 w-4" />
                    <span>Tap the three dots in the top right</span>
                  </div>
                  <br />
                  <div className="flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Select "Add to Home Screen"</span>
                  </div>
                </div>)}

          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog >
  )
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <PostHogProvider>
              <header className="flex items-center justify-end gap-4 p-4">
                <SignedOut>
                  <Button>
                    {" "}
                    <SignInButton>Login</SignInButton>
                  </Button>
                  <SignUpButton />
                </SignedOut>
                <SignedIn>
                  <InstallPrompt />
                  <UserButton />
                </SignedIn>
              </header>
              {children}
            </PostHogProvider>
          </body>
        </html>
      </ClerkProvider>
    </NuqsAdapter>
  );
}
