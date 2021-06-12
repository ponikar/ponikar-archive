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

// process.env.NODE_ENV == "development" && middlewares.push(reduxLogger);



export const reduxConfig = (initialState = {}) => {
    const persistedReducer = persistReducer(persistedConfig, rootReducers)
    const store = createStore(persistedReducer,initialState,applyMiddleware(...middlewares));
    const persistor = persistStore(store);
    
    sagaMiddleWare.run(rootSagas);


    return { store, persistor };
}

const makeStore = (context) => reduxConfig(context).store

export const reduxWrapper = createWrapper(makeStore, { debug: false });


