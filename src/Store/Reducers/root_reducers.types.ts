import { USER_INTIAL_STATE_TYPE } from "./User/user.types";
import { ToastTypes } from "./Toast/toast.types";


export interface RootReducersType {
    user: USER_INTIAL_STATE_TYPE,
    toast: ToastTypes
}
