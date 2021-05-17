import BlogPreviewItem from "../Blog/blog-preview-item.component";
import SectionTitle from "../section/section-title.component";
import Section from "../section/section.component";




const BlogSection = () => {
    return <Section isContainer>
        <SectionTitle title="My Thoughts" />
        <div className="grid grid-cols-3 gap-5">
        <BlogPreviewItem title="Why JavaScript?" article="Lorem Ipsum is simply dummy text of the printing and typesetting industry...." />
        </div>
    </Section>
}


export default BlogSection;