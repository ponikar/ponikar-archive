import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { FirebaseAuth } from "../../../../Firebase/firebase.config";
import { userLoggedIn } from "./user.actions";
import { USER_SINGING_START } from "./user.types";


export function* onSigninStart() {
    yield takeLatest<USER_SINGING_START>("USER_SINGING_START", signinWithPopup)
}


export function* signinWithPopup() {
     try {  
        const { user: { displayName, email, uid, photoURL } } = yield FirebaseAuth().signInWithPopup(new FirebaseAuth.GoogleAuthProvider());
        yield put(userLoggedIn({ payload: { photoURL, displayName, email, uid } }));
     } catch(e) {
        yield console.log("ERROR AT USER SAGA", e);
     }
}

export function* userSagas() {
    yield all([call(onSigninStart)]);
}