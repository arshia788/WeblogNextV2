import { NextResponse } from "next/server";
import connect from "@/utils/connect";
import User from "@/models/User";

import {existsSync} from 'fs';
import fs from 'fs/promises';
import path from "path";

export async function POST(req) {

    try {
        connect();

        const user_id= await req.headers.get('user-id')
        

        const formData= await req.formData();
        
        const file= formData.get('file');

        if(!file){

        }
        if(file.size > 1){

        }

        if(file.size > 1){

        }

        const fileDestination= path.join(process.cwd(), "public/uploads")
        const fileArrayBuffer= await file.arrayBuffer();


        if(!existsSync(fileDestination)){
            fs.mkdir(fileDestination,{recursive:true})    
        }

        const fileName= Date.now()+ file.name;
        const fileUrl= fileDestination + '/'+fileName

        await fs.writeFile(
            path.join(fileDestination, fileName),
            Buffer.from(fileArrayBuffer)
        )

        const newData={
            image:fileUrl
        }

        await User.findByIdAndUpdate(user_id, newData ,{new:true})

        
        return NextResponse.json({data:"تصویر به روز رسانی شد"}, {status:200})
        
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ data: "failed" }, { status: 401 });

    }

}




