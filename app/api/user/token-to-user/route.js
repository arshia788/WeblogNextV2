import User from "@/models/User";
import connect from "@/utils/connect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

import { cookies } from "next/headers";
import  Jwt  from "jsonwebtoken";

export async function GET(req){

    let send_data={
        logged:false,
        role:4,
        user_is_active:false,
        user_image:'',
    }

    try {
        
        connect();

        const cookieStore= cookies()

        // pas get vase khondan hast ke biay check bokoni on token ro 
        const theToken= cookieStore.get('token').value;

        // omadi bebini toekni darim ba in esme ya na chon token ro rafti gerefti az karbar. 
        const verified=Jwt.verify(theToken, process.env.TOKEN_SECRET)
        console.log(verified);

        // ba dadan id omadi on user ro peda kardi. 
        const userFullData= await User.findById(verified._id) 

        send_data={
            loged:true,
            role:userFullData.role,
            user_is_active:userFullData.user_is_active,
            user_image:userFullData.default_image,
        }


        return NextResponse.json({data:send_data},{status:200});
        
    } catch (error) {
        
        return NextResponse.json({data:"failed"}, {status:401});
         
    }

}






