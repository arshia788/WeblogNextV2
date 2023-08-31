import Link from 'next/link';


export default function BreadCrumb({blog_link,blog_title,Post_title}) {
  return (
    <section className='flex justify-start items-center gap-2'>
        <Link className='transition-all duration-500 hover:text-blue-400' href={'/'}>خانه</Link>
        <span>/</span>
        <Link className='transition-all duration-500 hover:text-blue-400' href={`/blog/${blog_link}`}>{blog_title}</Link>
        <span>/</span>
        <span>{Post_title}</span>
    </section>
  )
}
