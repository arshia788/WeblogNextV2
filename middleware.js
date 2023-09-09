import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

export async function middleware(req) {

   // inja bayad az nextUrl estefadeh bokoni bejay req.url.
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
         console.log(payload);

         const response = NextResponse.next()

         // inja miay token ro midi dobareh ama ba esme user-id
         response.headers.append('user-id', payload._id);
         return response;

      }
      catch (error) {
         console.log(error);
         return NextResponse.json({ message: "عدم دسترسی" }, { status: 402 });
      }

   }
}