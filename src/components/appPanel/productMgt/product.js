import React,{useState} from 'react'
import './product.scss'
import Marl from '../../../images/product/cig2.jpg'
import Rating from '@material-ui/lab/Rating';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    search: {
        margin: theme.spacing(1),
        width: "250px"
    }
}));


const Product = ({ ed,Sed,place }) => {

    const [value, setValue] = React.useState(2);
    const[popular,setPopular]=useState(["Popular Brand","Popular Comapnies","Popular Categories","New Launch","Other Product"]);
    
    const detail = useSelector(state => state.skuDetail)
    console.log(detail)
 const [productImg, setProductImg] = useState({ productImg: ``, })


 
    
    return (
        <div>


            <div className="Sku">
                <div className="sku_top">
                    <div className="sku_image_container">
                        <img src={`http://3.7.71.29:6001/imgs/${detail.skuimage}`} className="sku_image" alt="product"></img>
                    </div>
                    <div className="sku_top_side">
                        <h6 className="sku_category">{detail.categories}</h6>
                        <div className="edit_sku"><h4>{detail.skuname} </h4> <EditIcon className="edit_sku_icon" onClick={()=>Sed(!ed)}/></div>
                        <div className="sku_rating">
                            <Rating
                                name="simple-controlled"
                                value={parseInt(detail.skurating)}
                                
                            />
                            <label className="sku_rating_name">(152 customer Reviews)</label>
                        </div>
                        <div className="sku_price">
                            <h5 className="sku_price_name">Price: </h5>
                            <h6 className="sku_price_value">{detail.unitprice}</h6>
                        </div>

                        <div >
                            <label className="sku_description">{detail.producttext}</label> </div>
                    </div>
                </div>
                <div className="sku_down">
                    <div className="sku_popular">
                        <div className="sku_popular_card" style={{backgroundColor: `${detail.popular_product===true? `#ff6666`:`white`}`}} ><label className="sku_popular_name">Popular Product</label></div>
                        <div className="sku_popular_card" style={{backgroundColor: `${detail.iscomp===true? `#ff6666`:`white`}`}}><label className="sku_popular_name">Popular Companies</label></div>
                        <div className="sku_popular_card" style={{backgroundColor: `${detail.ispcat===true? `#ff6666`:`white`}`}}><label className="sku_popular_name">Popular Categories</label></div>
                        <div className="sku_popular_card" style={{backgroundColor: `${detail.new_launch===true? `#ff6666`:`white`}`}}><label className="sku_popular_name">New Launch</label></div>
                        <div className="sku_popular_card" style={{backgroundColor: `${detail.ispc===true? `#ff6666`:`white`}`}}><label className="sku_popular_name">Other Product</label></div>
                    </div>
                    <div className="sku_down_sub">
                        <div className="sku_specification">
                            <div>
                                <div><label className="sku_specification_name">Category: </label><label className="sku_specification_value">{detail.categories}</label></div>
                                <div><label className="sku_specification_name">Companies: </label><label className="sku_specification_value">{detail.company}</label></div>
                                <div><label className="sku_specification_name">Brand: </label><label className="sku_specification_value">{detail.productname}</label></div>
                                <div><label className="sku_specification_name">Brand Sku: </label><label className="sku_specification_value">{detail.skuname}</label></div>
                            </div>
                        </div>


                        <div className="sku_role_price">
                        <div className="sku_roles"><label className="sku_role_name">Retailer:</label> <label className="sku_role_value">{detail.retailerprice}</label></div>
                            <div className="sku_roles"><label className="sku_role_name">Rider:</label> <label className="sku_role_value">{detail.riderprice}</label></div>
                            <div className="sku_roles"><label className="sku_role_name">Wholesaler:</label> <label className="sku_role_value">{detail.wholesellerprice}</label></div>
                            <div className="sku_roles"><label className="sku_role_name">Distributor:</label> <label className="sku_role_value">{detail.distributorprice}</label></div>

                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Product
