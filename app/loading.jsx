import Image from "next/image"

export default function loading() {
  return (
    <div className='my-12 flex justify-center items-center'>
        <Image src={'/loading.svg'} width={120} height={120} alt="loading"/>
    </div>
  )
}
