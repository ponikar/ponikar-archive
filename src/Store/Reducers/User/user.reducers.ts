import { UserReducerActionType, USER_INTIAL_STATE_TYPE } from "./user.types"


const USER_INTIAL_STATE :USER_INTIAL_STATE_TYPE = {
    displayName: "",
    photoURL: "",
    uid: "",
    email: "",
    message: ""
}

export const userReducers = (state = USER_INTIAL_STATE, action: UserReducerActionType) :USER_INTIAL_STATE_TYPE => {
    switch(action.type) {
        case "USER_LOGGED_IN":
            return {...state, ...action.payload};
        case "USER_LOGOUT":
            return USER_INTIAL_STATE;
        case "USER_SET_MESSAGE":
            return {...state, message: action.payload };
        default:
            return state;
    }
}