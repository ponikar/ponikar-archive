import { GetStaticProps } from "next";
import { FC } from "react";
import { getRecentBlogs } from "../../Firebase/firestore/blogs.firestore";
import Pagebase from "../../src/components/Base/page-base.component";
import BlogPreviewItem, { BlogPreviewProps } from "../../src/components/Blog/blog-preview-item.component";
import Section from "../../src/components/section/section.component";


interface BlogType {
    blogs: BlogPreviewProps[]
}


const Blogs :FC<BlogType> = ({ blogs }) => {

    return <Pagebase>
        <Section className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5" isContainer>
            { blogs.map((blog, index) => <BlogPreviewItem {...blog} key={index}  />) }
        </Section>
    </Pagebase>
}

export default Blogs;

export const getStaticProps :GetStaticProps = async (context) => {
    const blogs = await getRecentBlogs(20);
    return { 
        props: { blogs },
        revalidate:60
    };
}

