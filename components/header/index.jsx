import Image from "next/image";
import LogInNotifTheme from "./login-notif-theme";
import Link from "next/link";

import ReduxVarsDefaultValueSetter from "./reudx-vars-setter";


// rafti dar khast ro barash ferestadi.
const getData= async()=>{
     
    const data= await fetch(`${process.env.SERVER_URL}/api/user/token-to-user`,{cache:"no-store"});
    if(!data){
        throw new Error("خطا در اطلاعات کاربر")
    }
    return data.json()
}

export default async function Header() {

    const data= await getData();
    console.log(data);

    return (
        <div>

            <header className="flex justify-between items-center py-2 px-8 shadow-[0px_4px_5px_rgba(0,0,0,0.25)] z-50 bg-[#ffffffdd] fixed top-0 left-0 right-0 backdrop-blur-md">
                
                <Link href={'/'} className="w-fit cursor-pointer">
                    <Image src={'/logo-70.png'} alt="logo" width={60} height={60} />
                </Link>

                <LogInNotifTheme />
                <ReduxVarsDefaultValueSetter data={data}/>

            </header>

        </div>
    )
}
