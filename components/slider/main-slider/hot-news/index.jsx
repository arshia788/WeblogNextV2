'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function HotNews() {

    const newslist=[
        {
            title:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
            link:'/post1',
            value:0
        },
        {
            title:'لورم ایپسوم متنم از صنعت چاپ',
            link:'/post2',
            value:1
        },
        {
            title:'لورمم از صنعت چاپ',
            link:'/post3',
            value:2
        },
    ]

    const [activeNews, setActiveNews]= useState(newslist[0]);

    setTimeout(()=>{

        let item= activeNews.value;

        // yani gofti agar on item akhari bod bia bokonesh az aval 
        if(item === newslist.length-1){
            setActiveNews(newslist[0])
        }
        // agar na bia yeki + bokon. 
        else{
            setActiveNews(newslist[item + 1])

        }

    },4000)

    return (
        <div>
            <div className="flex items-center justify-start gap-1">
                <span className="font-[vazirbold]">داغ ترین ها:</span>

                <Link href={`/posts/${activeNews.link}`} className="text-base sm:text-sm">
                    {activeNews.title}
                </Link>

            </div>
        </div>
    )
}
