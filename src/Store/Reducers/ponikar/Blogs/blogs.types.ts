import { BlogPreviewProps } from "../../../../components/Blog/blog-preview-item.component";
import { HydrateReducersType } from "../../root_reducers.types";




export interface PonikarBlogReducersType {
    blogs: BlogPreviewProps[],
    message?: string;
}


export interface FetchedPonikarBlogsType {
    type?: "FECTHED_PONIKAR_BLOGS",
    payload: BlogPreviewProps[]
};

export interface FetchingPonikarBlogError {
    type?: "FETCHING_PONIKAR_BLOGS_ERROR",
    payload: string;
}


export type START_PONIKAR_BLOG_FETCHING = "START_PONIKAR_BLOG_FETCHING";

export type PonikarBlogsReducersActionType = FetchedPonikarBlogsType | FetchingPonikarBlogError | HydrateReducersType;