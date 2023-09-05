'use client';

import axios from "axios";
import { useRef } from "react";

export default function UpdateUserData({token}) {

    const usernameRef  = useRef();
    const blog_nameRef = useRef();
    const displaynameRef = useRef();
    const passwordRef = useRef();

    const updater=()=>{
        console.log('yes');

        // mogeh darkhast omadi in token ro ham behesh dadi. 
        axios.get('/api/user/all',{headers:{token}})
        .then(data=>{
            console.log(data.data);
        })

        .catch(error=>{
            console.log(error.response.data);
        })
    }


  return (
    <div className="flex justify-center items-center ">
        <form className="flex flex-col gap-16 p-4 w-[800px]">
            <button onClick={updater} className="absolute top-40 left-10 bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 px-3 py-2 rounded">آپدیت</button>

            <input 
            ref={usernameRef}
            type="text" placeholder="نام کاربری جدید"
            className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
            />

            <input 
            ref={blog_nameRef}
            type="text" placeholder=""
            className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
            />
            
            <input 
            ref={displaynameRef}
            type="text" placeholder="نام نمایشی جدید"
            className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
            />

            <input 
            ref={passwordRef}
            type="text" placeholder="رمز عبور جدید"
            className='border-2 border-zinc-200 rounded-md p-2 outline-none focus:border-blue-500 w-full'
            />
        </form>
    </div>
  )
}
