import { takeLatest, all } from 'redux-saga/effects'
import { SampleTypes } from '../redux/sample'
import {sample, sample2} from './sample'

/** 所有需要注册的saga **/
export default function * root() {
    yield all([
        takeLatest(SampleTypes.SAMPLE1, sample),
        takeLatest(SampleTypes.SAMPLE2, sample2)
    ])
}