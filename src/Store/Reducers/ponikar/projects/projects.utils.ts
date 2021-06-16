import { ProjectProps, ProjectReducersTypes } from "./projects.types";




export const deleteProject = (state:ProjectReducersTypes,payload: ProjectProps) :ProjectReducersTypes => {
    return {...state, projects: state.projects.filter(project => project.id !== payload.id) }
}