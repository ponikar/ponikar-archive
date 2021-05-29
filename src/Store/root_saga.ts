import { all, call } from "redux-saga/effects"
import { userSagas } from "./Reducers/User/user.sagas";


export default function* rootSagas() {
    yield all([call(userSagas)]);
}   