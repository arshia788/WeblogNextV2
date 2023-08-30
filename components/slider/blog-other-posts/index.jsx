'use client';

import BlogMainBox from "@/components/boxes/blog-main-box";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";

const BlogOtherPost = () => {

   const carouselRef = useRef();
   const carouselSwitcher = (data) => {
      if (carouselRef.current) {
         const width = carouselRef.current.offsetWidth;
         carouselRef.current.scrollTo(
            carouselRef.current.scrollLeft + width * data, 0
         )
      }
   }

   const posts = [
      {
         image: '/images/posts/tablet1.jpg',
         title: 'لورم ایپسوم متن ساختگی ',
         short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
         comments_number: 10,
         view_number: 120,
         slug: 'tablet1',
      }
      ,
      {
         image: '/images/posts/tablet2.jpg',
         title: 'لورم ایپسوم متن ساختگی ',
         short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
         comments_number: 22,
         view_number: 502,
         slug: 'mobile1',
      }
      ,
      {
         image: '/images/posts/tablet3.jpg',
         title: 'لورم ایپسوم متن ساختگی ده از طراحان گرافیک است چاپگرها و متون بلکه ده از طراحان گرافیک است چاپگرها و متون بلکه ',
         short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
         comments_number: 25,
         view_number: 12004,
         slug: 'tablet1',
      },

      {
         image: '/images/posts/tablet1.jpg',
         title: 'لورم ایپسوم متن ساختگی ',
         short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
         comments_number: 10,
         view_number: 120,
         slug: 'laptop1',
      },
      {
         image: '/images/posts/tablet1.jpg',
         title: 'لورم ایپسوم متن ساختگی ',
         short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
         comments_number: 10,
         view_number: 120,
         slug: 'laptop1',
      },
      {
         image: '/images/posts/tablet1.jpg',
         title: 'لورم ایپسوم متن ساختگی ',
         short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
         comments_number: 10,
         view_number: 120,
         slug: 'laptop1',
      },
      {
         image: '/images/posts/tablet1.jpg',
         title: 'لورم ایپسوم متن ساختگی ',
         short_desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
         comments_number: 10,
         view_number: 120,
         slug: 'laptop1',
      },
   ];


   return (
      <div className=" container mx-auto " >
         <section className="flex flex-col gap-4 px-2">
            <header className=" flex justify-between items-center">
               <h2 className=" text-orange-500 text-2xl border-r-orange-400 border-r-2 pr-1">
                  مقالات دیگر این وبلاگ
               </h2>
               <div className=" flex items-center gap-1 text-zinc-800">
                  <FaChevronRight onClick={() => { carouselSwitcher(1) }} className=" cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-2 rounded" />
                  <FaChevronLeft onClick={() => { carouselSwitcher(-1) }} className=" cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-2 rounded" />
               </div>
            </header>
            <div ref={carouselRef} className=" sliderContainer h-[24rem] max-w-[94rem] w-full overflow-x-scroll px-4">
               <div className="sliderItem flex justify-between items-center gap-8 ">
                  {
                     posts.map((item,index)=><BlogMainBox key={index} data={item}/>)
                  }
               </div>
            </div>
         </section>
      </div>
   );
};

export default BlogOtherPost;
