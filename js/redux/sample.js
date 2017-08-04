import { createReducer, createActions } from 'reduxsauce'
var Immutable = require("seamless-immutable");


/**
 * Sample File 4 test
 */

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    age: '24',
    man: false,
    name: null
})

/* ------------- Actions ------------- */
const { Types, Creators } = createActions({
    sample1: null,
    sample2: ['name']
})

export const SampleTypes = Types
export default Creators

/* ------------- Reducers ------------- */

export const sample1 = (state) => {
    return INITIAL_STATE
}

export const sample2 = (state, action) => {
    const {name} = action
    console.log(name)
    return Immutable.merge(state, {are: {belong: "to us"}})
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SAMPLE1]: sample1,
    [Types.SAMPLE2]: sample2
})