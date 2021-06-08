import { GetStaticProps } from "next";
import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { getRecentBlogs } from "../../../Firebase/firestore/blogs.firestore";
import AdminBlogPreview from "../../../src/components/Admin/Blog/blog-preview.component";
import AdminPageContainer from "../../../src/components/Admin/Container/container.component";
import { BlogPreviewProps } from "../../../src/components/Blog/blog-preview-item.component";
import { ponikarBlogFetchingStart } from "../../../src/Store/Reducers/ponikar/Blogs/blogs.actions";
import { selectBlogs } from "../../../src/Store/Reducers/ponikar/Blogs/blogs.selectors";
import { reduxWrapper } from "../../../src/Store/store";


interface BlogsProps {
}


const Blogs: FC<BlogsProps> = () => {

    const { message, blogs } = useSelector(selectBlogs);

    const deleteBlog =  useCallback(async (id: string) => {

    }, []); 

    console.log(blogs);

    return <AdminPageContainer>
        <div className="grid grid-cols-4 gap-3">
        { blogs.map(blog  => <AdminBlogPreview key={blog.id} {...blog} />) }
        </div>
    </AdminPageContainer>
}



export const getStaticProps :GetStaticProps = reduxWrapper.getStaticProps(async ({ store: {dispatch} }) => {

        dispatch(ponikarBlogFetchingStart("START_PONIKAR_BLOG_FETCHING"));
        return { 
            props: { },
            revalidate:60
        };
})


export default Blogs;