import Link from 'next/link';
import React from 'react';
import LinkItem
 from './link-item';

import {IoMdClose} from 'react-icons/io'

export default function UserMenu({ menuIsOpen, setMenuIsOpen }) {
    return (
        <div className={
            menuIsOpen ? 
            'w-[320px] h-[100vh] bg-[#000000cc] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-all duration-300'
            :
            'w-[320px] h-[100vh] bg-[#000000cc] fixed top-0 bottom-0 -left-[320px] -right-[100%] flex justify-center items-center transition-all duration-300'            
        }
        >
        


            <div className='flex flex-col gap-4 p-4'>
                <LinkItem  title="تنظیمات" link="/setting" />
                <LinkItem  title="پیام ها" link="/notifications" />
                <LinkItem  title="فالوورها" link="/follow/followers" />
                <LinkItem  title="فالووینگ ها" link="/follow/followings" />
                <LinkItem  title="ایجاد پست" link="/create-post" />
                <LinkItem  title="همه پست های من" link="/my-posts/all" />
                <LinkItem  title="پیش نویس های من" link="/my-posts/drafts" />
                <LinkItem  title="پست های منتشر شده" link="/my-posts/published" />
                <LinkItem  title="در انتظار تایید مدیر" link="/my-posts/waiting" />
                <LinkItem  title="پست های بوک مارک شده" link="/my-posts/bookmarked" />
                <LinkItem  title="پست های لایک شده" link="/my-posts/liked" />        
            </div>
            <IoMdClose 
            onClick={()=>setMenuIsOpen(!menuIsOpen)}
            className='w-8 h-8 text-white absolute top-2 left-2'/>

        </div>
    )
}
