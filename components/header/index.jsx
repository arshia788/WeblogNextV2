import Image from "next/image";
import LogInNotifTheme from "./login-notif-theme";
import Link from "next/link";


export default function Header() {
    return (
        <div>

            <header className="flex justify-between items-center py-2 px-8 shadow-[0px_4px_5px_rgba(0,0,0,0.25)] z-50 bg-[#ffffffdd] fixed top-0 left-0 right-0 backdrop-blur-md">
                
                <Link href={'/'} className="w-[230px] cursor-pointer">
                    <Image src={'/logo-70.png'} alt="logo" width={60} height={60} />
                </Link>

                <LogInNotifTheme />

            </header>

        </div>
    )
}
