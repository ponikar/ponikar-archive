import { createContext } from "react"
import { BlogPreviewProps  } from "../components/Blog/blog-preview-item.component";
export interface LandingPageTypes {
    blogs: BlogPreviewProps[]
}


export const LANDING_PAGE_INITIAL_STATE:LandingPageTypes = {
    blogs:[]
}


export const LandingPageContext = createContext(LANDING_PAGE_INITIAL_STATE);