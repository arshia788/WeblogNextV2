'use client';

import SplashScreenBox from "@/components/splash-screen-box";

import { usePathname } from 'next/navigation';
import { useState } from "react";

export default function SplashScreenProvider({children}) {

    // ba path name miay on url ro migiri 

    const pathname = usePathname();

    // gofti agar home hast biad behet begeh true agar nabashe false mideh
    const isHome = pathname === '/';    

    const [isLoading,setIsLoading]= useState(isHome);

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
