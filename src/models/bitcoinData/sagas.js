import {put, takeEvery, call} from 'redux-saga/effects';
import {GET_BITCOIN_DATA} from './types';
import {getBitcoinsActionSuccess, getBitcoinsActionError} from './actions';
import { getData } from './calls';
import data from '../../dummyData.json'

function* bitcoinsDataSaga() {
  yield takeEvery(GET_BITCOIN_DATA, getBitcoinsData);
}

function* getBitcoinsData() {
  try {

    let list =[];
    console.log('response', data);
    data.map(objectData => { 
      console.log(objectData)
       const newObj = {title: objectData.title, data: objectData.data}
       list.push(newObj)
      return newObj

     })

     console.log('list', list);
    yield put(getBitcoinsActionSuccess(list));
  } catch (error) {
    console.log('list', error);
    yield put(getBitcoinsActionError(error));
  }
}

export {bitcoinsDataSaga};