import { FC } from 'react';
import PageBase from '../../src/components/Base/page-base.component';
import BlogImage from '../../src/components/Blog/blog-page-image.component';
import { Heart } from 'react-feather';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
    getBlogByID,
    getBlogsID,
} from '../../Firebase/firestore/blogs.firestore';
import { BlogPreviewProps } from '../../src/components/Blog/blog-preview-item.component';
import { parseTimeAStamp } from '../../Firebase/firestore/firestore.helper';
import marked from 'marked';
import BlogFeedback from '../../src/components/Blog/Blog-Feeback/blog-feedback.component';
import { ReadingArea } from '../../src/components/Reading-Area/reading-area.component';
interface BlogType {
    blog: BlogPreviewProps;
}

const Blog: FC<BlogType> = ({ blog }) => {
    const { title, article, createdAt, tags, id } = blog;
    const time = parseTimeAStamp(createdAt);

    return (
        <ReadingArea>
            {/* <BlogImage src="/assets/images/blog-page.jpg" alt="This is blog" /> */}
            <header className="font-secondary mt-8 ">
                <h1 className="lg:text-3xl text-xl"> {title} </h1>
                <div className="text-sm mt-2"> {time} &bull; 2 min Read </div>
            </header>
            <article className="text-lg mt-5">
                <p
                    className="mb-3 font-primary a-line-highlight"
                    dangerouslySetInnerHTML={{ __html: marked(article) }}
                />
            </article>

            <BlogFeedback id={id} />
        </ReadingArea>
    );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
    const paths = await getBlogsID();
    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {
        params: { blog_id },
    } = context;
    const blog = await getBlogByID(blog_id);
    return { props: { blog } };
};

export default Blog;
