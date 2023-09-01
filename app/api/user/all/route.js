import User from "@/models/User";
import connect from "@/utils/connect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req){

    try {
        await connect();


        const users= (await User.find()).reverse();
        return NextResponse.json({data:users},{status:200});
        
    } catch (error) {
        
        return NextResponse.json({data:"failed"}, {status:401});
         
    }

}

