import Link from 'next/link';
import React from 'react';
import LinkItem
 from './link-item';

export default function UserMenu({ menuIsOpen, setMenuIsOpen }) {
    return (
        <div className='w-[300px] h-[100vh] bg-[#000000cc] fixed top-0 bottom-0 left-0 flex justify-center items-center'>


            <div className='flex flex-col gap-4 py-2'>
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

        </div>
    )
}
