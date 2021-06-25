import axios from 'axios'
import {baseUrl} from '../../util'

export const getProduct =()=>async(dispatch)=>{

}


export const getSkuDetail=(sku,place)=>async(dispatch)=>{

    console.log(sku,place)
    
    try {
        const params ={
        "skuname": `${sku}`,
        "zone": `${place}`

    }
        const data = await axios.post(`${baseUrl}VitaranSDK/getSkuDetails`, params, {
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if(data.Result==="Success"){
        dispatch({type:'FETCHSKUDETAIL',payload: data.skuDetails});

    }


    } catch (error) {

        console.log(error.message)
        
    }
}