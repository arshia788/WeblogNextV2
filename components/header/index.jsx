import Image from "next/image";
import Headersearch from "./header-search";
import LogInNotifTheme from "./login-notif-theme";


export default function Header() {
    return (
        <div>

            <header className="flex justify-between items-center py-2 px-8 shadow-[0px_4px_5px_rgba(0,0,0,0.25)] z-50 bg-[#ffffffdd] fixed top-0 left-0 right-0" >
                
                <div className="w-[230px] ">
                    <Image src={'/logo-70.png'} alt="logo" width={60} height={60} />
                </div>

                <Headersearch />
                <LogInNotifTheme />
            </header>

        </div>
    )
}
