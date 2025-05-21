import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function updateUserSubscription(
    userId: string,
    subscription: PushSubscription
): Promise<void> {
    await prisma.user.upsert({
        where: { id: userId,  },
        update: {
            pushSubscription: JSON.stringify(subscription),
        },
        create: {
            id: userId,
            pushSubscription: JSON.stringify(subscription),
        },
    })
}


export async function getUserSubscription(userId: string): Promise<PushSubscription | null> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { pushSubscription: true },
    })

    if (!user || !user.pushSubscription) {
        return null
    }

    return JSON.parse(user.pushSubscription)
}

  
