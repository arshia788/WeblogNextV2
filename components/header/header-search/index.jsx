'use client';

import {BsArrowLeftShort} from 'react-icons/bs';
import {BsSearch} from 'react-icons/bs';
import { useState } from 'react';

export default function Headersearch() {

  const [arrowShow, setArrowShow] = useState(false);


  

  return (
    <form className='flex justify-center items-center border-2 bg-zinc-100 rounded-full w-[300px] py-1 px-1'>
      
      <BsSearch className='w-6 h-6 text-zinc-600'/>

      <input 
      onChange={e=> {
        e.target.value.length >0 ? setArrowShow(true) : setArrowShow(false);
      } }
      placeholder='جستجو...' type='text' 
      className='w-80 p-1 outline-none bg-transparent placeholder-zinc-500 focus:placeholder-zinc-400' />

      {/* baray in ke on arrow neshon dadeh beshe omadi in ro shart gozashti ke har mogeh length bishtar az 0 shod bia neshon bedeh. */}
      
      <div className='w-8'>
      <BsArrowLeftShort 
      className= {
        arrowShow === false
        ? 'hidden border-2 border-transparent hover:border-blue-500 cursor-pointer transition-all duration-500  rounded w-6 h-6'
        :
        'border-2 border-transparent hover:border-blue-500 cursor-pointer transition-all duration-500  rounded w-6 h-6'

      } />

      </div>

    </form>
  )
}
