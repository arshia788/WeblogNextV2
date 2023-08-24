import Image from "next/image"
import Link from "next/link"

export default function SliderImage() {
  return (
    <div className=" relative w-[700px] h-[400px]">
        <Image  src={'/images/posts/laptop1.jpg'} alt="alt" fill className="rounded object-cover"/>
    </div>
  )
}
