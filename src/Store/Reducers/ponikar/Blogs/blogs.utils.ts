import { BlogPreviewProps } from "../../../../components/Blog/blog-preview-item.component";
import { PonikarBlogReducersType } from "./blogs.types";



export const deletingBlog = (state:PonikarBlogReducersType, id: string) => {
    return { ...state, blogs: state.blogs.filter(b => b.id !== id) }
}


export const updateBlogUtil = (state: PonikarBlogReducersType, payload:BlogPreviewProps) => {

    const blogs = state.blogs.map(blog => {
        if(blog.id === payload.id) blog = payload;
        return blog;
    })
    return{...state, blogs };
}