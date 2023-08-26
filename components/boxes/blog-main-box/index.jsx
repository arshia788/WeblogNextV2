import Image from "next/image";
import Link from "next/link";



export default function BlogMainBox({data}) {
  return (
    <article className="w-64 h-[350px] flex flex-col gap-6 bg-white shadow-[0px_10px_0px_rgba(0,0,0,0.25)] rounded-lg transition-all duration-500 hover:shadow-[0px_10px_5px_rgba(0,0,0,0.25)]">
        <div>
            <Image src={data.image} alt={data.title} width={200} height={300} />
        </div>

        <div>
            <h3>{data.title}</h3>
            <p>{data.short_desc}</p>
            <div className="flex justify-between items-center gap-1">
                <div className="text-xs sm:text-base flex justify-start items-center gap-3"> 
                    <div>{data.commnets_number}دیدگاه</div>
                    <div>{data.view_number} بازدید 10</div>
                </div>
                <Link href={data.slug} className="bg-blue-500 transition-all duration-300 hover:bg-blue-600 px-3 py-1 rounded"></Link>
            </div>
        </div>
    </article>
  )
}
