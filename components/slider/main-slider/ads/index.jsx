import Image from "next/image";
import Link from "next/link";

export default function MainSliderAds() {
  return (
    <div className=' min-w-[185px] w-[185px] h-[400px] flex flex-col justify-between items-end gap-4'>

      {/* in relative baray halat fill hast ke mikhay be image bedi */}

      <Link href={'/'} className="w-full" >
        <Image
        width={185} height={185} className="object-cover rounded-md border-2 border-blue-500" alt="ads"
        src={'/images/ads/150_modern_furniture_social_media_post_template.jpg'}/>
      </Link>

      <Link href={'/'} className="w-full">
        <Image
        width={185} height={185} className="object-cover rounded-md border-2 border-blue-500" alt="ads"
        src={'/images/ads/370_digital_marketing_media_post_template.jpg'}/>
      </Link>

    </div>
  )
}
