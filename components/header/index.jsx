import Image from "next/image";
import Headersearch from "./header-search";
import LogInNotifTheme from "./login-notif-theme";


export default function Header() {
    return (
        <div>

            <header className="flex justify-between items-center p-2 shadow-[0px_10px_10px_rgba(0,0,0,0.25)]">
                <div>
                    <Image src={'/logo-70.png'} alt="logo" width={60} height={60} />
                </div>
                <Headersearch />
                <LogInNotifTheme />
            </header>

        </div>
    )
}
