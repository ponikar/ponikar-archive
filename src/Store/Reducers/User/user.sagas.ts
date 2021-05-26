import { all, call, takeLatest } from "@redux-saga/core/effects";
import { FirebaseAuth } from "../../../../Firebase/firebase.config";
import { USER_SINGING_START } from "./user.types";


export function* onSigninStart() {
    yield takeLatest<USER_SINGING_START>("USER_SINGING_START", signinWithPopup)
}


export function* signinWithPopup() {
     try {  
        const res = yield FirebaseAuth().signInWithPopup(new FirebaseAuth.GoogleAuthProvider());
        yield console.log("GOT USER", res);
     } catch(e) {
        console.log("ERROR AT USER SAGA", e);
     }
}

export function* userSagas() {
    yield all([call(signinWithPopup)]);
}