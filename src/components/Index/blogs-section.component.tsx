import { useContext } from "react";
import { LandingPageContext } from "../../Context/landing-page.context";
import BlogPreviewItem from "../Blog/blog-preview-item.component";
import SectionTitle from "../section/section-title.component";
import Section from "../section/section.component";




const BlogSection = () => {
    const { blogs } = useContext(LandingPageContext);
    return <Section isContainer>
        <SectionTitle title="Blogs" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-5">
          { blogs.map(blog => <BlogPreviewItem key={blog.id} {...blog} />) }
        </div>
    </Section>
}


export default BlogSection;