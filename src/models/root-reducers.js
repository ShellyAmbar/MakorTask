import {reducer as bitcoinsReducer} from './bitcoinData/reducer';

import {combineReducers} from 'redux';

const reducer = combineReducers({
  bitcoins: bitcoinsReducer,
 
});

export {reducer};