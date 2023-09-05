import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';


export async function middleware(req) {

    // omadi on api ro gerefti
    const path = req.nextUrl.pathname;

    if (path === "/api/user/all") {
        console.log(path);

        try {

            // token ro az headers gerefti chon to darkhast omadi set kardi in kar ro.
            const token = req.headers.get('token');

            // ? az jwt estefadeh nakardi chon be bug mikhori baray hamin omadi package jose ro nasab kardi. 

            const { payload } = await jwtVerify(token, TextEncoder().encode(process.env.TOKEN_SECRET));
            req.user= payload;


            // next baray in hast ke bereh be marhaleh badi. 
            return NextResponse.next({})
            
        } catch (error) {
            console.log(error);
            return NextResponse.json({message:'عدم دسترسی'}, {status:402})
        }


    }



}




