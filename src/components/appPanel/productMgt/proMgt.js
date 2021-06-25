import React, { useState,useEffect } from 'react'
import './pro.scss'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ProTable from './table'
import {baseUrl} from '../../../util'



import {useDispatch} from 'react-redux'
import axios from 'axios'
import Productform from './productform';
import Product from './product'
import Addform from './addForm';

const useStyles = makeStyles((theme) => ({
    search: {
        margin: theme.spacing(1),
        width: "250px"
    }
}));



const ProMgt = ({place}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ratings, setRatings] = useState();
    const[skudetail,setSkudetail]=useState({})
    const[count,setCount]=useState({NewLaunch : 0,OtherProducts: 0,PopularCategories: 0,PopularCompanies: 0,PopularProducts: 0})
    const[skuList,setSkuList]=useState([]);
    const[brands,setBrands]=useState([]);
    const[edit,setEdit]=useState(false);
    const[showform,setShowform]=useState(false);
    const[productId,setProductname]=useState("");

  


 const getproductid=(id)=>{
     setProductname(id)
 }
 console.log(productId)
     const param={
        "mobile":"7070092784",
        "apiKey":"232456",
        "UUID":"ND2UZF",
        "zone":`${place}`
     }

     const getproductCount=async()=>{
        
        await axios.post(`${baseUrl}VitaranSDK/getProductMgmtDetails`,param,{
          headers : {
              'Content-Type': 'application/json',
            }}).then((res) => {
               setBrands(res.data.products);
               setSkuList(res.data.skuList);
               setCount({NewLaunch:res.data.productStateCount.NewLaunch,OtherProducts: res.data.productStateCount.OtherProducts,PopularCategories: res.data.productStateCount.PopularCategories,PopularCompanies: res.data.productStateCount.PopularCompanies,PopularProducts: res.data.productStateCount.PopularProducts});
               dispatch({type:"FETCHPRODUCT", payload: res.data.products});
               dispatch({type:'FETCHSKU', payload:res.data.skuList });
               dispatch({type:'FETCHSKUDETAIL',payload: res.data.skuDetails})
               setSkudetail(res.data.skuDetails);
               console.log(res);
           

            
        }).catch(err=>console.log(err.message));
    
    }

    useEffect(()=>{
         getproductCount()
    },[place,dispatch])

  
    return (
        <div className="procontainer">
            <div className="procardcontainer">

                <div className="card1">
                    <h4>{count.PopularProducts}</h4>
                    <label>Popular products</label>
                </div>
                <div className="card2">
                    <h4>{count.PopularCompanies}</h4>
                    <label>Popular Companies</label>
                </div>
                <div className="card3">
                    <h4>{count.PopularCategories}</h4>
                    <label>Popular Categories</label>
                </div>
                <div className="card4">
                    <h4>{count.NewLaunch}</h4>
                    <label>New Launch</label>
                </div>
                <div className="card5">
                    <h4>{count.OtherProducts}</h4>
                    <label>other Products</label>
                </div>

            </div>
            <div className="searchPro ">
                <TextField id="standard-basic" className={classes.search} label="Search Product" ></TextField>
            </div>

            <div className="tableContainer  ">
                <ProTable ed={edit} Sed={setEdit} place={place} setProductname={getproductid} show={showform} showaction={setShowform}   />

            </div>


       {showform? (<Addform  zone={place} show={showform} productname={productId} showaction={setShowform}/> ):(<> {edit? ( <Productform ed={edit}  zone={place} Sed={setEdit} />
          ):(<Product ed={edit} Sed={setEdit} />)}</>)}
            

        
           
           

           

        </div>
    )
}

export default ProMgt
