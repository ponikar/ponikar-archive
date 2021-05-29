import { UserLoggedInType, UserLogoutType, UserMessageType, USER_LOGOUT, USER_SINGING_START } from "./user.types"




export const userLoggedIn = ({ type = "USER_LOGGED_IN", payload } :UserLoggedInType) => ({
    type,
    payload
});

export const userStartSignin = (type?: USER_SINGING_START) => {
    return ({
        type 
    });
}

export const userLoggedOut = (type: USER_LOGOUT) => ({
    type
});

export const userSetMessage = ({ type = "USER_SET_MESSAGE", payload  }: UserMessageType) => ({
    type,
    payload
});