'use client';

import { useEffect, useState } from "react";

import Followers from "@/components/follow/followers";
import Followings from "@/components/follow/followings";

export default function Posts({params}) {

  const [details,setDetails]= useState( <Followings /> );

  useEffect(()=>{
    if(params.slug[0] === 'followings'){
      setDetails(<Followings />)
    }
    else if (params.slug[0] === 'followers'){
      setDetails(<Followers />)
    }    
  },[])


  return (
    <div className="mt-[90px]">
      {details}
    </div>
  )
}
