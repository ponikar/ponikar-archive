import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getRecentBlogs } from "../../../../../Firebase/firestore/blogs.firestore";
import { ponikarBlogFetched, ponikarBlogFetchingError } from "./blogs.actions";
import { START_PONIKAR_BLOG_FETCHING } from "./blogs.types";



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



export function* ponikarBlogSaga() {
    yield all([call(onBlogFetchingStart)])
}