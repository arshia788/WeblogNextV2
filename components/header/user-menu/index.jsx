'use client';

import React, { useState, useEffect } from 'react';
import LinkItem from './link-item';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import {IoMdClose} from 'react-icons/io';

// redux---
import { useDispatch } from 'react-redux';

// redux-actions---
import { setuserImageValue } from '@/store/slices/userImageSlice';
import { userIsActivetoFalse } from '@/store/slices/user-is-active';
import { loggedtoFalse } from '@/store/slices/logedSlice';
import { setRoleValue } from '@/store/slices/roleSlice';


export default function UserMenu({ menuIsOpen, setMenuIsOpen }) {

    const [logoutManager,setLogoutManager]= useState(false);
    const dispatch= useDispatch();
    const router= useRouter();

    useEffect(()=>{

        if(logoutManager) router.push('/sign-in')

    },[logoutManager])

    return (
        <div className={
            menuIsOpen ? 
            'w-[320px] h-[100vh] backdrop-blur-sm bg-[#000000cc] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-all duration-300'
            
            :
            'w-[320px] h-[100vh] backdrop-blur-sm bg-[#000000cc] fixed top-0 bottom-0 -left-[320px] -right-[100%] flex justify-center items-center transition-all duration-300'            
        }
        >
        


            <div className='flex flex-col gap-4 p-4'>
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="تنظیمات" link="/setting" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="پیام ها" link="/notifications" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="فالوورها" link="/follow/followers" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="فالووینگ ها" link="/follow/followings" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="ایجاد پست" link="/create-post" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="همه پست های من" link="/my-posts/all" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="پیش نویس های من" link="/my-posts/drafts" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="پست های منتشر شده" link="/my-posts/published" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="در انتظار تایید مدیر" link="/my-posts/waiting" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="پست های بوک مارک شده" link="/my-posts/bookmarked" />
                <LinkItem setMenuIsOpen={setMenuIsOpen} title="پست های لایک شده" link="/my-posts/liked" />        
                
                <button 

                onClick={()=>{

                    // injori omadi on token ro hazaf kardi. 
                    Cookies.set('token', '', {expires:0}),

                    // ! chon dari logout mikoni pas bayad in redux ro daobareh dorost bokoni. 
                    setLogoutManager(logoutManager)

                    dispatch(setuserImageValue('https://secure.gravatar.com/avatar/username?s=60&d=identicon'))

                    dispatch(userIsActivetoFalse());
                    dispatch(setRoleValue(4));
                    dispatch(loggedtoFalse());
                }}

                className='w-[255px] text-center text-white transition-all duration-300 hover:bg-blue-600 bg-blue-600 py-2 rounded-md'>خروج</button>
            </div>
            <IoMdClose 
            onClick={()=>setMenuIsOpen(!menuIsOpen)}
            className='w-8 h-8 text-white absolute top-2 left-2'/>

        </div>
    )
}
