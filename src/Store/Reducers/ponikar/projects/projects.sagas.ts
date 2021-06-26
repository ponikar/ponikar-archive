import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getRecentBlogs } from "../../../../../Firebase/firestore/blogs.firestore";
import { isRemoteURL } from "../../../../../Firebase/firestore/firestore.helper";
import { softDeleteProject, updateProject } from "../../../../../Firebase/firestore/projects.firestore";
import { storeProjectImages } from "../../../../../Firebase/firestore/projects.storage";
import { showMessage } from "../../Toast/toast.sagas";
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
        yield showMessage("Deleting Project", "success");
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
        yield showMessage("Updating Project", "success");
        const images = yield uploadNewImages(payload.images);// storage call
        yield updateProject(payload.id, {...payload, images}); // firestore call
        yield put(projectUpdated({...payload, images })); // offline action dispatcher
        yield showMessage("Project updated", "success");
    } catch(e) {
        yield showMessage("Couldn't update Project", "danger")
        console.log("PROJECT UPDATE ERROR", e.message);
    }
}

// uploading new images from the Images array 
export function* uploadNewImages(images: string[]) {
    const uploadedImages = [];
    for(const image of images) {
        if(!isRemoteURL(image)) {
            yield console.log("UPLOADING REMOTE URL");
            const [url] = yield storeProjectImages([image]);
            uploadedImages.push(url);
        } else {
            uploadedImages.push(image);
        }
       
    }
    return uploadedImages;
}

export function* projectSagas() {
    yield all([call(onProjectFetchStart), call(onProjectDeleteStart), call(onProjectUpdateStart)]);
}