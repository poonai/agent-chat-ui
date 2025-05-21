// @ts-expect-error: 'web-push' may not have type definitions in this environment
import webpush from 'web-push'
import { getAllUserSubscriptions } from '@/lib/db/user'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    if (request.headers.get('x-secret-cron') !== process.env.CRON_SECRET) {
        return new Response('Unauthorized', { status: 401 })
    }
    const subscriptions = await getAllUserSubscriptions()
    if (!subscriptions || subscriptions.length === 0) {
        return new Response('No subscriptions found', { status: 404 })
    }
    // Send a test notification to all subscriptions
    try {
        const notificationPayload = JSON.stringify({
            title: 'Evening Pause: Reflect & Grow 🌱',
            body: 'Take a moment for yourself. Check in, reflect on your day, and take one small step toward your goals. Wellness isn’t a sprint—it’s a rhythm.',
        })

        const sendPromises = subscriptions.map(subscription => {
            return webpush.sendNotification(subscription, notificationPayload)
        })

        await Promise.all(sendPromises)
    } catch (error) {
        console.error('Error sending notification:', error)
        return new Response('Error sending notification', { status: 500 })
    }
    return NextResponse.json({ message: 'Notifications sent' })
}