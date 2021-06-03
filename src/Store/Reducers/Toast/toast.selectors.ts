import { createSelector } from "reselect";
import { RootReducersType } from "../root_reducers.types";



const selectToastReducer = (state: RootReducersType) => state.toast;



export const selectToast = createSelector([selectToastReducer],
       toast => toast);