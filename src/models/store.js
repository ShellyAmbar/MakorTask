import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './root-reducers';
import {rootSagas} from './root-saga';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

//persist
const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);
let persistor = persistStore(store);
export {store, persistor};