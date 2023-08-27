import React from 'react'
import BlogerBox from '../boxes/Bloger-box'
import NewBlogBox from '../boxes/new-blog-box'

export default function MainPageBestBlogsAndNewPosts() {

    const blogersInfo = [
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },
        {
            image: '/images/ads/5556583.jpg',
            title: 'وبلاگ تستی',
            short_desc: 'وبلاگ واسه نکست جی اس',
            link:'/link1'
        },

    ];

    const posts=[
        {
            image:'/images/posts/tablet1.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'tablet1',
            date:'1بهمن 1500'
        }
        ,
        {
            image:'/images/posts/tablet2.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:22,
            view_number:502,
            slug:'mobile1',
            date:'1بهمن 1500'
        }
        ,
        {
            image:'/images/posts/tablet3.jpg',
            title:'لورم ایپسوم متن ساختگی ده از طراحان گرافیک است چاپگرها و متون بلکه ده از طراحان گرافیک است چاپگرها و متون بلکه ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:25,
            view_number:12004,
            slug:'tablet1',
            date:'1بهمن 1500'
        },

        {
            image:'/images/posts/tablet1.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
            date:'1بهمن 1500'
        },
        {
            image:'/images/posts/tablet1.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
            date:'1بهمن 1500'
        },
        {
            image:'/images/posts/tablet1.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
            date:'1بهمن 1500'
        },
        
    ];


    return (
        <section className=" bg-zinc-100 rounded-lg p-4 flex justify-between items-start gap-4">

            <div className='flex flex-col gap-12 w-[280px]'>
                <h2 className=" font-[vazirbold] text-zinc-600 text-[1px]">
                    برترین وبلاگها
                </h2>

                <div className="flex flex-col gap-4">
                    {
                        blogersInfo.map((item, index) => (
                            <BlogerBox key={index} data={item} />
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col gap-12 w-full '>
                <h2 className=" font-[vazirbold] text-zinc-600 text-[1px]">
                    جدیدترین مقالات
                </h2>

                <div className="flex flex-col gap-8 w-full">
                    {
                        posts.map((item, index) => (
                            <NewBlogBox key={index} data={item} />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}
