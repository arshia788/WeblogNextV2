import Link from "next/link";
import BlogMainBox from "../boxes/blog-main-box";
import BlogBigBox from "../boxes/big-blog-box";

export default function MainPagePopularPosts() {

    const posts=[
        {
            image:'/images/posts/tablet1.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'tablet1',
        }
        ,
        {
            image:'/images/posts/tablet2.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:22,
            view_number:502,
            slug:'mobile1',
        }
        ,
        {
            image:'/images/posts/tablet3.jpg',
            title:'لورم ایپسوم متن ساختگی ده از طراحان گرافیک است چاپگرها و متون بلکه ده از طراحان گرافیک است چاپگرها و متون بلکه ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:25,
            view_number:12004,
            slug:'tablet1',
        },

        {
            image:'/images/posts/tablet1.jpg',
            title:'لورم ایپسوم متن ساختگی ',
            short_desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
            comments_number:10,
            view_number:120,
            slug:'laptop1',
        },
    ];


    return (
        <section className="p-4 bg-zinc-100 rounded-lg flex flex-col gap-6">


            <header className="flex justify-between items-center w-full">

                <div className="flex justify-start items-center gap-6 ">

                    <h2>پرمخاطبترین ها</h2>

                    <button className="px-3 py-1 rounded  border-blue-400 transition-all duration-500 hover:bg-blue-400 hover:text-white  bg-white border-2 text-base sm:text-sm">
                        پربازدیدترین ها ...
                    </button>

                    <button  className="px-3 py-1 rounded  border-blue-400 transition-all duration-500 hover:bg-blue-400 hover:text-white bg-white border-2 text-base sm:text-sm">
                        مفیدترین ها ...
                    </button>

                    <button className="px-3 py-1 rounded border-blue-400 transition-all duration-500 hover:bg-blue-400 hover:text-white bg-white border-2 text-base sm:text-sm">
                        پردیدگاه‌ترین ها ...
                    </button>
                </div>

                <div>
                    <Link className="px-3 py-1 rounded bg-blue-500 transition-all duration-500 hover:bg-blue-600 text-white" href={'/'}>
                        همه
                    </Link>
                </div>
            </header>

            <div className="flex justify-between items-center gap-4">
                <BlogBigBox data={posts[2]}/>
                <BlogMainBox data={posts[0]}/>
                <BlogMainBox data={posts[1]}/>
            </div>

        </section>

    )
}
