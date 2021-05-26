import { UserLoggedInType, USER_SINGING_START } from "./user.types"




export const userLoggedIn = ({ type, payload }:UserLoggedInType) => ({
    type,
    payload
});

export const userStartSignin = (type: USER_SINGING_START) => ({
    type 
});