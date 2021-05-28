import { UserLoggedInType, USER_INTIAL_STATE_TYPE, USER_SINGING_START } from "./user.types"




export const userLoggedIn = ({ type = "USER_LOGGED_IN", payload } :UserLoggedInType) => ({
    type,
    payload
});

export const userStartSignin = (type?: USER_SINGING_START) => {
    return ({
        type 
    });
}