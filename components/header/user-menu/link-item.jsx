import Link from 'next/link'

export default function LinkItem({title,link}) {

  return (
    <Link className='w-[255px] text-center text-white transition-all duration-300 hover:bg-blue-500 bg-zinc-600 py-2 rounded-md'
    href={`${link}`}
    >
        {title}
    </Link>
  )
}
