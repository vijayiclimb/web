import React,{useState} from 'react'
import './sidenav.scss'
import DashboardIcon from '@material-ui/icons/Dashboard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AirplayIcon from '@material-ui/icons/Airplay';
import { useHistory } from "react-router-dom";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {AppPanel,Market} from '../../../data/sideNavData'
import Collapse from '@material-ui/core/Collapse';

const SideNavbar = () => {
   const[open,setOpen]=useState(false);
   const[analytics,setAnalytics]=useState(false);
   const[market,setMarket]=useState(false);
   const history = useHistory();

   const handleDrop = () => {
      setOpen(!open)
    }

    const handleDropTwo = () => {
      setAnalytics(!analytics)
    }

    const handleDropSub = () => {
      setMarket(!market);
    }
  
    return (
      
       <div className="sidebarContainer">
         <div className="sideMenu">
            <div className="sideItems">
            <DashboardIcon className="sideIcon"/>
            <span className="sideTitle">Dashboard</span>
            </div>
            <div className="sideItems" onClick={handleDropTwo}>
            <EqualizerIcon className="sideIcon"/>
            <span className="sideTitle">Analytics</span>
            <i className="sideArrow2">{analytics ?  <ExpandMore /> : <NavigateBeforeIcon />}  </i>
            </div>
            
                <Collapse in={analytics} timeout="auto" unmountOnExit>

                  <ul className="dropList">
                   <li className="dropItem" onClick={()=>history.push(`/subscriptionAnalytics`)}>
                      <h6 className="dropText">Subscription</h6>
                    </li>
                    <li className="dropItem" onClick={handleDropSub}>
                      <h6 className="dropText">Market Analysis</h6>
                      <i className="sideArrow2">{market ?  <ExpandMore /> : <NavigateBeforeIcon />}  </i>
                    </li>
                    {Market.map((item,index)=>(
                      <div key={index}> 
                       {
                         item.drop.map((item,index)=>(
                          <Collapse in={market} timeout="auto" unmountOnExit>
                    <ul className="dropList">
                   <li className="dropItem" onClick={()=>history.push(`${item.to}`)}>
                      <h6 className="dropText">{item.text}</h6>
                    </li>
                    </ul>
                    </Collapse>
                         ))
                       }
                      </div>

                    ))}
                   
                    <li className="dropItem" onClick={()=>history.push(`/dealsAnalytics`)}>
                      <h6 className="dropText">Deals</h6>
                    </li>
                    <li className="dropItem" onClick={()=>history.push(`/couponAnalytics`)}>
                      <h6 className="dropText">Coupons</h6>
                    </li>
                    <li className="dropItem" onClick={()=>history.push(`/vitaranParameters`)}>
                      <h6 className="dropText">Vitaran Parameters</h6>
                    </li>
                  </ul>

                </Collapse>
              
      
 



            <div className="sideItems" onClick={handleDrop}>
            <AirplayIcon className="sideIcon"/>
            <span className="sideTitle">App Panel</span>
            <i className="sideArrow2">{open ? <ExpandMore /> : <NavigateBeforeIcon />}  </i>
            </div>
            {AppPanel.map((items, index) => (
            <div key={index}>
              {items.drop.map((item, id) => (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <ul className="dropList" key={id}>
                  
                   <li className="dropItem"   key={id} onClick={()=>history.push(`${item.to}`)}>
                      <h6 className="dropText">{item.text}</h6>
                    </li>
                    
                   
                  </ul>

                </Collapse>
              ))}

            </div>))

          }
           
         </div>
       </div>
     
    )
}

export default SideNavbar
