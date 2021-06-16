import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getRecentBlogs } from "../../../../../Firebase/firestore/blogs.firestore";
import { softDeleteProject } from "../../../../../Firebase/firestore/projects.firestore";
import { projectDeleted, projectFetched } from "./projects.actions";
import { ProjectDeleteStartedType, PROJECT_DELETED_STARTED, PROJECT_FETCHING_STARTED } from "./projects.types";



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

export function* onProjectDeleteStart() {
    yield takeLatest<PROJECT_DELETED_STARTED>("PROJECT_DELETED_STARTED", deleteProjectAsync)
}

export function* deleteProjectAsync({ payload }: ProjectDeleteStartedType) {
    try {
        yield softDeleteProject(payload.id);
        yield put(projectDeleted(payload));
    } catch(e) {
        yield console.log("DELETE PROJECT ERROR", e.message);
    }
}


export function* projectSagas() {
    yield all([call(onProjectFetchStart), call(onProjectDeleteStart)]);
}