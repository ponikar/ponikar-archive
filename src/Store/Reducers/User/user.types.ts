

type USER_LOGGED_IN = "USER_LOGGED_IN"
type USER_LOGOUT = "USER_LOGOUT"
export type USER_SINGING_START = "USER_SINGING_START"

export type UserLoggedInType =  {
    readonly type: USER_LOGGED_IN,
    payload: object
}

export type UserLogoutType =  {
    readonly type: USER_LOGOUT,
}


export type UserReducerActionType = UserLoggedInType | UserLogoutType;