"use client";
import { useEffect, useState } from "react";

import MyAllPosts from "@/components/my_posts/all";
import MyDrafPosts from "@/components/my_posts/draft";
import MyPublishedPosts from "@/components/my_posts/published";
import MywaitingForMangerPosts from "@/components/my_posts/waiting-for-manager";
import MyBookMarkedPosts from "@/components/my_posts/bookmarked";
import MyLikedPosts from "@/components/my_posts/liked";


const Posts = ({params}) => {

   const [details,setdetails]=useState(<MyAllPosts/>);


   useEffect(()=>{
      if(params.slug[0]=="all"){
         setdetails(<MyAllPosts/>);
      }
      else if(params.slug[0]=="drafts"){
         setdetails(<MyDrafPosts/>);
      }
      else if(params.slug[0]=="published"){
         setdetails(<MyPublishedPosts/>);
      }
      else if(params.slug[0]=="waiting"){
         setdetails(<MywaitingForMangerPosts/>);
      }
      else if(params.slug[0]=="bookmarked"){
         setdetails(<MyBookMarkedPosts/>);
      }
      else if(params.slug[0]=="liked"){
         setdetails(<MyLikedPosts/>);
      }
   },[params.slug[0]]);


   return (
      <div>
         {details}
      </div>
   );
}

export default Posts;