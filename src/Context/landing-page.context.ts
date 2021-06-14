import { createContext } from "react"
import { BlogPreviewProps  } from "../components/Blog/blog-preview-item.component";
import { ProjectProps } from "../Store/Reducers/ponikar/projects/projects.types";
export interface LandingPageTypes {
    blogs: BlogPreviewProps[],
    projects: ProjectProps[]
}


export const LANDING_PAGE_INITIAL_STATE:LandingPageTypes = {
    blogs:[],
    projects:[]
}


export const LandingPageContext = createContext(LANDING_PAGE_INITIAL_STATE);