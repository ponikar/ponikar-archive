import { applyMiddleware, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"
import { rootReducers } from "./Reducers/root_reducers";
import createSagaMiddleware from "redux-saga"
import rootSagas from "./root_saga";

const persistedConfig = {
    key: "_blah",
    storage
}

const sagaMiddleWare = createSagaMiddleware();

const persistedReducer = persistReducer(persistedConfig, rootReducers);

export const reduxConfig = () => {
    let store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare));
    let persistor = persistStore(store);
    sagaMiddleWare.run(rootSagas);
    return {store, persistor};
}

