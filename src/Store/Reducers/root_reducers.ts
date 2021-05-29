import { combineReducers } from "redux";
import { RootReducersType } from "./root_reducers.types";
import { userReducers } from "./User/user.reducers";



export const rootReducers = combineReducers<RootReducersType>({
    user: userReducers,
});