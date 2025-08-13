import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

const protectedPaths = ['/dashboard', '/trades', '/calendario', '/ideas', '/analisis'];
const authPaths = ['/login', '/register'];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Get token from cookie
    const token = request.cookies.get('auth-token')?.value;

    // Check if current path is protected
    const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));
    const isAuthPath = authPaths.some(path => pathname.startsWith(path));

    // If accessing protected path
    if (isProtectedPath) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        // Verify token
        const user = await verifyToken(token);
        if (!user) {
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete('auth-token');
            return response;
        }
    }

    // If accessing auth pages while logged in
    if (isAuthPath && token) {
        const user = await verifyToken(token);
        if (user) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};