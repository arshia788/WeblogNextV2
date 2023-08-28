'use client';
import { CiLocationArrow1 } from 'react-icons/ci'

export default function GOToTOp() {

    const goTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    };

  return (
          <CiLocationArrow1 
          onClick={goTop}
          className='w-[3.2rem] h-[3.2rem] -rotate-45 p-2 fixed bottom-4 bg-zinc-300 border-zinc-800 transition-all duration-300 left-8 rounded-full flex flex-col gap-12 cursor-pointer hover:text-blue-500'/>

  )
}
