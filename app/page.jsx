import MainPageAdsSection from "@/components/main-page-ads-section";
import MainPageBestBlogsAndNewPosts from "@/components/main-page-best-new-blogs";
import MainPageCategories from "@/components/main-page-categories";
import MainPagePopularPosts from "@/components/main-page-popular-posts";
import MainSlider from "@/components/slider/main-slider";

function page() {
  return (
    <div className="flex flex-col gap-12">
      <MainSlider />
      <MainPageCategories />
      <MainPagePopularPosts />
      <MainPageAdsSection />
      <MainPageBestBlogsAndNewPosts />
    </div>
  )
}

export default page