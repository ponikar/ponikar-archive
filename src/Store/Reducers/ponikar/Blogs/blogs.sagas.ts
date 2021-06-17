import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getRecentBlogs, softDeleteBlog, updateBlog } from "../../../../../Firebase/firestore/blogs.firestore";
import { showToast } from "../../Toast/toast.actions";
import { showMessage } from "../../Toast/toast.sagas";
import { ponikarBlogDeleteOffine, ponikarBlogFetched, ponikarBlogFetchingError, ponikarBlogUpdateOffline } from "./blogs.actions";
import { DeletePonikarBlogStarted, DELETE_PONIKAR_BLOG_STARTED, START_PONIKAR_BLOG_FETCHING, UpdatePonikarBlogStart, UPDATE_PONIKAR_BLOG_STARTED } from "./blogs.types";



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
        yield showMessage("Couldn't delete Blog!", "danger");
    }
}


// update blog
export function* onBlogUpdateStart() {
    yield takeLatest<UPDATE_PONIKAR_BLOG_STARTED>("UPDATE_PONIKAR_BLOG_STARTED", updatePonikarBlog);
}

export function* updatePonikarBlog({ payload  } :UpdatePonikarBlogStart) {
    try {
        yield showMessage("Applying Changes!","success");
        yield updateBlog(payload.id, payload);
        yield put(ponikarBlogUpdateOffline(payload));
    } catch(e){
        yield showMessage("Couldn't update blog", "danger")
    }
}



export function* ponikarBlogSaga() {
    yield all([call(onBlogFetchingStart), call(onBlogDeleteStart), call(onBlogUpdateStart)])
}