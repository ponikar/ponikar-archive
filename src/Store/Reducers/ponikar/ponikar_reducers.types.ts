import { PonikarBlogReducersType } from "./Blogs/blogs.types";
import { ProjectReducersTypes } from "./projects/projects.types";



export interface PonikarReducerType {
    blogs: PonikarBlogReducersType,
    project: ProjectReducersTypes
}

