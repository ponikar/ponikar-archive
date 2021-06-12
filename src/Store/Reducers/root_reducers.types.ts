import { USER_INTIAL_STATE_TYPE } from "./User/user.types";
import { ToastTypes } from "./Toast/toast.types";
import { PonikarReducerType } from "./ponikar/ponikar_reducers.types";


export interface RootReducersType {
    user: USER_INTIAL_STATE_TYPE,
    toast: ToastTypes,
    ponikar: PonikarReducerType
}

export interface HydrateReducersType {
    type: "__NEXT_REDUX_WRAPPER_HYDRATE__",
    payload: RootReducersType
}