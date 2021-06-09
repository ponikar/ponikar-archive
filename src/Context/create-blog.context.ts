import { createContext } from "react"



export interface BlogProps {
    title: string;
    article: string;
    tags?: string[];
    description: string;
    preiview_image: string;
    id?: null | string;
    createdAt?: string;
}

const CREATE_BLOG_INITIAL_PROPS :BlogProps = {
    title: "",
    article: "",
    tags: [],
    description: "",
    preiview_image: "",
    id: null
}


export const CREATE_BLOG_INITIAL_STATE = {
    ...CREATE_BLOG_INITIAL_PROPS,
    setProps: props => {},
    fileRef: null,

}


export const CreateBlogContext = createContext(CREATE_BLOG_INITIAL_STATE);