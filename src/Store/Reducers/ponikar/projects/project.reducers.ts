import { ProjectActionsType, ProjectReducersTypes } from "./projects.types";
import { deleteProject } from "./projects.utils";


const PROJECT_INITIAL_STATE:ProjectReducersTypes = {
    projects: []
};



const projectReducers = (state = PROJECT_INITIAL_STATE, action :ProjectActionsType) :ProjectReducersTypes => {
    switch(action.type) {
        case "__NEXT_REDUX_WRAPPER_HYDRATE__":
            return action.payload.ponikar.project;
        case "PROJECT_FETCHED":
            return {...state, projects: action.payload};
        case "NEW_PROJECT_CREATED":
            return {...state, projects: [...state.projects, action.payload]};
        case "PROJECT_DELETED":
            return deleteProject(state, action.payload);
        default:
            return state;
    }
}

export default projectReducers;