import { all, call } from "redux-saga/effects"
import { ponikarBlogSaga } from "./Reducers/ponikar/Blogs/blogs.sagas";
import { userSagas } from "./Reducers/User/user.sagas";


export default function* rootSagas() {
    yield all([call(userSagas), call(ponikarBlogSaga)]);
}   