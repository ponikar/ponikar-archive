import { UserReducerActionType } from "./user.types"


const USER_INTIAL_STATE = {
    displayName: "",
    phoneURL: "",
    uid: "",
    email: ""
}

export const userReducers = (state = USER_INTIAL_STATE, action: UserReducerActionType) => {
    switch(action.type) {
        case "USER_LOGGED_IN":
            return {...state, ...action.payload};
        case "USER_LOGOUT":
            return USER_INTIAL_STATE;
        default:
            return state;
    }
}