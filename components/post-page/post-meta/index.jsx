import Link from 'next/link'
import {BiLogoTelegram} from 'react-icons/bi';
import {BsTwitter} from 'react-icons/bs';
import {BsLink45Deg} from 'react-icons/bs';
import {BsFillBookmarkFill} from 'react-icons/bs';


export default function PostMeta({data}) {
  return (
    <div className='flex flex-col gap-4'>

        <div className='flex '>
            <div className='flex justify-center items-center gap-4'>
                <span>مطالعه:</span>
                <span>{data.study_time} دقیقه</span>
            </div>

            <div className='flex justify-center items-center '>
                {data.time}
            </div>
        </div>

        <div className='flex justify-between items-center gap-2'>
            <Link href={`https://telegram.me/${data.blog_link}/${data.slug}`}><BiLogoTelegram /></Link>
            <Link href={`https://telegram.me/${data.blog_link}/${data.slug}`}><BsTwitter /></Link>
            <Link href={`https://telegram.me/${data.blog_link}/${data.slug}`}><BsLink45Deg /></Link>
            <Link href={`https://telegram.me/${data.blog_link}/${data.slug}`}><BsFillBookmarkFill /></Link>
        </div>
    </div>
  )
}
