import connect from "@/utils/connect";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from 'bcrypt';

import {cookies} from 'next/headers';

import  Jwt  from "jsonwebtoken";


export async function POST(req){

    try {
        await connect();
        const inputData= await req.json();
        

        // length_validations.
        if(inputData.username.length <8 || inputData.username.length > 20){
            return NextResponse.json({data:"نام کاربری باید بین 8 تا 20 کارکتر باشد"}, {status:402});
        }

        if(inputData.display_name.length <8 || inputData.display_name.length > 20){
            return NextResponse.json({data:"نام نمایشی باید بین 8 تا 20 کارکتر باشد"}, {status:402});
        }

        if(inputData.blog_name.length <4 || inputData.blog_name.length > 40){
            return NextResponse.json({data:"نام کاربری باید بین 8 تا 20 کارکتر باشد"}, {status:402});
        }

        if(inputData.phone.length !== 10){
            return NextResponse.json({data:" شماره همراه باید بین 10 کارکتر و بدون +98 یا صفر ابتدای باشه"}, {status:402});
        }

        // baray in keh bereh to in error gofti agar kam tar az 0 bod biad bereh to in error. 
        
        if(inputData.phone <0 ){
            return NextResponse.json({data:" شماره همراه باید عدد باشد"}, {status:402});
        }


        if(inputData.password.length <8 || inputData.password.length > 24){
            return NextResponse.json({data:"نام کاربری باید بین 8 تا 24 کارکتر باشد"}, {status:402});
        }

        // Unique_validations 

        // nabyad mesle in ha bashe jai 
        blog_name,username,phone

        const phoneFound= await User.findOne({phone:inputData.phone});
        if(phoneFound){
            return NextResponse.json(
                {data:'شما قبلا در سایت ثبت نام کرده اید.'},
                {status:402}
            )
        }

        const usernameFound= await User.findOne({username:inputData.username});
        if(usernameFound){
            return NextResponse.json(
                {data:'  لطفا نام کاربری دیگری انتخاب بکنید'},
                {status:402}
            )
        }

        const blog_nameFound= await User.findOne({blog_name:inputData.blog_name});
        if(blog_nameFound){
            return NextResponse.json(
                {data:'  لطفا نام وبلاگ دیگری انتخاب بکنید'},
                {status:402}
            )
        }


        // For username spaces must convert dash 
        // for pass spaces should be deleted 

        // inja miad replace mikoneh space ha ro ba -
        const newUsername= inputData.username.replace(/\s+/g,'-').toLowerCase();

        // string khali yani miad hazfeh mikoneh on ro 

        // newPassword baray in gofti newPassword ta hata on space ha ham rafteh bashan. 
        const newPassword= inputData.password.replace(/\s+/g,'').toLowerCase();


        // bcryptJs password  
        const hashedPassword= bcrypt.hash(newPassword, 10);

        // Making_active_code.

        function generateRandoNumber(n){
            return Math.floor(Math.pow(10, n-1) + (Math.random()* 9* Math.pow(10, n-1)))
        }

        const active_code= generateRandoNumber(6);
        

        // CREATIN_USER
        const userFullData={

            blog_name:inputData.blog_name,
            username:newUsername,
            display_name:inputData.display_name,
            password:hashedPassword,
            phone:inputData.phone,
            createdAt: "1403/3/3" ,
            default_image:`https://avatars.dicebear.com/api/bottts/${newUsername}.svg`,

            // kasi ke signup kardan 3 hast 
            // onai ke signup nakardan 4 hastan 

            role:3,
            active_code:active_code,
            active_code_number:5,
            user_is_active:false,

            // in ro mizari false ta admin biad motavageh besheh.
            viewed:false,

            liked_posts:[],
            bookmarked_posts:[],
            followings:[],
            notifications:[],
            token:"",
        }
         
        const createdUserData= await User.create(userFullData);

        // JWT-TOKEN.

        // miay inja token ro misazi 
        const createdToken= Jwt.sign({_id:createdUserData._id, username:createdUserData.username}, process.env.TOKEN_SECRET);

        const userToken= {
            token:createdToken
        };

        await User.findByIdAndUpdate(createdUserData._id, userToken, {new:true});

        // SETTING TOKEIN IN COOKIE
        const cookieStore= cookies();
        cookieStore.set("token", createdToken);

        // DATA TO FRONT

        const send_data={
            userloged:true,
            role:3,

            // chon tazeh sabt nam kardeh
            user_is_active:false,
        }

        return NextResponse.json({data:send_data, message:' ثبت نام با موفقیت انجام شد'},{status:200});

        
    } catch (error) {
        
        return NextResponse.json({data:"failed"}, {status:401});
         
    }

}

