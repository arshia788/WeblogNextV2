
import User from '@/models/User';
import connect from '@/utils/connect';
import { NextResponse } from 'next/server';


export async function POST(req){

    try {   
        connect();
        const user_id= req.headers.get('user-id');
        const userFullData= await User.findById(user_id);

        const inputData= await req.json();

        if(inputData.code != userFullData.active_code){
            return NextResponse.json(
                {data:" کد تایید اشتباه است"},
                {status:401}
            )
            
        }

        // inja omadi dg on ro true kardi ta bereh taghir koneh. 
        const newData= {user_is_active:true};
        await User.findByIdAndUpdate(user_id, newData, {new:true});
        return NextResponse.json(
            {data:" حساب کاربری با موفقیت فعال شد"},
            {status:200}
        )


    } 
    catch (error) {
        console.log(error);
        return NextResponse.json(
            {data:"خطا در ارسال پیامک"},
            {status:500}
        )
    }
}

