import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getRecentBlogs } from "../../../../../Firebase/firestore/blogs.firestore";
import { softDeleteProject, updateProject } from "../../../../../Firebase/firestore/projects.firestore";
import { projectDeleted, projectFetched, projectUpdated } from "./projects.actions";
import { ProjectDeleteStartedType, projectUpdateStartedType, PROJECT_DELETED_STARTED, PROJECT_FETCHING_STARTED, PROJECT_UPDATE_STARTED } from "./projects.types";



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

export function* onProjectUpdateStart() {
    yield takeLatest<PROJECT_UPDATE_STARTED>("PROJECT_UPDATED_STARTED", updateProjectAsync)
}

export function* updateProjectAsync({ payload }: projectUpdateStartedType) {
    try {
        yield updateProject(payload.id, payload);
        yield projectUpdated(payload);
    } catch(e) {
        console.log("PROJECT UPDATE ERROR", e.message);
    }
}

export function* projectSagas() {
    yield all([call(onProjectFetchStart), call(onProjectDeleteStart), call(onProjectUpdateStart)]);
}