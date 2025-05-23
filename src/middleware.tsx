import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'


const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/api/goal(.*)','/api/push(.*)' ])

const middleware =  clerkMiddleware(async (auth, req) => {
    const { pathname } = req.nextUrl;

    if (pathname === '/') {
        const { userId } = await auth();
        if (userId) {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
    }

    if (isProtectedRoute(req)) {
        await auth.protect();
    }
});

export default middleware

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};