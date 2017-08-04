import { put } from 'redux-saga/effects'
import SampleActions from '../redux/sample'

/**
 * Sample File 4 test
 */

export function * sample(){
    yield put(SampleActions.sample1())
}

export function * sample2(name){
    yield put(SampleActions.sample2(name))
}