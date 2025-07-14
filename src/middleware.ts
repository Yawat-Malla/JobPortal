import { NextRequest, NextResponse } from 'next/server';
import { enforce } from './lib/casbin';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  // Public routes
  const publicRoutes = ['/', '/login', '/register'];
  // Portal protected routes (add more as needed)
  const protectedPrefixes = [
    '/dashboard',
    '/messages',
    '/applications',
    '/searchjobs',
    '/settings',
    '/statistics',
  ];

  // If route is public, allow
  if (publicRoutes.includes(url)) {
    return NextResponse.next();
  }

  // If route is protected, check session
  if (protectedPrefixes.some(prefix => url.startsWith(prefix))) {
    const session = req.cookies.get('session');
    if (!session) {
      // Use absolute URL for redirect
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = '/login';
      loginUrl.search = '';
      return NextResponse.redirect(loginUrl);
    }
  }

  // Example: block /admin for non-admins
  if (url.startsWith('/admin')) {
    // In real use, get user and role from session/cookie
    const role = req.cookies.get('role')?.value || 'freelancer';
    const allowed = await enforce(role, 'app', 'admin', 'read');
    if (!allowed) {
      // Use absolute URL for redirect
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = '/login';
      loginUrl.search = '';
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}
