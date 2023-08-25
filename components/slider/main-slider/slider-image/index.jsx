import "animate.css";

import Image from "next/image";
import Link from "next/link";


export default function SliderImage({ data, animationHandler }) {
  
    
  return (
    <div className={
      animationHandler === 1 ?
      "animate__animated animate__fast animate__fadeIn relative w-full h-[400px]"
      :
      "animate__animated animate__fast animate__fadeOut relative w-full h-[400px]"
    }
    >
      
      <Image src={data.src} alt={data.title} fill className="animate__animated animate__fast  rounded-lg object-cover" />

      <Link href={`/posts/${data.link}`} className="animate__animated animate__fast  absolute bottom-2 left-2 h-12 bg-white p-2 rounded line-clamp-1">
        <h2>{data.title}</h2>
      </Link>

    </div>
  )
}
