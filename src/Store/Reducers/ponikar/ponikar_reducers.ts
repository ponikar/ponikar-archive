import { combineReducers } from "redux";
import ponikarBlogReducers from "./Blogs/blog.reducers";
import { PonikarReducerType } from "./ponikar_reducers.types";
import projectReducers from "./projects/project.reducers";



export const ponikarReducers = combineReducers<PonikarReducerType>({
    blogs: ponikarBlogReducers,
    project: projectReducers
});