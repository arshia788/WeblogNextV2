import Image from "next/image";
import Link from "next/link";


export default function RandomPostBox({ data }){
    return (
        <div className="flex justify-start items-center gap-2 h-[80px] w-full rounded-lg hover:bg-zinc-200 transition-all duration-500 p-2">

            <Link href={data.link} className="min-w-[80px] w-[80px] h-[80px] relative">
                <Image src={data.image} fill  className="object-cover rounded-md border-2 border-blue-500" alt={data.title} />
            </Link>

            <div className="flex flex-col gap-4">

                <Link href={data.link} className="lin-clamp-1">
                    <h3 >{data.title}</h3>
                </Link>

                <p className="lin-clam-1 text-base sm:text-sm">{data.short_desc}</p>
            </div>
        </div>
    )
};