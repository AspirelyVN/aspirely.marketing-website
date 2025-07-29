import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);

export async function middleware() {
  const res = NextResponse.next();

  res.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');

  return res;
}
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};