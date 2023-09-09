import User from "@/models/User";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";

import Jwt  from "jsonwebtoken";

export async function GET(req){

    let send_data={
        loged:false,
        role:4,
        user_is_active:false,
        user_image:'',
    }


    try {
        
        connect();

        const token= req.headers.get("token");
        const verified= Jwt.verify(token, process.env.TOKEN_SECRET)
        console.log(verified);

        const userFullData= await User.findById(verified._id) 

        send_data={
            loged:true,
            role:userFullData.role,
            user_is_active:userFullData.user_is_active,
            user_image:userFullData.default_image,
            blog_slug:userFullData.blog_slug
        }

        return NextResponse.json({data:send_data},{status: 200});

        
    } catch (error) {

        console.log(error);
        return NextResponse.json({data:"failed"}, {status:200});
         
    }

}






