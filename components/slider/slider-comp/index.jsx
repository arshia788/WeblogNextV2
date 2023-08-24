import SliderImage from "../main-slider/slider-image";
import Sliderbtn from "../button";

export default function SliderComp() {

    const postsData = [
        {
            title: 'لورم ایپسوم اپ ',
            value: "slider1"
        }
        ,
        {
            title: 'لورم ایپسونعت چاپ ',
            value: "slider2"
        }
        ,
        {
            title: 'لورم ایپسوم م از صنعت چاپ ',
            value: "slider3"
        }
        ,
        {
            title: 'لورم ایپسوم متن  از صنعت چاپ ',
            value: "slider4"
        },
    ]

    return (
        <div className="flex justify-between items-center w-full h-[400px] bg-red-500">
            
            <div className="flex flex-col gap-6">
                {
                    postsData.map((item, index) => (
                        <Sliderbtn key={index} value={item.value} text={item.title} />
                    ))
                }
            </div>

            <div className="w-full flex justify-center items-center">
                <SliderImage />
            </div>
        </div>
    )
}
