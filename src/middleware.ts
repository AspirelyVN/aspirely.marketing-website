import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(req: NextRequest) {
  const res = intlMiddleware(req);

  if (res instanceof Promise) {
    return res.then((r) => {
      r.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
      return r;
    });
  }

  res.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  return res;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};