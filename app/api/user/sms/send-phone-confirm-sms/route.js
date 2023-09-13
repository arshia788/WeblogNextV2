
import User from '@/models/User';
import connect from '@/utils/connect';
import { NextResponse } from 'next/server';
import axios from 'axios';


export async function GET(req){

    try {   
        connect();
        const user_id= req.headers.get('user-id');
        const userFullData= await User.findById(user_id);

        if(userFullData.active_code_number <1){
            return NextResponse.json({data:"شما فقط 5 بار میتوانید انجام دهید"}, {status:401})
        }

        const phoneConfirmCode= userFullData.active_code.toString();
        const goalUserPhone= `09118148885`;

        const formData={

            // yani phone number karbar
            "Mobile": goalUserPhone,
            "TemplateId":148482,
            "Parameters":[
                {
                    "name":"code",
                    "value":phoneConfirmCode
                }
            ]
        };

        const theUrl = 'https://api.sms.ir/v1/send/verify';

        // to samt backend bayad injori darkhast bedi.
        const response= await axios.post(theUrl, formData,{
            headers:{
                "ACCEPT":'application/json',
                "X-API-KEY":"NFOg9J5UWRIE4qq1Q95RPsikj2reCePN1Yb0B0zcuJvWNfmh7qDwLBdPnsScKNRM",
                "Content-Type":"application/json"
            }
        });
        

        if(response.status ===200){

            // DECRESE NUMBER

            // omadi on number tedad darkhast ro kam kardi.
            const newActiveCodeNumber= userFullData.active_code_number -1
            const newData= {active_code_number:newActiveCodeNumber};

            await User.findByIdAndUpdate(user_id, newData, {new:true});

            return NextResponse.json(
                {data:"لطفا تلفن همراه را چک کنید"},
                {status:200}
            )
        }else{
            return NextResponse.json(
                {data:"failed to send"},
            )
        }

    } 
    catch (error) {
        console.log(error);
        return NextResponse.json(
            {data:"خطا در ارسال پیامک"},
            {status:500}
        )
    }
}

