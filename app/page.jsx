import MainPageCategories from "@/components/main-page-categories"
import MainSlider from "@/components/slider/main-slider"

function page() {
  return (
    <div className="flex flex-col gap-12">
      <MainSlider />
      <MainPageCategories />
    </div>
  )
}

export default page