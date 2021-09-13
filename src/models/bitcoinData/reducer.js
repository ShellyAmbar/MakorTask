import {
   GET_BITCOIN_DATA_FAILURE,
   GET_BITCOIN_DATA_SUCCESS
  } from "./types";
  
  const initialState = {
    bitcoins: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BITCOIN_DATA_SUCCESS: {
        const bitcoinsData = action.payload;
        console.log("payload",bitcoinsData)
        state.bitcoins = bitcoinsData;
        return {...state, bitcoins: [...state.bitcoins]};
      }
      case GET_BITCOIN_DATA_FAILURE: {
        const {err} = action.err;
        console.log("payload","err")
        return state;
      }
      default:
        return state;
    }
  };
  
  export {reducer};