import { createContext } from "react"



export const CREATE_BLOG_INITIAL_STATE = {
    title: "",
    article: "",
    setProps: props => {},
    fileRef: null,
}


export const CreateBlogContext = createContext(CREATE_BLOG_INITIAL_STATE);