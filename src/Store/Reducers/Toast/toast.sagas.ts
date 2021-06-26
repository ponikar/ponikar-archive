import { put } from "redux-saga/effects";
import { showToast } from "./toast.actions";



export function* showMessage(message : string, type : "success" | "danger") {
    yield put(showToast({ payload: { message, type } }));
}