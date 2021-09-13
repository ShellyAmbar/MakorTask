import React, {useEffect, useState} from 'react'
import { GET_BITCOIN_DATA } from '../bitcoinData/types';
import {connect} from 'react-redux';
import DataTable from '../../table.js';
import { Button } from '@material-ui/core';
const mapStateToProps = (state, props) => {
    const {bitcoins} = state.bitcoins;
    console.log('bitcoins', bitcoins);
  
    return {
        bitcoins,
    };
  };
  
  const mapDispatchToProps = (dispatch, props) => ({
    getBitcoinsData: () => {
      dispatch({
        type: GET_BITCOIN_DATA,
        payload: {},
      });
    },
  });

  const columns = [
    { field: 'title', headerName: 'Title', width: 90 },
    {
      field: 'change',
      headerName: 'Change',
      width: 150,
    },
    {
      field: 'precent',
      headerName: 'Precent',
      width: 150,
    },
    {
      field: 'value',
      headerName: 'Value',
      width: 110,
      
    },
  ];
const Home=({bitcoins,getBitcoinsData })=> {
    useEffect(() => {
        getBitcoinsData();
    }, [getBitcoinsData]);
    return (
        <div style={{backgroundColor:"#000", height: "100vh", width: '100%', display:"flex", flexDirection: "column"}}>
            <div style={{display:"flex", flexDirection: "row", width: '100%', alignContent:"center", alignItems:"center", justifyContent:"center" }}>
            <Button variant="contained">Default</Button>
            <Button variant="contained">Default</Button>
            <Button variant="contained">Default</Button>
            </div>
            {
               bitcoins && bitcoins.map(obj => {
                   console.log("obj",obj)
                   return <DataTable  title={obj.title} rows={obj.data} columns={columns}/>
               })
            }
        </div>
        
     
    )
}
const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeScreen;

