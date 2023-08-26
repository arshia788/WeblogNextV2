import CategoryBox from "./category-box"

export default function MainPageCategories() {

    const categories = [
        {
            title: "JAVASCRIPIT",
            link: '/search/categories/javascripit'
        },
        {
            title: "PYTHON",
            link: '/search/categories/PYTHON'
        }
        ,
        {
            title: "PHP",
            link: '/search/categories/PHP'
        }
        ,
        {
            title: "GO",
            link: '/search/categories/GO'
        }
        ,
        {
            title: "C++",
            link: '/search/categories/C++'
        },
        {
            title: "HTML",
            link: '/search/categories/HTML'
        },

        {
            title: "CSS",
            link: '/search/categories/CSS'
        },
        {
            title: "SWIFT",
            link: '/search/categories/SWIFT'
        },
        {
            title: "KOTLIN",
            link: '/search/categories/KOTLIN'
        },
        {
            title: "JAVA",
            link: '/search/categories/JAVA'
        },
        {
            title: "C#",
            link: '/search/categories/C#'
        },
        {
            title: "ELM",
            link: '/search/categories/ELM'
        },
        {
            title: "ASP.NET",
            link: '/search/categories/ASP.NET'
        },
        {
            title: "RUBY",
            link: '/search/categories/RUBY'
        },
    ]

    return (
        <section className=" bg-zinc-100 rounded-lg p-4 flex flex-col gap-8">
            <h3 className=" font-[vazirbold] text-zinc-600 text-[1px]">...دسته بندی های مقالات</h3>
            <div className="flex justify-around ite7ms-center flex-wrap gap-6">
                {
                    categories.map((item, index) => (
                        <CategoryBox key={index} data={item} />
                    ))
                }
            </div>
        </section>
    )
}
