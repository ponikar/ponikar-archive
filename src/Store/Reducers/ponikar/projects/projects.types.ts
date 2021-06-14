import { HydrateReducersType } from "../../root_reducers.types";



export interface ProjectReducersTypes {
    projects: ProjectProps[],
}

export interface ProjectProps  {
    title: string;
    description: string;
    github_url: string;
    site_url: string;
    images: string[];
    id?: string
}

export type PROJECT_FETCHING_STARTED = "PROJECT_FETCHING_STARTED";

export interface ProjectFetchingStartedTypes {
    type: PROJECT_FETCHING_STARTED
};

export interface ProjectFetchedTypes {
    type: "PROJECT_FETCHED",
    payload: ProjectProps[]
}

export interface NewProjectCreatedTypes {
    type: "NEW_PROJECT_CREATED",
    payload: ProjectProps
}

export interface ProjectUpdatedType {
    type: "PROJECT_UPDATED",
    payload: ProjectProps
}

export interface ProjectDeletedType {
    type: "PROJECT_DELETED",
    payload: ProjectProps
}

export type ProjectActionsType = ProjectFetchedTypes | NewProjectCreatedTypes | ProjectUpdatedType | ProjectDeletedType | HydrateReducersType
