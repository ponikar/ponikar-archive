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

export interface DeletePonikarBlogStarted {
    type: DELETE_PONIKAR_BLOG_STARTED,
    payload: string
}

export type DELETE_PONIKAR_BLOG_STARTED = "DELETE_PONIKAR_BLOG_STARTED"

export interface DeletingPonikarBlog {
    type: "DELETING_BLOG",
    payload: string;
}

export type START_PONIKAR_BLOG_FETCHING = "START_PONIKAR_BLOG_FETCHING";

export type PonikarBlogsReducersActionType = FetchedPonikarBlogsType | FetchingPonikarBlogError | HydrateReducersType | DeletingPonikarBlog;

export type UPDATE_PONIKAR_BLOG_STARTED = "UPDATE_PONIKAR_BLOG_STARTED";

export interface UpdatePonikarBlogStart {
    type: UPDATE_PONIKAR_BLOG_STARTED,
    payload: BlogPreviewProps
}

export interface UpdatePonikarBlogOffline {
    type: "UPDATE_PONIKAR_BLOG_OFFLINE",
    payload: BlogPreviewProps
}