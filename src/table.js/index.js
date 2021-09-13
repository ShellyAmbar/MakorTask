
import React ,{useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
      margin:"10px", 
      backgroundColor:"#000",
      color:"#FFFF"
    },
  });

  function createData(title,
  change,
  precent,
  value) {
    return { title,
        change,
        precent,
        value };
  }
 

export default function DataTable(props) {
    const [rows, setrows] = useState([])
    const createAllRows = ()=> {
        props.rows.map((row)=> {
            setrows({...rows, ...createData(row)})
            return createData(row)}
             )
    }
    const onClickStar = (rowId) =>{

    }
    useEffect(() => {
       createAllRows();
    }, [])
    const classes = useStyles();
  return (
    <div style={{display:"flex", flexDirection: "column",height: "100%", width: '100%', alignContent:"center", alignItems:"center", justifyContent:"center" }}>
        <h1 style={{alignSelf:"center", color:"#FFFF"}}>{props.title}</h1>
        <TableContainer style={{backgroundColor:"#000"}} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">change</TableCell>
            <TableCell align="right">Precent</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, index) => (
            <TableRow style={{color:"#FFF"}} key={index}>
             
              <TableCell style={{color:"#FFF"}}  align="right">{row.title}</TableCell>
              <TableCell style={{color:"#FFF"}}  align="right">{row.change}</TableCell>
              <TableCell style={{color:"#FFF"}}  align="right">{row.precent}</TableCell>
              <TableCell style={{color:"#FFF"}}  align="right">{row.value}</TableCell>
             <Button onClick={onClickStar(row.key)}><StarBorderIcon/></Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}