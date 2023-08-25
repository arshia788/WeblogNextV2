'use client';

import { useEffect } from "react";

export default function Sliderbtn({value, text, setActiveSlide, setAnimationHandler}) {

  
  return (
    <div className="line-clamp-1 rounded-md hover:bg-blue-600 trasnsiion-all duration-200 bg-blue-500 text-white w-[300px] h-[50px] px-2 flex justify-center items-center cursor-pointer">

      <div className="line-clamp-1" 
      onClick={()=>{
        setActiveSlide(value);
        setAnimationHandler(0);
        setInterval(()=>{
          setAnimationHandler(1)
        },800)
      }}>
        
        {text}
      </div>
      
    </div>
  )
}
