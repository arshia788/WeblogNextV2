'use client';

import Link from 'next/link';

// ! havaset bashe ke har mogeh az hook estefadeh dari mikoni yani bayad az useClient estefadeh bokoni. 

// ? ba in omadi url site ro gerefti mesle on spash screen
import { usePathname } from 'next/navigation';

export default function LinkItem({title,link}){

  const path= usePathname();
  
  return (
    <Link className=
    {
      path === link ?
      'w-[255px] text-center text-white transition-all duration-300 hover:bg-blue-600 bg-blue-600 py-2 rounded-md'
      :
      'w-[255px] text-center text-white transition-all duration-300 hover:bg-blue-500 bg-zinc-600 py-2 rounded-md'
    }
    
    href={`${link}`
  }
    >
        {title}
    </Link>
  )
}
 