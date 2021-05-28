import { applyMiddleware, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"
import { rootReducers } from "./Reducers/root_reducers";
import createSagaMiddleware from "redux-saga"
import {createWrapper} from 'next-redux-wrapper';
import rootSagas from "./root_saga";

const persistedConfig = {
    key: "_blah",
    storage
}

export const sagaMiddleWare = createSagaMiddleware();

const persistedReducer = persistReducer(persistedConfig, rootReducers);

const makeStore = (state = {}) => {
   const store = createStore(persistedReducer, state ,applyMiddleware(...[sagaMiddleWare]));
   return store;
}

export const reduxConfig = () => {
    const store = makeStore();
    let persistor = persistStore(store);
    sagaMiddleWare.run(rootSagas);
    return {store, persistor};
}

export const reduxWrapper = createWrapper(makeStore);


