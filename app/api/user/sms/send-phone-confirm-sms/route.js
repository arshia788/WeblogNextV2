
import User from '@/models/User';
import connect from '@/utils/connect';
import { NextResponse } from 'next/server';
import axios from 'axios';


export async function GET(req){

    try {   
        
        connect();

        const user_id= req.headers.get('user-id');
        const userFullData= await User.findById(user_id);


        const phoneConfirmCode= userFullData.active_code.toString();
        const goalUserPhone= `0${userFullData.phone}`;

        

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
        }

        const theUrl = 'https://api.sms.ir/v1/send/verify';
        axios.post(theUrl, formData,{
            headers:{
                "ACCEPET":'application/json',
                "X-API-KEY":"PN1TVeBeaAehFLJAKU4XdfpsFXsQguYfleO0bV4ceh6diTZid2hRXza3uSkBbDef",
                "Content-Type":"application/json"
            }
        })
        .then(data=>{
            console.log(data.data);

            return NextResponse.json(
                {data:"لطفا تلفن همراه را چک کنید"},
                {status:200}
            )
        })
        .catch(err=>{
            console.log(err.response.data);
            return NextResponse.json(
                {data:"failed to send"},
                {status:400}
            )
        })



    } catch (error) {
        return NextResponse.json(
            {data:"Failed to connect from sms."},
            {status:500}
        )
    }
}

