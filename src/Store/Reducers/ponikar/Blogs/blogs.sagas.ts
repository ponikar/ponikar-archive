import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getRecentBlogs, softDeleteBlog } from "../../../../../Firebase/firestore/blogs.firestore";
import { showToast } from "../../Toast/toast.actions";
import { ponikarBlogDeleteOffine, ponikarBlogFetched, ponikarBlogFetchingError } from "./blogs.actions";
import { DeletePonikarBlogStarted, DELETE_PONIKAR_BLOG_STARTED, START_PONIKAR_BLOG_FETCHING } from "./blogs.types";



// Fetching blogs 

export function* onBlogFetchingStart() {
    yield takeLatest<START_PONIKAR_BLOG_FETCHING>("START_PONIKAR_BLOG_FETCHING", fetchBlogs)
}


export function* fetchBlogs() {
    try {
        const blogs =  yield getRecentBlogs(20);
        yield put(ponikarBlogFetched({ payload: blogs }));
    } catch(e) {
        yield put(ponikarBlogFetchingError({ payload: e.message }));
    }

}


// Soft Deleting blog
export function* onBlogDeleteStart() {
    yield takeLatest<DELETE_PONIKAR_BLOG_STARTED>("DELETE_PONIKAR_BLOG_STARTED", deleteBlog)
}

export function* deleteBlog(action: DeletePonikarBlogStarted) {
    try {
       yield softDeleteBlog(action.payload);
       yield put(ponikarBlogDeleteOffine(action.payload));
       yield put(showToast({ payload: { message: "Blog has been deleted!", type: "success" } }));
    } catch(e) {
        yield put(showToast({ payload: { message: "Couldn't delete Blog!", type: "danger" } }));
    }
}


export function* ponikarBlogSaga() {
    yield all([call(onBlogFetchingStart), call(onBlogDeleteStart)])
}