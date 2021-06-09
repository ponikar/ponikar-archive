import { START_PONIKAR_BLOG_FETCHING, FetchedPonikarBlogsType, FetchingPonikarBlogError, DeletePonikarBlogStarted, DeletingPonikarBlog } from "./blogs.types";



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