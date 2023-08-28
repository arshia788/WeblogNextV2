import Link from 'next/link';
import Image from 'next/image';
import { GoComment } from 'react-icons/go';
import { BiLike } from 'react-icons/bi';


export default function NewBlogBox({ data }) {
    return (

        <article className="w-full h-[16.5rem] bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded-lg transition-all duration-500 hover:shadow-[0px_10px_5px_rgba(0,0,0,0.35)] flex items-center p-3">

            <div className='flex justify-start items-start gap-4'>

                <div className="flex justify-center items-center">

                    <Link href={data.slug} className="relative w-[20rem] h-[15rem] rounded-lg">
                        <Image src={data.image} alt={data.title} fill className="object-cover rounded-md" />
                    </Link>

                </div>

                <div className=" flex flex-col gap-8 p-[.5rem] h-[15rem]">

                    <div className='flex flex-col gap-12 h-[15rem] p-[.5rem] justify-between'>

                        <Link href={data.slug} className="line-clamp-2 h-12">
                            <h3>{data.title}</h3>
                        </Link>

                        <p className="text-zinc-600 line-clamp-3 text-base sm:text-sm h-16">{data.short_desc}</p>

                    </div>

                    <div className="flex justify-between items-center gap-1 mt-2 text-base sm:text-sm ">
                        <div className="text-xs sm:text-base flex justify-start items-center gap-3">

                            <div className="flex justify-center items-center gap-1">
                                <GoComment className="w-5 h-5 text-blue-600" /> <span>{data.comments_number}</span>
                            </div>

                            <div className="flex justify-center items-center gap-1"> <BiLike className="w-5 h-5 text-blue-600" /> <span>{data.view_number}</span> </div>

                        </div>

                        <div className='flex justify-end gap-4 items-center'>

                            <Link href={data.slug} className="bg-blue-500 transition-all duration-300 hover:bg-blue-600 px-3 py-1 rounded text-white">
                                ادامه مطلب
                            </Link>

                            <div className='text-white px-3 py-1 bg-blue-500'>
                                {data.date}
                            </div>
                        </div>
                    </div>


                </div>


            </div>

        </article>

    )
}
