import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getRecentBlogs } from "../../../../../Firebase/firestore/blogs.firestore";
import { projectFetched } from "./projects.actions";
import { PROJECT_FETCHING_STARTED } from "./projects.types";



export function* onProjectFetchStart() {
    yield takeLatest<PROJECT_FETCHING_STARTED>("PROJECT_FETCHING_STARTED", fetchProjectAsync)
}

export function* fetchProjectAsync() {
    try {
        const projects = yield getRecentBlogs();
        yield put(projectFetched(projects));
    } catch(e) {
        yield console.log("FETCH PROJECT ERROR", e.message);
    }
}



export function* projectSagas() {
    yield all([call(onProjectFetchStart)]);
}