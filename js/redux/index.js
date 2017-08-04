import {combineReducers} from  'redux'


/** 所有需要注册的reducers**/
export const rootReducer = combineReducers({
    sample: require('./sample').reducer
})