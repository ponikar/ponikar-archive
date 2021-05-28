import { UserReducerActionType, USER_INTIAL_STATE_TYPE } from "./user.types"


const USER_INTIAL_STATE :USER_INTIAL_STATE_TYPE = {
    displayName: "",
    photoURL: "",
    uid: "",
    email: ""
}

export const userReducers = (state = USER_INTIAL_STATE, action: UserReducerActionType) => {
    switch(action.type) {
        case "USER_LOGGED_IN":
            console.log("GOT SOMETHING");
            return {...state, ...action.payload};
        case "USER_LOGOUT":
            return USER_INTIAL_STATE;
        default:
            return state;
    }
}