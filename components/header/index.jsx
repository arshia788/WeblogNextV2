import Image from "next/image";
import LogInNotifTheme from "./login-notif-theme";
import Link from "next/link";
import ReduxVarsDefaultValueSetter from "./reudx-vars-setter";

import { cookies } from "next/headers";

const getData= async(token)=>{
    const data= await fetch(`${process.env.SERVER_URL}/api/user/token-to-user`,{cache:'no-store', headers:{token}});
    return data.json() 
}

export default async function Header() {
    
    const cookieStore= cookies();

    const token= cookieStore.get('token') ? cookieStore.get('token').value : '';
    
    const data= await getData(token);


    return (
        <div>

            <header className="flex justify-between items-center py-2 px-8 shadow-[0px_4px_5px_rgba(0,0,0,0.25)] z-50 bg-[#ffffffdd] fixed top-0 left-0 right-0 backdrop-blur-md">
                
                <Link href={'/'} className="w-fit cursor-pointer">
                    <Image src={'/logo-70.png'} alt="logo" width={60} height={60} />
                </Link>

                <div className="flex justify-between items-center">

                    <LogInNotifTheme />

                    <ReduxVarsDefaultValueSetter {...data}/>
                    

                </div>
                
            </header>

        </div>
    )
}
