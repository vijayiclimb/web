import React, { useState,useEffect } from 'react'
import { Avatar, Typography,TextField, Button } from '@material-ui/core';
import yel from '../../../images/yel.jpg'
import steve from '../../../images/steve.jpg'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useSelector} from 'react-redux'


const useStyles = makeStyles({
    userInfoTitle: {
        marginLeft: "20px"
    },
    button:{
        marginTop: "15px",
    }
});

const User = ({ solo,prev,filter}) => {

    const[cont,setCont]=useState(0);
   const[newUser,setNewUser] = useState([]); 
   const classes = useStyles();
    const { addToast } = useToasts();
    const [toggle, setToggle] = useState(true);
    const [startDate, setStartDate] = useState();

    const date = new Date(solo.ExpiryDate);

console.log(filter)

const users =  useSelector(state => state.sub);
console.log(users)

const[d,setD]=useState(users[0]);

console.log(d);
let count = 0;
      let usernew = [];


const data =(filterdata, check)=>{
    console.log(check[0]);
 for(let i=0;i<filterdata.length;i++){
     for(let j=0;j<check.length;j++){
         if(filterdata[i].SubcriptionStatus===check[j])
            {
               count = count +1;
               usernew.push(filterdata[i]);
               

            }
     }
 }


setNewUser(usernew);
 setCont(count);
 
 }


   console.log(solo)

    



    console.log(date);
   
    //    const day = date.getDate();
    //    const year = date.getFullYear();
    //    const month =`0${date.getMonth()+1}`.slice(-2);
    //    const final = `${day}/${month}/${year}`
      


    //  approve
    const param = {

        "mobileNo": "",
        "UUID": "",
        "APIKey": "1234",
        "clientMobile": "9341269516",
        "clientUUID": "",
        "Duration": "30 Days"


    }
    const handleApprove = async (id) => {
        console.log(id)




        await axios.post("http://3.7.71.29:6002/VitaranSDK/vtrnApproveSubscription", param, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            if (res.status === 200) {
                addToast('Subscription Extended Successfully', { appearance: 'success' })
                dispatchEvent({type:"UPDATE", payload: startDate})
            }
        }
        ).catch(err => addToast(err.message, { appearance: 'error' }))

    }





    ///////////////////////////////////

   useEffect(()=>{
         
        setStartDate(date)

   },[solo])

   useEffect(()=>{
    data(users,filter);
    // dataPrev(newUser,filte)
     
},[filter,users])


useEffect(()=>{

    if(filter){
        setD(newUser[0])
    }else{
        setD(users[0])
    }
    
},[newUser,filter])
//    console.log(startDate);
    console.log(newUser);



    return (
        <div>
           
                  
                    <div >
                        <div className="firmImage"><img src={yel} className="image" alt="firm Name" /></div>
                        <div className="userImage"><Avatar className="userproImg" src={steve} alt="user image" /></div>

                     
                            <>
                            
                               

                                    <div className="useDetails">
                            <div className="userInfo"><PersonIcon style={{ color: "#007acc" }} /><Typography className={classes.userInfoTitle} variant="body2" >{solo.Name}</Typography> <Button size="small" ><EditIcon /></Button></div>
                            <div className="userInfo"> <CallIcon style={{ color: "#007acc" }} /><Typography className={classes.userInfoTitle} variant="body2">{solo.Mobile}</Typography></div>
                            <div className="userInfo"><BusinessIcon style={{ color: "#007acc" }} /> <Typography className={classes.userInfoTitle} variant="body2">{solo.FirmName}</Typography></div>
                            <div className="userInfo"><LocationOnIcon style={{ color: "#007acc" }} /> <Typography className={classes.userInfoTitle} variant="body2" >{solo.Address}</Typography></div>
                           {toggle? (<div className="userInfo" onDoubleClick={() => setToggle(!toggle)}><AvTimerIcon style={{ color: "#ff0000" }} /><Typography className={classes.userInfoTitle} variant="body2"   >{solo.ExpiryDate}</Typography></div>):( <><AvTimerIcon style={{ color: "#ff0000" }}  onDoubleClick={() => setToggle(!toggle)} /><DatePicker  selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd/MM/yyyy" /></>)}
                            <div className="userInfo"><QueryBuilderIcon style={{ color: "#007acc" }} /><Typography className={classes.userInfoTitle} variant="body2">{solo.Email}</Typography></div>

                            <Button className={classes.button} variant="contained" color="primary" onClick={    handleApprove}>Approve</Button>
                            </div>
                               
                            
                            </>
                           
                           
                        

                    </div>
        </div>
    )
}

export default User
