import {
  GET_BITCOIN_DATA_FAILURE,
  GET_BITCOIN_DATA_SUCCESS
  } from './types';
  //GET
  const getBitcoinsActionSuccess = data => {
    console.log('data', data);
    return {
      type: GET_BITCOIN_DATA_SUCCESS,
      payload: data,
    };
  };
  const getBitcoinsActionError = error => {
    return {
      type: GET_BITCOIN_DATA_FAILURE,
      err: error,
      payload: error,
    };
  };
  
  export {
    getBitcoinsActionSuccess,
    getBitcoinsActionError,
   
  };