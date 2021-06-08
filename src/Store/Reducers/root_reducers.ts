import { combineReducers } from "redux";
import { ponikarReducers } from "./ponikar/ponikar_reducers";
import { RootReducersType } from "./root_reducers.types";
import toastReducers from "./Toast/toast.reducer";
import { userReducers } from "./User/user.reducers";



export const rootReducers = combineReducers<RootReducersType>({
    user: userReducers,
    toast: toastReducers,
    ponikar: ponikarReducers
});