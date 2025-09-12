import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest){
  const url = req.nextUrl.clone()
  if(url.pathname.startsWith('/admin')){
    // Let the client app check role and redirect. Here we could inspect cookies if using auth-helpers.
    // Keep it simple for test mode.
  }
  return NextResponse.next()
}
