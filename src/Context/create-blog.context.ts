import { createContext } from "react"



export const CREATE_BLOG_INITIAL_STATE = {
    title: "",
    article: "",
    tags:[],
    setProps: props => {},
    fileRef: null,
}


export const CreateBlogContext = createContext(CREATE_BLOG_INITIAL_STATE);