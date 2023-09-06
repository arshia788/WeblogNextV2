import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

export async function middleware(req) {
   const path = req.nextUrl.pathname;

   if (

      // ba in miay api ro migiri 
      path == "/api/user/user-setting-default-items"||

      // inja omadi gofti ke biad on token ro be in api ham bedeh. 
      path == "/api/user/update"
   ) {
      try {
         const token = req.headers.get("token");

         const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.TOKEN_SECRET));

         const response = NextResponse.next()

         // inja miay token ro midi
         response.headers.append('user-id', payload._id);
         return response;

      }
      catch (error) {
         console.log(error);
         return NextResponse.json({ message: "عدم دسترسی" }, { status: 402 });
      }

   }
}