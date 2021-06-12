import { createSelector } from "reselect";
import { RootReducersType } from "../../root_reducers.types";

const selectBlogReducer = (state: RootReducersType) => state.ponikar.blogs;


export const selectBlogs = createSelector([selectBlogReducer],
     state => state);