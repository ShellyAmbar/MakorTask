import {all, spawn} from 'redux-saga/effects';
import {bitcoinsDataSaga} from './bitcoinData/sagas';



function* rootSagas() {
  yield all([
    bitcoinsDataSaga()
  ]);
}

export {rootSagas};