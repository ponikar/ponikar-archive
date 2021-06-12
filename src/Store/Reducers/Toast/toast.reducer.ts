import { ToastReducerActionTypes, ToastTypes } from "./toast.types"


export const TOAST_INITIAL_STATE:ToastTypes = {
    message: "",
    type: "success",
    show: false
}


const toastReducers = (state = TOAST_INITIAL_STATE, action: ToastReducerActionTypes) :ToastTypes => {
    switch(action.type) {
        case "SHOW_TOAST":
            return {...action.payload, show: true};
        case "HIDE_TOAST":
            return TOAST_INITIAL_STATE;
        default:
            return state;
    }
}

export default toastReducers;