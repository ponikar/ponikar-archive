import { useContext } from "react";
import { LandingPageContext } from "../../Context/landing-page.context";
import BlogPreviewItem from "../Blog/blog-preview-item.component";
import FancyLink from "../Link/link.component";
import SectionTitle from "../section/section-title.component";
import Section from "../section/section.component";




const BlogSection = () => {
    const { blogs } = useContext(LandingPageContext);
    return <Section isContainer>
        <SectionTitle title="Blogs" />
        <div className="grid mt-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          { blogs.map(blog => <BlogPreviewItem key={blog.id} {...blog} />) }
        </div>
        <div className="flex mt-2 relative justify-end items-center">
            <FancyLink href="/blogs" title="See More" />
        </div>
    </Section>
}


export default BlogSection;