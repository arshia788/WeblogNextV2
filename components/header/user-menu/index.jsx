import Link from 'next/link';
import React from 'react';
import LinkItem
 from './link-item';

import {IoMdClose} from 'react-icons/io'

export default function UserMenu({ menuIsOpen, setMenuIsOpen }) {
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
            </div>
            <IoMdClose 
            onClick={()=>setMenuIsOpen(!menuIsOpen)}
            className='w-8 h-8 text-white absolute top-2 left-2'/>

        </div>
    )
}
