import { NewProjectCreatedTypes, ProjectDeletedType, ProjectDeleteStartedType, ProjectFetchedTypes, ProjectFetchingStartedTypes, ProjectProps, ProjectUpdatedType, projectUpdateStartedType } from "./projects.types";




export const projectFetchedStarted = (): ProjectFetchingStartedTypes => ({
    type: "PROJECT_FETCHING_STARTED",
});

export const projectFetched = (payload: ProjectProps[]) :ProjectFetchedTypes => ({
    type: "PROJECT_FETCHED",
    payload,
});

export const newProjectCreated = (payload: ProjectProps) :NewProjectCreatedTypes => ({
    type: "NEW_PROJECT_CREATED",
    payload,
})

export const projectUpdated = (payload: ProjectProps) :ProjectUpdatedType => ({
    type: "PROJECT_UPDATED",
    payload
});

export const projectDeleted = (payload: ProjectProps) :ProjectDeletedType => ({
    type: "PROJECT_DELETED",
    payload
});


export const projectDeletedStarted = (payload: ProjectProps) :ProjectDeleteStartedType => ({
    type: "PROJECT_DELETED_STARTED",
    payload
});

export const updateProjectStarted = (payload: ProjectProps) :projectUpdateStartedType => ({
    type: "PROJECT_UPDATED_STARTED",
    payload
});
