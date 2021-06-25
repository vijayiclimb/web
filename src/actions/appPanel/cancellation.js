import axios from 'axios'
import { GETBIDDERREASON,GETORDERREASON,GETERROR, GETSUCCESS } from '../../constants/appPanel/cancellation';
import {baseUrl} from '../../util'

export const getFirstReasons = (type) => async (dispatch) => {
    console.log(type) ;
    
    const param = {
            "type": `${type}`
        };
    try {
       
        const {data} = await axios.post(`${baseUrl}VitaranSDK/getCancellationReasons`,param,{
            headers : {
                'Content-Type': 'application/json',
              }})

              if(data.Code===200){
                  dispatch({type: GETBIDDERREASON,payload:data.CancellationReasons});
                  dispatch({type: GETSUCCESS});
              }
            //   else{
            //       dispatch({type: GETERROR});
            //   }

  
    }
    catch (error) {
        console.log(error)
    }
}


export const getSecondReasons = (type) => async (dispatch) => {
    console.log(type) ;
    
    const param = {
            "type": `${type}`
        };
    try {
       
        const {data} = await axios.post(`${baseUrl}VitaranSDK/getCancellationReasons`,param,{
            headers : {
                'Content-Type': 'application/json',
              }})

              if(data.Code===200){
                  dispatch({type: GETORDERREASON,payload:data.CancellationReasons});
                  dispatch({type: GETSUCCESS});
              }
            //   else{
            //       dispatch({type: GETERROR});
            //   }

  
    }
    catch (error) {
        console.log(error)
    }
}