import { HideToastPropType, ShowToastPropsType } from "./toast.types";




export const showToast = ({ type = "SHOW_TOAST", payload }: ShowToastPropsType) => ({
    type,
    payload
});

export const hideToast =  ({ type = "HIDE_TOAST" }:HideToastPropType) => ({
    type,
});