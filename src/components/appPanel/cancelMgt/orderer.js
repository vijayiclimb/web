import React,{useState,useEffect} from 'react'
import {Container,Reasons,Title} from './biderStyle'
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import { Button, TableHead } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';



const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
    button:{
        marginTop: "20px"  
      },
  });

const Orderer = () => {
    const classes = useStyles();
    
   const reasons = useSelector(state => state.reasons.orderReasons);

 
  console.log(reasons)
   
       
    

 

    return (
      
       <Container>
     
         <Reasons>
          <Table className={classes.table} xs={12} md={6} sm={6}>
          <TableHead>
          <TableRow>
            <TableCell><Title>Orderer Reasons</Title></TableCell>
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

export default Orderer
