import React, { useState, useEffect } from 'react'
import './app.scss'
import SideNavbar from './components/home/sidebar/sideNavbar'
import Logo from "./images/icons/vitranLogo.png"
import { Avatar } from '@material-ui/core'
import Steve from './images/steve.jpg'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Switch, Route } from 'react-router-dom'
// import { Dropdown } from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ToastProvider} from 'react-toast-notifications';
import axios from 'axios'
// import SignIn from './Auth/login/login'
import SubMgt from './components/appPanel/subMgt/subMgt'
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProMgt from './components/appPanel/productMgt/proMgt'
import {baseUrl} from './util'
import MenuIcon from '@material-ui/icons/Menu';
import Cancel from './components/appPanel/cancelMgt/cancel'
import Subscription from './components/analytics/subscription/subscription'





const useStyles = makeStyles({
  tabs: {
    width: "800px",
    fontSize: "12px",
  },
  tab: {
    fontSize: "12px",
    width: "50px",

  },
  tab1: {
    fontSize: "12px",
    width: "50px",
    marginLeft: "-20px"
  },
  menu:{
    color: "red",
    marginLeft: "10px",
  }
});
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 300,
//     height:"50px",
//   },
//   inside:{
//     height: "500px"
//   }
// }));



const App = () => {
  const [zone, setZone] = useState("");
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const[role,setRole]=useState("All")
  const[fzone,setFzone]=useState([]);
  
console.log(zone,role);
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
            if(newValue===0){
              const a ="All";
              setRole(a.toString());
            }
            else if(newValue===1){
              const b ="Retailer";
              setRole(b.toString());
            }
            else if(newValue===2){
              const c="Rider";
              setRole(c.toString());
            }
            else if(newValue===3){
              const d ="Wholesaler"
              setRole(d.toString());
            }
            else if(newValue===4){
              const e ="Distributor"
              setRole(e.toString());
            }
  };


 
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: top100Films && top100Films.map((option) => option.title),
  };

//   const param={
//     "UserId": "9341269516",
//     "UUID":"NDU2Nw==",
//      "APIKey":"1234"
// }

//  const getzone= async()=>{
//        await axios.post(`${baseUrl}/VitaranSDK/vtrnGetAllZones`,param,{
//         headers : {
//             'Content-Type': 'application/json',
//           }}).then(res=>setFzone(res.data.Zones)).catch(err=>console.log(err));
//  }


//  useEffect(()=>{
//    getzone();
//  },[])


  return (
    <Switch>
    {/* <Route exact path="/auth"><SignIn/></Route> */}
    <>
    <div className="Container">
      <div className="navbar">
      <div className="menu"><MenuIcon className={classes.menu} /></div>
        
        <div className="logoSection">
          <div className="logoContainer">
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <h6 className="logoTitle">VITARAN</h6>
        </div>

        {/* role   tab */}

        {/* <Paper className={classes.root}> */}
        <div className="tab">
        <Tabs

          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered

          xs={6} md={3} sm={3}
        >
          <Tab className={classes.tab} label="All" />
          <Tab className={classes.tab1} label="Retailer"   />
          <Tab label="Rider" className={classes.tab1}  />
          <Tab label="Wholesaler" className={classes.tab1}   />
          <Tab label="Distributor" className={classes.tab1}   />
        </Tabs>
        </div>
        {/* </Paper> */}

        {/* role   tab */}

        <div className="navInfoSection">
          <div className="text">
            <Autocomplete
              {...defaultProps}
              id="debug"
              debug
              renderInput={(params) =>
                <TextField {...params} defaultValue="Ahemdabad" label="Zone" margin="normal" onSelect={(e) => setZone(e.target.value)} />
              }

            />
          </div>

          <NotificationsIcon className="bell" />
          <Avatar className="userProf" src={Steve} alt="user image" />
          <h6 className="userName">User Here</h6>
        </div>

      </div>
      <div className="main">
        <div className="sidebarContent">
          <SideNavbar />
        </div>
        <div className="mainContent">
         
          <ToastProvider>
            <Route exact path="/submgt"><SubMgt place={zone} job={role} /></Route>
            </ToastProvider>
            <Route exact path="/promgt"><ProMgt place={zone} /></Route>
            <Route exact path="/cancelMgt"><Cancel place={zone} /></Route>

        
          
        </div>
      </div>

    </div>
    </>
    </Switch>
  )
}

export default App

const top100Films = [
  { title: 'Ahmedabad' },
  { title: 'Andhra Pradesh' },
  { title: 'Arunachal Pradesh' },
  { title: 'Bihar' },
  { title: 'Chhattisgarh' },
  { title: 'Goa' },
  { title: 'Gujarat' },
  { title: 'Haryana' },
  { title: 'Himachal Pradesh' },
  { title: 'Jharkhand' },
  { title: 'Karnataka' },
  { title: 'Kerala' },
  { title: 'Madhya Pradesh' },
  { title: 'Maharashtra' },
  { title: 'Manipur' },
  { title: 'Meghalaya' },
  { title: 'Mizoram' },
  { title: 'Nagaland' },
  { title: 'Odisha' },
  { title: 'Punjab' },
  { title: 'Rajasthan' },
  { title: 'Sikkim' },
  { title: 'Tamil Nadu' },
  { title: 'Telangana' },
  { title: 'Tripura' },
  { title: 'Uttar Pradesh' },
  { title: 'Uttarakhand' },
  { title: 'West Bengal' }



];