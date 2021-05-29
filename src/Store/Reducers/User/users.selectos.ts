import { createSelector } from "reselect"
import { RootReducersType } from "../root_reducers.types"


export const selectUserState = (state :RootReducersType) => state.user;


export const selectUser = createSelector([selectUserState], user => user);