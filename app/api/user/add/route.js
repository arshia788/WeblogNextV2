import User from "@/models/User";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";


export async function POST(req){

    try {
        await connect();
        const inputData= await req.json();
        

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

        // For username spaces must convert dash 
        
        return NextResponse.json({data:users},{status:200});

        
    } catch (error) {
        
        return NextResponse.json({data:"failed"}, {status:401});
         
    }

}

