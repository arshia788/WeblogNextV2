'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LogInAndUserImage() {

    const [userLogged,setUserLogged]= useState(true );

  return (
    <div>
        {
            !userLogged ? 
            <Link href={'/sign-in'} className='rounded bg-blue-500 px-3 py-1 text-white text-base  sm:text-sm '>ورود / ثبت نام</Link>
            
            :
            <Image 
            className="rounded-full border-2 border-blue-500 transition-all duration-300 hover:bg-blue-600"
            src={'https://api.dicebear.com/7.x/bottts/svg'} width={60} height={60} alt="test"/>
        }
    </div>
  )
}
