import { PonikarBlogReducersType, PonikarBlogsReducersActionType } from "./blogs.types"


const BLOGS_INITIAL_STATE: PonikarBlogReducersType = {
    blogs: [],
    message: ""
}



const ponikarBlogReducers = (state = BLOGS_INITIAL_STATE, action :PonikarBlogsReducersActionType) :PonikarBlogReducersType => {
    switch(action.type) {
        case "__NEXT_REDUX_WRAPPER_HYDRATE__":
            return {...state, ...action.payload.ponikar.blogs};
        case "FECTHED_PONIKAR_BLOGS":
            return {...BLOGS_INITIAL_STATE, blogs: action.payload };
        case "FETCHING_PONIKAR_BLOGS_ERROR":
            return {...BLOGS_INITIAL_STATE, message: action.payload};
        default: 
         return state;
    }
}

export default ponikarBlogReducers;