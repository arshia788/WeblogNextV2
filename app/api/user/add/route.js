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
        console.log(inputData);
        

        // length_validations.

        if(inputData.username.length <8 || inputData.username.length > 20){
            return NextResponse.json({data:"نام کاربری باید بین 8 تا 20 کارکتر باشد"}, {status:402});
        }

        if(inputData.displayname.length <8 || inputData.displayname.length > 20){
            return NextResponse.json({data:"نام نمایشی باید بین 8 تا 20 کارکتر باشد"}, {status:402});
        }

        if(inputData.blog_name.length <4 || inputData.blog_name.length > 40){
            return NextResponse.json({data:"نام کاربری باید بین 8 تا 20 کارکتر باشد"}, {status:402});
        }

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

        // Unique_validations 


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


        const newUsername= inputData.username.replace(/\s+/g,'-').toLowerCase();

        const newPassword= inputData.password.replace(/\s+/g,'').toLowerCase();


        // bcryptJs password  
        const hashedPassword= await bcrypt.hash(newPassword, 10);

        // Making_active_code.

        function generateRandoNumber(n){
            return Math.floor(Math.pow(10, n-1) + (Math.random()* 9* Math.pow(10, n-1)))
        }

        const active_code= generateRandoNumber(6);
        

        // CREATIN_USER

        const date= new Date();

        const userFullData={

            username:newUsername,
            blog_name:inputData.blog_name,
            displayname:inputData.displayname,
            password:hashedPassword,
            phone:inputData.phone,
            createdAt: date.toLocaleDateString("fa-IR",{year:"numeric", month:'long', day:'numeric'}) ,
            
            default_image:`https://secure.gravatar.com/avatar/${newUsername}?s=60&d=identicon`,

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

        // console.log(userFullData); 
         
        const createdUserData= await User.create(userFullData);

        // JWT-TOKEN.

        
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
            user_is_active:false,
            user_image:userFullData.default_image,
            blog_slug:userFullData.username

        }

        return NextResponse.json({data:send_data, message:' ثبت نام با موفقیت انجام شد'},{status:200});

        
    } catch (error) {

        console.log(error);
        return NextResponse.json({data:"ثبت نام انجام نشد"}, {status:401});
         
    }

}

