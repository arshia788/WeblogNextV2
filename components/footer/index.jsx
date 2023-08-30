
import Link from 'next/link';
import GOToTOp from './go-to-top';

export default function Footer() {

    return (
        <footer className='bg-zinc-200 p-4 rounded-lg flex justify-between items-center gap-2 mb-12 py-8 '>

            <ul className='flex justify-start items-center gap-6'>
                <li>
                    <Link href={'/about-us'}  className='transition-all duration-500 hover:text-blue-500'>درباره ما</Link>
                </li>
                <li>
                    <Link href={'/contact-us'} className='transition-all duration-500 hover:text-blue-500'> تماس با ما</Link>
                </li>
                <li>
                    <Link href={'/search'} className='transition-all duration-500 hover:text-blue-500'> جستجو</Link>
                </li>
            </ul>


            <p>تمامی حقوق مادی و معنوی این سایت متعلق به مرن فا (mernfa.ir) می باشد و هرگونه کپی برداری، غیرقانونی محسوب خواهد شد.</p>

          <GOToTOp />

        </footer>
    )
}
