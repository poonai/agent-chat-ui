// @ts-expect-error: 'web-push' may not have type definitions in this environment
import webpush from 'web-push'
import { currentUser } from '@clerk/nextjs/server'
import { updateUserSubscription, getUserSubscription } from '@/lib/db/user'  
import { NextResponse } from 'next/server'

webpush.setVapidDetails(
  'mailto:rbalajis25@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)

export async function POST(request: Request) {
  const user = await currentUser()
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }
  const {subscription}:{subscription: PushSubscription} = await request.json()

  if (!subscription) {
    return new Response('Invalid subscription', { status: 400 })
  }
  await updateUserSubscription(user.id, subscription)
  return NextResponse.json({ message: 'Subscription updated' })
}


export async function GET(request: Request) {
  const user = await currentUser()
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }
  const subscription = await getUserSubscription(user.id)
  if (!subscription) {
    return new Response('No subscription found', { status: 404 })
  }
  // Send a test notification
  try {
    const res = await webpush.sendNotification(subscription, JSON.stringify({
      title: 'Test Notification',
      body: 'This is a test notification',
    }))
    console.log('Notification sent:', res)
  } catch (error) {
    console.error('Error sending notification:', error)
    return new Response('Error sending notification', { status: 500 })
  }
  return NextResponse.json({ subscription })
}