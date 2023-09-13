import NewBlogBox from '@/components/boxes/new-blog-box';
import BlogFollowBtn from '@/components/blog-follow-btn/inedx';
import Image from 'next/image';


const getData=async(input)=>{
    const data= await fetch(`${process.env.SERVER_URL}/api/user/get-one-blog-by-slug/${input}`,{cache:'no-store'})
    return data.json();
}

export default async function SingleBlogPage({ params }) {


    const userData= await getData(params.blog_slug)
    console.log(userData);

    const data= {
        image:'/images/ads/business_social_media_banner_19.jpg',
        name:'عنوان وبلاگ',
        short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        followes_number:20,
        following_number:5,
        posts:[
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
            
        ],
    }


    
    return (
        <div>

            <section className='flex flex-col gap-14'>

                <div className='flex flex-col gap-8 items-center mb-4'>

                    <div className='relative w-[150px] h-[150px]'>
                        <Image className='rounded-full border-4 border-blue-500' 
                        src={userData.data.image} 
                        fill
                        alt={'al;sd;sad'}/>
                    </div>

                    <h1>{userData.data.blog_name}</h1>
                    <p className='w-[600px] max-w-[600px] text-center'>{userData.data.details}</p>

                    <div className='flex justify-center items-center gap-8'>
                        <div> دنبال میشود{data.followes_number}</div>
                        <div> دنبال میکند{data.following_number}</div>
                    </div>
                    
                    <BlogFollowBtn />
                </div>

            </section>

            {/* posts */}
            <section className='flex flex-col gap-4'>
                {
                    data.posts.map((item,index)=>(
                        <NewBlogBox key={index} data={item}/>
                    ))
                }
            </section>
        </div>
    )
}
