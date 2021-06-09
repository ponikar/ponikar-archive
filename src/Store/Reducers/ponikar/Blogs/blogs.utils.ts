import { PonikarBlogReducersType } from "./blogs.types";



export const deletingBlog = (state:PonikarBlogReducersType, id: string) => {
    return { ...state, blogs: state.blogs.filter(b => b.id !== id) }
}