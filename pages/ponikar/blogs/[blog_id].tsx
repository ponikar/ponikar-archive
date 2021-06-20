import { useRouter } from 'next/dist/client/router';
import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { getBlogByID } from '../../../Firebase/firestore/blogs.firestore';
import { uploadImage } from '../../../Firebase/firestore/blogs.storage';
import BlogHeader from '../../../src/components/Admin/Blog/create-blog-header.component';
import AdminPageContainer from '../../../src/components/Admin/Container/container.component';
import CreateBlogTextArea from '../../../src/components/Create-Blog/create-blog.component';
import {
    BlogProps,
    CreateBlogContext,
    CREATE_BLOG_INITIAL_STATE,
} from '../../../src/Context/create-blog.context';

const UpdateBlog: FC = () => {
    const {
        query: { blog_id },
    } = useRouter();
    const [blog, setBlog] = useState<BlogProps>(CREATE_BLOG_INITIAL_STATE);
    const fileRef = useRef(null);

    useEffect(() => {
        getBlog(blog_id);
    }, [blog_id]);

    const getBlog = useCallback(
        async (blog_id) => {
            try {
                const doc = await getBlogByID(blog_id);
                setBlog(doc);
            } catch (e) {
                console.log('SOMETHING WENT WRONG', e.message);
            }
        },
        [blog_id]
    );

    const appendImage = useCallback(
        async (e: ChangeEvent<HTMLInputElement>) => {
            const publicURL = await uploadImage(e.target.files);
            setBlog({
                ...blog,
                article: `${blog.article} ![alt](${publicURL})`,
            });
        },
        [blog]
    );

    const setProps = (props: object) => setBlog({ ...blog, ...props });

    return (
        <CreateBlogContext.Provider
            value={{ ...blog, tags: blog.tags, fileRef, setProps }}
        >
            <BlogHeader />
            <AdminPageContainer>
                <input
                    hidden
                    accept="images"
                    type="file"
                    ref={fileRef}
                    onChange={appendImage}
                />
                <CreateBlogTextArea {...blog} setBlog={setProps} />
            </AdminPageContainer>
        </CreateBlogContext.Provider>
    );
};

export default UpdateBlog;
