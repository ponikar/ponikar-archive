
export interface ToastTypes {
    message: string;
    type: "danger" | "success",
    show?: boolean
}


export interface ShowToastPropsType {
    type?: "SHOW_TOAST",
    payload: ToastTypes
}

export type HideToastPropType = {
    type?: "HIDE_TOAST"
}

export type ToastReducerActionTypes = ShowToastPropsType | HideToastPropType;