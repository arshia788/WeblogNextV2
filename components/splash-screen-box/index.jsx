import Image from "next/image"

export default function SplashScreenBox() {
  return (
    <div className='flex justify-center items-center h-[100vh] '>
        <div className="relative w-[5rem] h-[5rem]">
          <Image src={'/logo-70.png'} fill className="object-cover" alt="splash screen"/>
        </div>
    </div>
  )
}
