'use client';

import SliderImage from "../main-slider/slider-image";
import Sliderbtn from "../button";

import { useState } from "react";

export default function SliderComp() {

    // daroon in posts axe ha hastan pas omadi inja link har axe ro dadi ta betoni to images begiri.

    const postsData = [
        {
            title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ',

            value: 1,

            // ? in link mishe link on safhe. 

            link: '/posts/post1',
            src: '/images/posts/laptop2.jpg'
        }
        ,
        {
            title: 'لورم ایپسونعت چاپ ',
            value: 2,
            link: '/posts/post2',
            src: '/images/posts/tablet1.jpg',
        }
        ,
        {
            title: 'لورم ایپسوم م از صنعت چاپ ',
            value: 3,
            link: '/posts/post3',
            src: '/images/posts/tablet4.jpg'
        }
        ,
        {
            title: 'لورم ایپسوم متن  از صنعت چاپ ',
            value: 4,
            link: '/posts/post4',
            src: '/images/posts/tablet2.jpg'
        },
        {
            title: ' متن  از صنعت چاپ ',
            value: 5,
            link: '/posts/post5',
            src: '/images/posts/laptop1.jpg'
        },
    ];


    // inja ham omadi object 1 ro behesh dadi.  
    const [activeSlide, setActiveSlide] = useState(postsData[0]);

    const [animationHandler, setAnimationHandler] = useState(1);


    return (
        <div className="relative flex justify-start gap-4 items-center w-full h-[400px]">

            {/* button controll */}

            <div className="flex flex-col justify-between h-[400px]">
                {
                    postsData.map((item, index) => (
                        <Sliderbtn activeSlide={activeSlide} setAnimationHandler={setAnimationHandler} setActiveSlide={setActiveSlide} key={index} value={item} text={item.title} />
                    ))
                }
            </div>

            {/* image */}
            <div className="w-full flex justify-center items-center bg-zinc-200 rounded-lg">
                
                <SliderImage
                    data={activeSlide}
                    animationHandler={animationHandler} />
            </div>

            {/* circle controll */}

            <div className="absolute top-0 bottom-0 left-4 flex items-center ">

                <div className="flex flex-col gap-2">

                    {
                        postsData.map((da, i) => (
                            <div key={i}
                                onClick={() => {
                                    if (activeSlide.value !== da.value) {
                                        setAnimationHandler(0);

                                        // moshkel in hast ke setInterval miad har bar anjam mishe yani mishe 3 bar ama setTimeout 1 bar anjam mishe. 

                                        setTimeout(() => {
                                            setActiveSlide(da);
                                            setAnimationHandler(1)
                                        }, 800)
                                    }
                                }}
                                className={
                                    activeSlide.value === da.value
                                        ?
                                        'bg-blue-400 rounded-full h-6 w-6 cursor-pointer border-2 border-blue-500'
                                        :
                                        'bg-white border-2 border-blue-500  rounded-full h-6 w-6 cursor-pointer'
                                }></div>
                         ) )
                    }
                </div>
            </div>

            <div className="text-sm border-2 border-blue-500 bg-white rounded p-1 z-40 absolute left-2 top-5">پیشنهاد سردبیر.</div>


        </div>
    )
}
