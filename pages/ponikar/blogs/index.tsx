import { GetStaticProps } from "next";
import { FC, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { getRecentBlogs } from "../../../Firebase/firestore/blogs.firestore";
import AdminBlogPreview from "../../../src/components/Admin/Blog/blog-preview.component";
import AdminPageContainer from "../../../src/components/Admin/Container/container.component";
import { BlogPreviewProps } from "../../../src/components/Blog/blog-preview-item.component";
import { ponikarBlogFetched, ponikarBlogFetchingStart } from "../../../src/Store/Reducers/ponikar/Blogs/blogs.actions";
import { selectBlogs } from "../../../src/Store/Reducers/ponikar/Blogs/blogs.selectors";
import { reduxWrapper } from "../../../src/Store/store";


interface BlogsProps {
}


const Blogs: FC<BlogsProps> = () => {

    const { message, blogs } = useSelector(selectBlogs);


    return <AdminPageContainer>
        <div className="grid grid-cols-4 gap-3">
        { blogs.map(blog  => <AdminBlogPreview key={blog.id} {...blog} />) }
        </div>
    </AdminPageContainer>
}



export const getStaticProps :GetStaticProps = reduxWrapper.getStaticProps(async ({ store: {dispatch} }) => {

        const blogs = await getRecentBlogs(20);
        dispatch(ponikarBlogFetched({ payload: blogs }));
        return { 
            props: { },
        };
})


export default Blogs;