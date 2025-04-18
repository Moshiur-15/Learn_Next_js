// import { NextResponse } from "next/server";

// export async function GET(req) {
//     return NextResponse.json({ message: 'Learn Get Request' });
// }

import { cookies } from 'next/headers'
 
export async function GET(req) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
 
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
    message:'cookies'
  })
}