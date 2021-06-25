import axios from "axios"
import { GETANALYTICS, GETSUBS,ERROR, SUCCESS, PROFILEDETAILS, PROFERROR, PROFSUCCESS } from "../../constants/analytics/subscription"
import {baseUrl} from '../../util'


export const getData = (place,job) => async(dispatch)=>{

    const param={
        "zone":`${place}`,
        "role":`${job}`
    }

    try{
        const {data} = await axios.post(`${baseUrl}/VitaranSDK/getSubscriberAnalytics`,param,{
            headers : {
                'Content-Type': 'application/json',
              }}) 

              if(data.Result==='Error'){

                dispatch({type: ERROR});
                   
              }
              else{
                
                dispatch({type: GETANALYTICS, payload: data});
                dispatch({type: SUCCESS});
              }


      
            }
    catch (error){
        console.log(error);
        dispatch({type: ERROR});
    }
}

export const getSubs = (place,job) => async(dispatch)=>{

    const param={
        "zone":`${place}`,
        "role":`${job}`
    }

    try{
        const {data} = await axios.post(`${baseUrl}/VitaranSDK/getSubscriberDetailsList`,param,{
            headers : {
                'Content-Type': 'application/json',
              }})

              if(data.Result==='Error'){

                dispatch({type: ERROR});
                   
              }
              else{
                
                dispatch({type: GETSUBS, payload: data}); 
                dispatch({type: SUCCESS});
              }
            }
    catch (error){
        console.log(error);
        dispatch({type: ERROR});
    }
}


export const getProfile = (place,job,type) => async(dispatch)=>{

    const param={
        "zone":`${place}`,
        "role":`${job}`,
        "type": `${type}`
    }



    try{
        const {data} = await axios.post(`${baseUrl}/VitaranSDK/getIndividualSubscriberDetails`,param,{
            headers : {
                'Content-Type': 'application/json',
              }})
        
              console.log(data);

              if(data.Result==='Error'){

                dispatch({type: PROFERROR});
                   
              }
              else{
                console.log(data);
                dispatch({type: PROFSUCCESS});
                dispatch({type: PROFILEDETAILS, payload: data}); 
              }
            }
    catch (error){
        console.log(error);
        dispatch({type: ERROR});
    }
}