import BreadCrumb from '@/components/post-page/bread-crumb';
import BlogerBox from '@/components/boxes/Bloger-box';
import PostMeta from '@/components/post-page/post-meta';
import RandomPostBox from '@/components/boxes/random-post';
import Image from 'next/image';
import BlogOtherPost from '@/components/slider/blog-other-posts';

import { BiLike } from 'react-icons/bi';
import { BsFillBookmarkFill } from 'react-icons/bs';

export default function SinglePostPage({ params }) {

  const data = {
    title: 'عنوان مقاله مورد نظر',
    blog_title: 'عنوان وبلاگ',
    blog_link: "nextjs_blog",
    blog_image: '/images/ads/5556583.jpg',
    short_desc: 'وبلاگ تستی',
    study_time: 15,
    created_at: '15 دی 1410',
    slug: 'post_slug',
    image: '/images/posts/tablet1.jpg',
    details: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    tags: ['تگ 1', "تگ 2"],
    categories: ['دسته 1', "دسته 2"],
    blog_othere_posts: [

    ],
    comments: [

    ],
    likes_number:10

  };

  const blogerData = {
    image: data.blog_image,
    title: data.blog_title,
    short_desc: data.short_desc,
    link: data.blog_link
  };

  const metaDataCompData = {
    study_time: data.study_time,
    created_at: data.created_at,
    blog_link: data.blog_link,
    slug: data.slug
  }


  const randomPosts = [
    {
      image: '/images/posts/mobile1.jpg',
      title: 'خحشیس شیشئسحخی شخی',
      short_desc: 'شخیدشخیسهد شصیدخ شسیشی',
      link: '/test'
    },
    {
      image: '/images/posts/mobile1.jpg',
      title: 'خحشیس شیشئسحخی شخی',
      short_desc: 'شخیدشخیسهد شصیدخ شسیشی',
      link: '/test'
    },
    {
      image: '/images/posts/mobile1.jpg',
      title: 'خحشیس شیشئسحخی شخی',
      short_desc: 'شخیدشخیسهد شصیدخ شسیشی',
      link: '/test'
    },
    {
      image: '/images/posts/mobile1.jpg',
      title: 'خحشیس شیشئسحخی شخی',
      short_desc: 'شخیدشخیسهد شصیدخ شسیشی',
      link: '/test'
    },
    {
      image: '/images/posts/mobile1.jpg',
      title: 'خحشیس شیشئسحخی شخی',
      short_desc: 'شخیدشخیسهد شصیدخ شسیشی',
      link: '/test'
    },
  ]

  return (
    <div className='felx flex-col gap-12 w-full mt-14'>
      <div className='flex justify-between items-start gap-4'>

        <main className='felx flex-col gap-12 w-full '>

          <div className='felx flex-col gap-12 w-full bg-zinc-100 rounded-lg'>
            <div className='flex justify-between items-center w-full'>

              <BreadCrumb blog_link={data.blog_link} blog_title={data.blog_title} Post_title={data.title} />

              <div className='bg-white p-2 rounded-xl flex justify-center items-center'>
                <BiLike className='cursor-pointer w-[22px] h-[22px] text-zinc-600 transition-all duration-300 hover:bg-blue-500' />
                <span>
                  {data.likes_number}
                </span>
              </div>

            </div>


            <section className='flex justify-between items-center gap-4'>
              <BlogerBox data={blogerData} />
              <PostMeta data={metaDataCompData} />
            </section>

            <section className='flex flex-col gap-12 w-full'>
              <h1>عموان این مقاله</h1>
              <div className=' flex justify-center items-center '>
                <div className='relative w-[700px] h-[500px]'>
                  <Image src={data.image} alt={data.title} fill className='object-cover rounded-lg' title={data.title} />
                </div>
              </div>

              <p className='text-justify leading-9 text-zinc-700'>{data.details}</p>

              <div className='flex justify-start items-center gap-4 flex-wrap'>
                {data.categories.map((item, index) => (
                  <div key={index} className='bg-zinc-200 rounded px-3 py-1 text-base sm:text-sm'>{item} #</div>
                ))}
              </div>

              <div className='flex justify-start items-center gap-4 flex-wrap'>
                {data.tags.map((item, index) => (
                  <div key={index} className='bg-zinc-200 rounded px-3 py-1 text-base sm:text-sm'>{item} #</div>
                ))}
              </div>

            </section>
          </div>


        </main>

        <aside className='sticky top-[5.8rem] left-0 w-[360px] min-w-[360px] flex flex-col gap-4'>

          <div className='bg-zinc-100 rounded-lg p-4'>
            <BlogerBox data={blogerData} />
          </div>
          <div className='bg-zinc-100 rounded-lg p-4 flex flex-col gap-6'>
            {
              randomPosts.map((item, index) => <RandomPostBox key={index} data={item} />)
            }
          </div>

        </aside>

      </div>

      <section className='flex flex-col gap-12 w-full bg-zinc-100 rounded-lg'>
        <BlogOtherPost />
      </section>

      <section className='flex flex-col gap-12 w-full bg-zinc-100 rounded-lg h-[400px]'>
        <h2>    دیدگاهای این مقاله </h2>
      </section>

      <div className='fixed bottom-2 right-0 left-0 flex justify-center items-center'>

        <div className='flex justify-center items-center gap-6 bg-[#ffffffdd] p-2 rounded-full'>
          <BiLike className='cursor-pointer w-[22px] h-[22px] text-zinc-600 transition-all duration-300 hover:bg-blue-500' />

          <BsFillBookmarkFill className='cursor-pointer w-[22px] h-[22px] text-zinc-600 transition-all duration-300 hover:bg-blue-500' />
        </div>

      </div>

    </div>
  )
}
