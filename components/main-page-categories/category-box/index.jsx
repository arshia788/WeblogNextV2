import Link from "next/link";

export default function CategoryBox({data:{title,link}}) {

  return (
    <Link href={link} className="p-[9px] rounded-full min-w-[150px] flex justify-center items-center border-2 border-blue-500 transition-all duration-500 hover:bg-blue-500 hover:text-white">

        {title}
    </Link>
  )
}
