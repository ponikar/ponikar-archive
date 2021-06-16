import { ProjectProps, ProjectReducersTypes } from "./projects.types";




export const deleteProject = (state:ProjectReducersTypes,payload: ProjectProps) :ProjectReducersTypes => {
    return {...state, projects: state.projects.filter(project => project.id !== payload.id) }
}

export const updateProject = (state:ProjectReducersTypes, payload: ProjectProps) :ProjectReducersTypes => {
    return {...state,
    projects: state.projects.map(project => {
        if(project.id === payload.id)  {
            project = payload
        }
        return project;
    })
  }
}