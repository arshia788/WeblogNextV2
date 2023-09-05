import connect from "@/utils/connect";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from 'bcrypt';

import {cookies} from 'next/headers';

import  Jwt  from "jsonwebtoken";


export async function POST(req){

    try {
        connect();
        const inputData= await req.json();
        

        // length_validations.

        function is_numeric(str){
            return /^\d+$/.test(str);
        }

        if(is_numeric(inputData.phone) === false){
            return NextResponse.json({data:"شماره همراه باید عدد باشد"},{status:402})
        }

        if(inputData.phone.length !== 10){
            return NextResponse.json({data:" شماره همراه باید بین 10 کارکتر و بدون +98 یا صفر ابتدای باشه"}, {status:402});
        }

        
        if(inputData.phone <0 ){
            return NextResponse.json({data:" شماره همراه باید عدد باشد"}, {status:402});
        }


        if(inputData.password.length <8 || inputData.password.length > 24){
            return NextResponse.json({data:"نام کاربری باید بین 8 تا 24 کارکتر باشد"}, {status:402});
        }

        const newPassword= inputData.password.replace(/\s+/g,'').toLowerCase();


        const foundPhone= await User.findOne({phone:inputData.phone});

        if(!foundPhone) return NextResponse.json({data:"لطفا ثبت نام کنید"},{status:402})
        
        
        
        
        // compare bcrypt password  
        const validPassword= await bcrypt.compare(newPassword, foundPhone.password);
        
        if(!validPassword) return NextResponse.json({data:" رمز عبور اشتباه است  "},{status:402})


        // JWT-TOKEN.        
        const createdToken = foundPhone.token


        // SETTING TOKEIN IN COOKIE
        const cookieStore= cookies();

        // maxAge baray in hast ke vaghti site ro bebandi 
        cookieStore.set("token", createdToken, {maxAge:60 * 60 * 24* 60});

        // DATA TO FRONT

        // omadi az on user data ro gerefti. 
        const send_data={
            role:foundPhone.role,
            user_is_active:foundPhone.user_is_active,
            user_image:foundPhone.default_image,
            blog_slug:foundPhone.username
        }

        return NextResponse.json({data:send_data, message:' خوش آمدید'},{status:200});

        
    } catch (error) {

        console.log(error);
        return NextResponse.json({data:"ثبت نام انجام نشد"}, {status:401});
         
    }

}

