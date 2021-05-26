import { combineReducers } from "redux";
import { userReducers } from "./User/user.reducers";



export const rootReducers = combineReducers({
    user: userReducers
});