import Link from "next/link";
import Image from "next/image";
import { GoComment } from 'react-icons/go';
import { BiLike } from 'react-icons/bi';

export default function BlogBigBox({ data }) {
    return (
        <article className="relative w-[40rem] h-[22.6rem] flex flex-col gap-2 bg-white shadow-[0px_10px_10px_rgba(0,0,0,0.25)] rounded-lg transition-all duration-500 hover:shadow-[0px_10px_5px_rgba(0,0,0,0.35)]">

            <div className="relative w-full h-[22.6rem] rounded-lg">
                <Link href={data.slug}>
                    <Image src={data.image} alt={data.title} fill className="object-cover rounded-md" />
                </Link>
            </div>


            <div className="flex flex-col gap-3 p-[.2rem] absolute bottom-2 left-2 right-2 bg-[#ffffffee] rounded-lg">

                <Link href={data.slug} className=" transition-all duration-500 hover:text-blue-400">
                    <h3 className="line-clamp-1 ">{data.title}</h3>
                </Link>

                <p className="text-zinc-600  line-clamp-2 text-base sm:text-sm  leading-10 ">{data.short_desc}</p>

            </div>

            <div className="absolute top-0 right-2 bg-white p-1 rounded flex justify-end items-center gap-1 mt-2">

                <div className="text-xs sm:text-base flex justify-start items-center gap-3 ">

                    <div className="flex justify-center items-center gap-1">
                        <GoComment className="w-5 h-5 text-blue-600" /> <span>{data.comments_number}</span>
                    </div>

                    <div className="flex justify-center items-center gap-1"> <BiLike className="w-5 h-5 text-blue-600" /> <span>{data.view_number}</span> </div>

                </div>

            </div>

            <div className="absolute top-3 left-2 text-base sm:text-sm">

                <Link href={data.slug} className="bg-blue-500 transition-all duration-300 hover:bg-blue-600 px-3 py-1 rounded text-white">
                    ادامه مطلب
                </Link>
            </div>

        </article>
        
    ) 
}
