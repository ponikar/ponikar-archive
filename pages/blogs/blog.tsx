import { FC } from "react";
import PageBase from "../../src/components/Base/page-base.component";
import BlogImage from "../../src/components/Blog/blog-page-image.component";
import { Heart } from "react-feather"



const Blog: FC<{}> = () => {
    return <PageBase>
        <section className="mt-32 lg:w-7/12 w-11/12 mx-auto">
           <BlogImage src="/assets/images/blog-page.jpg" alt="This is blog" />
           <header className="font-secondary mt-8 ">
           <h1 className="lg:text-3xl text-xl"> why I love JavaScript?  </h1>
           <div className="text-sm mt-2"> 27th March &bull; 2 min Read </div>
           </header>
           <article className="text-lg mt-5">
             <p className="mb-3 font-primary a-line-highlight">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             </p>
            </article>

            <div className="flex items-center"> 
                <Heart strokeWidth={1.1} className="text-primary" />
                <h3 className="font-primary ml-2 mt-1 text-sm"> 23 Likes </h3> 
            </div>
        </section> 
    </PageBase>
}


export default Blog;