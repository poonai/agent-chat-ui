import { NextResponse } from 'next/server'
import {currentUser} from '@clerk/nextjs/server'
import { getGoals } from '@/lib/db/goal'


export async function GET(request: Request) {
  const user = await currentUser()
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const goals = await getGoals(user.id)
  return NextResponse.json(goals)
}