import User from "@/models/User";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";


export async function GET(req, {params}){

   try{
      connect();

      const goalSlug= params.slug;
      const goalUser= await User.findOne({username:goalSlug}).select({blog_name:1, default_image:1,image:1,details:1, });


      if(!goalUser){
         return NextResponse.json({data:"نبود کاربر",},{status:401});
      }


      // in ro sakhti ta check bokoni aya esme karbar hast ya na. 
      const userData={
         blog_name:goalUser.blog_name,
         details:goalUser.details,
         image:goalUser.image== ""?goalUser.default_image :goalUser.image,
      }

      // inja miay in karbar ro pas midi be front va onja miay hala dorost mikoni. 

      return NextResponse.json({data:userData},{status:200});
   }catch(error){
      console.log(error);
      return NextResponse.json({data:"failed ",},{status:401});
   }

}