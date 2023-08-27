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
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos quis impedit assumenda officiis enim? Voluptas quod quam maxime, perspiciatis voluptate, deserunt sit nesciunt iusto optio magni doloremque. Velit voluptas reprehenderit, dignissimos consequuntur iste ullam quos. Rem maxime veniam voluptatem quo fugiat rerum, beatae, eaque enim officia ea voluptas voluptatibus illo animi ducimus harum voluptates facilis corporis perspiciatis. Nulla repellendus consectetur officia quo iusto. Amet qui ad odit veritatis esse totam quam debitis sint similique, iure excepturi, quas aliquid cumque eum. Deleniti, cumque animi! Sequi optio voluptates iste molestias incidunt consectetur veniam accusamus quisquam tempora? Tempora totam necessitatibus facilis velit.
      </p>
    </div>
  )
}

export default page