import React,{useState,useEffect} from 'react'
import {Container,Reasons,Title} from './biderStyle'
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios'
import {baseUrl} from '../../../util'
import { Button, TableHead } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch,useSelector} from 'react-redux';
import { getFirstReasons } from '../../../actions/appPanel/cancellation';


const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
    button:{
        marginTop: "20px"  
      },
  });

const Bider = () => {
    const classes = useStyles();
    const dispatch=useDispatch();
   const reasons = useSelector(state => state.reasons.biderReasons);

 
  console.log(reasons)
   
       
    const type = 'Bidder';

useEffect(()=>{
    dispatch(getFirstReasons(type))
},[])


    return (
      
       <Container>
     
         <Reasons>
          <Table className={classes.table} xs={12} md={6} sm={6}>
          <TableHead>
          <TableRow>
            <TableCell><Title>Bider Reasons</Title></TableCell>
            </TableRow>
          </TableHead>
              <TableBody>
                {
                  reasons.map((item,index)=>(
                      <TableRow key={index}>
                      <TableCell >
                        {item.reason}
                      </TableCell>
                  </TableRow>
                  ))
                }
                     
               
                  
              
                 
              </TableBody>
          </Table>
         
         </Reasons>
         <Button  className={classes.button} variant="contained" color="primary">Update</Button>
       </Container>
    )
}

export default Bider
