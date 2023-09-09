'use client';

import Image from "next/image";
import Link from "next/link";
import UserMenu from "../user-menu";

import {  useSelector } from "react-redux";
import { useState } from "react";

export default function LogInAndUserImage() {

  const logged= useSelector(store=> store.logedSlice.value); 
  const userImage= useSelector(store=> store.userImageSlice.value);

  const [menuIsOpen,setMenuIsOpen]= useState(false);

  return (
    <div>
        {
            !logged ? 
            <Link href={'/sign-in'} className='rounded bg-blue-500 px-3 py-1 text-white text-base  sm:text-sm '>ورود / ثبت نام</Link>
            
            :
            <div className="relative w-[60px] h-[60px]">
              <Image 
            onClick={()=>setMenuIsOpen(!menuIsOpen)}
            className="rounded-full border-2 border-blue-500 transition-all duration-300 hover:bg-blue-600"
            src={userImage} fill alt="test"/>
            </div>
        }

        <UserMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
    </div>
  )
}
