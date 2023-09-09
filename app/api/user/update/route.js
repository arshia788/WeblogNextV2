
import User from "@/models/User";
import connect from "@/utils/connect";
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";


export async function POST(req) {

    try {
        connect();

        const user_id = req.headers.get('user-id');

        console.log('userId----', user_id);

        const inputData = await req.json();


        // * baray in sakhti ta tarf natoneh chiz hay bishtar ro update bokoneh.
        // ! pas omadi ba in kar begi faght chi ha bayad update beshan.

        // * inja omadi sakhti va daroon har kodom omadi update kardi. 
        const newData = {
            blog_name: undefined,
            username: undefined,
            displayname: undefined,
            password: undefined,
            details:undefined
        }


        // USERNAME 

        if (inputData.username !== undefined) {

            if (!/^[\w\d\s-]+$/.test(inputData.username)) {
                return NextResponse.json(
                    { data: "برای بخش نام کاربری، فقط اعداد و عبارات انگلیسی را بدون فاصله وارد کنید... ", },
                    { status: 402 }
                );
            }

            if (inputData.username.length < 8 || inputData.username.length > 20) {
                return NextResponse.json({ data: "نام کاربری باید بین 8 تا 20 کارکتر باشد" }, { status: 402 });
            }

            // in alan hamoon karbareh hast.
            const usernameFound= await User.findOne({username:inputData.username})

            // *baray in be bug khordi chon shayad karbari nabashe ba in username pas miay be error mikhori baray hamin omadi gofti agar bashe ya id on esme ba id dar khast konandeh yeki nabasheh bia in kar ro bokon. 
            
            if(!usernameFound || usernameFound._id === user_id){
                const newUsername = inputData.username.replace(/\s+/g, '-').toLowerCase();
                newData.username = newUsername;
            }else{
                return NextResponse.json({data:"لطفا نام کاربری دیگری انتخاب بکنید"},{status:402})
            }
            
        };



        // ! details
        if (inputData.details !== undefined) {

            if (!/^[\w\d\s-]+$/.test(inputData.details)) {
                return NextResponse.json(
                    { data: "برای بخش نام کاربری، فقط اعداد و عبارات انگلیسی را بدون فاصله وارد کنید... ", },
                    { status: 402 }
                );
            }

            if (inputData.details.length < 8 || inputData.details.length > 20) {
                return NextResponse.json({ data: "نام کاربری باید بین 8 تا 20 کارکتر باشد" }, { status: 402 });
            }

            // in alan hamoon karbareh hast.
            const detailsFound= await User.findOne({details:inputData.details})

            // *baray in be bug khordi chon shayad karbari nabashe ba in username pas miay be error mikhori baray hamin omadi gofti agar bashe ya id on esme ba id dar khast konandeh yeki nabasheh bia in kar ro bokon. 
            
            if(!detailsFound || detailsFound._id === user_id){
  
                newData.details = inputData.details;
            }else{
                return NextResponse.json({data:"لطفا نام کاربری دیگری انتخاب بکنید"},{status:402})
            }
            
        };


        // !blog_name

        if (inputData.blog_name !== undefined) {

            if (inputData.blog_name.length < 4 || inputData.blog_name.length > 40) {
                return NextResponse.json({ data: "نام کاربری باید بین 8 تا 20 کارکتر باشد" }, { status: 402 });
            }

            const blog_nameFound= await User.findOne({blog_name:inputData.blog_name})

            
            if(!blog_nameFound || blog_nameFound._id === user_id){
                
                newData.blog_name = blog_name;
            }else{
                return NextResponse.json({data:"لطفا نام وبلاگ دیگری انتخاب بکنید"},{status:402})
            }

        };




        if (inputData.displayname !== undefined) {

            console.log(inputData.displayname);
            if (inputData.displayname.length < 8 || inputData.displayname.length > 20) {
                return NextResponse.json({ data: "نام نمایشی باید بین 8 تا 20 کارکتر باشد" }, { status: 402 });
            }
            newData.displayname = inputData.displayname;
        };


        // !Password
        if (inputData.password !== undefined) {
            if (inputData.password.length < 8 || inputData.password.length > 24) {
                return NextResponse.json({ data: "نام کاربری باید بین 8 تا 24 کارکتر باشد" }, { status: 402 });
            }

            const newPassword = inputData.password.replace(/\s+/g, '').toLowerCase();

            // bcryptJs password  
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            newData.password = hashedPassword;
        };



        // ? omadi on userId ro update kardi 
        await User.findByIdAndUpdate(user_id, newData, { new: true });


        return NextResponse.json({ data: 'data updated' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ data: "failed" }, { status: 401 });

    }

}




