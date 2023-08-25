'use client';

import SliderImage from "../main-slider/slider-image";
import Sliderbtn from "../button";

import { useState, useEffect } from "react";

export default function SliderComp() {

    // daroon in posts axe ha hastan pas omadi inja link har axe ro dadi ta betoni to images begiri.

    const postsData = [
        {
            title:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ',
            
            value: 1,
            link:'/posts/post1',
            src:'/images/posts/laptop2.jpg'
        }
        ,
        {
            title: 'لورم ایپسونعت چاپ ',
            value: 2,
            link:'/posts/post2',
            src:'/images/posts/tablet1.jpg'
        }
        ,
        {
            title: 'لورم ایپسوم م از صنعت چاپ ',
            value: 3,
            link:'/posts/post3',
            src:'/images/posts/tablet4.jpg'
        }
        ,
        {
            title: 'لورم ایپسوم متن  از صنعت چاپ ',
            value: 4,
            link:'/posts/post4',
            src:'/images/posts/tablet2.jpg'
        },
        {
            title: ' متن  از صنعت چاپ ',
            value: 5,
            link:'/posts/post5',
            src:'/images/posts/laptop1.jpg'
        },
    ]

    // inja ham omadi object 1 ro behesh dadi.  
    const [activeSlide,setActiveSlide]= useState(postsData[0]);

    const [animationHandler, setAnimationHandler]= useState(1);

    
    useEffect(()=>{
        setAnimationHandler(0);

        setInterval(()=>{
            setAnimationHandler(1)
        },800)

    },[activeSlide])


    return (
        <div className="flex justify-start gap-4 items-center w-full h-[400px] ">
            
            <div className="flex flex-col justify-between h-[400px]">
                {
                    postsData.map((item, index) => (
                        <Sliderbtn setAnimationHandler={setAnimationHandler} setActiveSlide={setActiveSlide} key={index} value={item} text={item.title} />
                    ))
                }
            </div>

            <div className="w-full flex justify-center items-center">
                <SliderImage data={activeSlide} animationHandler={animationHandler}/>
            </div>
            
        </div>
    )
}
