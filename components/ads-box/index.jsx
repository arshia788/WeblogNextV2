import Link from "next/link";
import Image from "next/image";

export default function AdsBox({ goal_link, goal_alt, goal_img_link }) {
    return (

        <Link href={goal_link} className="w-full flex justify-center items-center" >
            <Image
                width={185} height={185} className="object-cover rounded-md border-2 border-blue-500" alt={goal_alt}
                src={goal_img_link} />
        </Link>

    )
}
