import { applyMiddleware, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"
import { rootReducers } from "./Reducers/root_reducers";
import createSagaMiddleware from "redux-saga"
import {Context, createWrapper} from 'next-redux-wrapper';
import rootSagas from "./root_saga";
import reduxLogger from "redux-logger"

const persistedConfig = {
    key: "_blah",
    storage
}

export const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

process.env.NODE_ENV == "development" && middlewares.push(reduxLogger);

const persistedReducer = persistReducer(persistedConfig, rootReducers)
const configureStore = (initialState = {})  =>  createStore(persistedReducer,initialState,applyMiddleware(...middlewares));
export const persistor = persistStore(configureStore());



const makeStore = (context) => {
    const store = configureStore(context);
    sagaMiddleWare.run(rootSagas);
    return store;
}

export const reduxWrapper = createWrapper(makeStore, { debug: false });


