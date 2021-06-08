import { START_PONIKAR_BLOG_FETCHING, FetchedPonikarBlogsType, FetchingPonikarBlogError } from "./blogs.types";



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