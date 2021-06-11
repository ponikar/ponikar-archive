import { PonikarBlogReducersType, PonikarBlogsReducersActionType } from "./blogs.types"
import { deletingBlog, updateBlogUtil } from "./blogs.utils";


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
        case "DELETING_BLOG":
            return deletingBlog(state, action.payload); 
        case "UPDATE_PONIKAR_BLOG_OFFLINE":
            return updateBlogUtil(state, action.payload);
        default: 
         return state;
    }
}

export default ponikarBlogReducers;