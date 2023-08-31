'use client';

import { useState } from "react";

import SplashScreenBox from "@/components/splash-screen-box";

// import { usePathname } from 'next/navigation';

export default function SplashScreenProvider({children}) {


    // const pathname = usePathname();

    // const isHome = pathname === '/';    

    const [isLoading,setIsLoading]= useState(true);

    setTimeout(()=>{
        setIsLoading(false)
    },2000)

    return (
        <div>

            {
                isLoading ? <SplashScreenBox /> :children
            }
        </div>
    )
}
