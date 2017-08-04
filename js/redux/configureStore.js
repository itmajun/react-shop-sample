import createSagaMiddleware from 'redux-saga'
import { PERSIST_CONFIG } from "../common/config/ReduxPersistConfig"
import {autoRehydrate, persistStore} from "redux-persist";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from '../redux'
import rootSaga from '../saga'

export function configureStore (onComplete) {

    const middleware = []
    const enhancers = []

    const sagaMiddleware = createSagaMiddleware();

    middleware.push(sagaMiddleware)

    enhancers.push(applyMiddleware(...middleware))

    if(PERSIST_CONFIG.active){
        enhancers.push(autoRehydrate())
    }

    const store = createStore(rootReducer, compose(...enhancers))

    if(PERSIST_CONFIG.active){
        persistStore(store,PERSIST_CONFIG.storeConfig,onComplete)
    }

    sagaMiddleware.run(rootSaga)

    return store
}