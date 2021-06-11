import { BlogPreviewProps } from "../../../../components/Blog/blog-preview-item.component";
import { START_PONIKAR_BLOG_FETCHING, FetchedPonikarBlogsType, FetchingPonikarBlogError, DeletePonikarBlogStarted, DeletingPonikarBlog, UpdatePonikarBlogStart, UpdatePonikarBlogOffline } from "./blogs.types";



export const ponikarBlogFetchingStart = (type :START_PONIKAR_BLOG_FETCHING) => ({
    type
});

export const ponikarBlogFetched = ({ type = "FECTHED_PONIKAR_BLOGS", payload }: FetchedPonikarBlogsType) => ({
    type,
    payload
});

export const ponikarBlogFetchingError = ({ type = "FETCHING_PONIKAR_BLOGS_ERROR", payload } : FetchingPonikarBlogError) => ({
    type,
    payload
});

export const ponikarBlogDeleteStarted = (id: string) :DeletePonikarBlogStarted => ({
    type: "DELETE_PONIKAR_BLOG_STARTED",
    payload: id
});

export const ponikarBlogDeleteOffine = (id: string) :DeletingPonikarBlog => ({
    type: "DELETING_BLOG",
    payload: id
});

export const ponikarBlogUpdateStarted = (payload: BlogPreviewProps) :UpdatePonikarBlogStart => ({
    type: "UPDATE_PONIKAR_BLOG_STARTED",
    payload
});

export const ponikarBlogUpdateOffline = (payload: BlogPreviewProps) :UpdatePonikarBlogOffline => ({
    type: "UPDATE_PONIKAR_BLOG_OFFLINE",
    payload
});
