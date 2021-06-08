import { combineReducers } from "redux";
import ponikarBlogReducers from "./Blogs/blog.reducers";
import { PonikarReducerType } from "./ponikar_reducers.types";



export const ponikarReducers = combineReducers<PonikarReducerType>({
    blogs: ponikarBlogReducers
});