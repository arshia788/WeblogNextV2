import SliderComp from "../slider-comp"
import MainSliderAds from "./ads"

export default function MainSlider() {
  return (
    <section className="bg-zinc-100 rounded-lg p-4 flex flex-col gap-6">

        <div className="flex items-center justify-start gap-1">
            <span className="font-[vazirbold]">داغ ترین ها:</span>

            <p className="text-base sm:text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>

        </div>


        <div className="flex justify-between items-center gap-4">
            <SliderComp />
            <MainSliderAds />
        </div>


    </section>
  )
}
