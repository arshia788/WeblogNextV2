import Image from "next/image";
import 'animate.css';

export default function SplashScreenBox() {
  return (
    <div className='flex justify-center items-center h-[100vh] '>
      <div className="flex flex-col gap-4 items-center">
        <div className="relative w-[5rem] h-[5rem] animate__animated animate__slow animate__flip">
          <Image src={'/logo-70.png'} fill className="object-cover" alt="splash screen" />
        </div>
        <p className="animate__animated animate__slower animate__fadeInUp">mernfa.ir</p>
      </div>
    </div>
  )
}
