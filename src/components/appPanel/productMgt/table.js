import React, { useState, useEffect } from 'react'
import './table.scss'
import { useSelector } from 'react-redux'
// import TablePagination from '@material-ui/core/TablePagination'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { baseUrl } from './../../../util'
import { useDispatch } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Item } from 'semantic-ui-react';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    addSku:{
        width: "40px",
        height: "30px"
    }
}));

const ProTable = ({ place, ed, Sed,show,showaction,setProductname}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const h = useSelector(state => state.pro);
    let defaultId= h[0];
   


    const skulist = useSelector(state => state.sku)



    const [product, setProduct] = useState("");
    const [sku, setSku] = useState("");
    
    const [loading, setLoading] = useState(false);

    console.log(sku);
    const param = {
        "productname": `${product}`,
        "zone": `${place}`
    }

    const getSku = async () => {

        await axios.post(`${baseUrl}VitaranSDK/getAllSkus`, param, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {


            console.log(res)

            setTimeout(function () { //Start the timer
                //After 1 second, set render to true
                setLoading(true);

            }, 1000)
            dispatch({ type: 'FETCHSKU', payload: res.data.skuList });
            dispatch({ type: 'FETCHSKUDETAIL', payload: res.data.skuDetails });

            console.log(res)


        }).catch(err => console.log(err));
    }

    const params = {
        "skuname": `${sku}`,
        "zone": `${place}`

    }


    const getSkuDetail = async () => {

        await axios.post(`${baseUrl}VitaranSDK/getSkuDetails`, params, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            dispatch({ type: "FETCHSKUDETAIL", payload: res.data.skuDetails })
          


        }).catch(err => console.log(err));
    }
    // const [page, setPage] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(10);



    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };


    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };


   

    useEffect(() => {
        getSku();
        setLoading(false)
        Sed(false);
    }, [product, place, dispatch])

    useEffect(() => {
        getSkuDetail()
        Sed(false);
    }, [sku,dispatch])


    return (
        <div className="tableCont">
            <div className="category">
                <table className="table  categoryTable table-responsive">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody className="table-wrapper-scroll-y my-custom-scrollbar">
                        <tr>
                            <td>ciggarette</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="product">
                <table className="table  productTable table-responsive ">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Product</th>
                        </tr>
                    </thead>
                    <tbody className="table-wrapper-scroll-y my-custom-scrollbar">

                        {h && h.map((item, index) => (
                            <tr key={index} onClick={setProductname(item)}>

                                <td onClick={() => setProduct(item)}>{item}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <TablePagination className="tablePag"
                        
                        xs={12} md={6} sm={6}
                        rowsPerPageOptions={[5,10,20,30]}
                        component="div"
                        count={brand.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    /> */}
            </div>

            <div className="productSku">
                <table className="table  productSkuTable table-responsive">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Product SKU</th>
                        </tr>
                    </thead>
                    <tbody className="table-wrapper-scroll-y my-custom-scrollbar">
                        {product.length !== 0 ? (<>{loading ? (<>{skulist && skulist.map((item, index) => (
                            <tr key={index}>

                                <td onClick={() => setSku(item)}>{item}</td>

                            </tr>
                        ))}</>) : (<div className={classes.root}><CircularProgress /></div>)}</>) : (<>{skulist && skulist.map((item, index) => (
                            <tr key={index}>

                                <td onClick={() => setSku(item)}>{item}</td>

                            </tr>
                        ))}</>)}

                        
                        
                       

                    </tbody>
                </table>
                {/* <TablePagination className="tablePag"
                        
                        xs={12} md={6} sm={6}
                        rowsPerPageOptions={[5,10,20,30]}
                        component="div"
                        count={sku.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    /> */}
                    <div className="AddSku">  <Fab color="primary" className={classes.addSku} aria-label="add" onClick={()=>setProductname(defaultId)}>
                            <AddIcon onClick={()=> showaction(!show)}/>
                        </Fab></div>
                  
                       
            </div>
        </div>
    )
}

export default ProTable
