import { createSelector } from "reselect";
import { RootReducersType } from "../../root_reducers.types";




const selectProjectReducer = (state: RootReducersType) => state.ponikar.project;


export const selectProjects = createSelector([selectProjectReducer],
        reducer => reducer);
