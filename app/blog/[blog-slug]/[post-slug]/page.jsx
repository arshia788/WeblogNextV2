import BreadCrumb from '@/components/post-page/bread-crumb';
import BlogerBox from '@/components/boxes/Bloger-box';
import PostMeta from '@/components/post-page/post-meta';

export default function SinglePostPage({ params }) {

  const data = {
    title: 'عنوان مقاله مورد نظر',
    blog_title: 'عنوان وبلاگ',
    blog_link: "nextjs_blog",
    blog_image: '/images/ads/5556583.jpg',
    short_desc: 'وبلاگ تستی',
    study_time: 15,
    created_at:'15 دی 1410',
    slug:'post_slug'

  };

  const blogerData = {
    image: data.blog_image,
    title: data.blog_title,
    short_desc: data.short_desc,
    link: data.blog_link
  };


  const metaDataCompData={
    study_time:data.study_time,
    created_at:data.created_at,
    blog_link:data.blog_link,
    slug:data.slug
  }


  return (
    <div className='flex justify-between items-start gap-4'>

      <main className='felx flex-col gap-12 w-full'>
        <BreadCrumb blog_link={data.blog_link} blog_title={data.blog_title} Post_title={data.title} />

        <section className='flex justify-between items-center gap-4'>
          <BlogerBox data={blogerData} />
          <PostMeta data={metaDataCompData}/>
        </section>
      </main>

      <aside className='bg-zinc-600 w-[300px] min-w-[300px] h-80'>

      </aside>
    </div>
  )
}
