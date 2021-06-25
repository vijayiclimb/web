import React, { useState, useEffect } from 'react'
import './productform.scss'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { makeStyles } from '@material-ui/core/styles';
import Marl from '../../../images/product/cig2.jpg'
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux'
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
import clsx from 'clsx';
import { baseUrl } from '../../../util'
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { getSkuDetail } from '../../../actions/appPanel/product';


const RedCheckbox = withStyles({
    root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);



const useStyles = makeStyles((theme) => ({
    radiocontainer: {
        display: "flex",
    },
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },

}));






const Productform = ({ ed, Sed, zone }) => {
    const classes = useStyles();
       const detail = useSelector(state => state.skuDetail);
       const [value, setValue] = useState(0);
    const [formdata, setFormdata] = useState({
        skuname: "",
        skuimage: "",
        skurating: `${value}`,
        unitprice: "",
        producttext: "",
        categories: "",
        company: "",
        productname: "",
        retailerprice: "",
        riderprice: "",
        wholesellercprice: "",
        distributorprice: "",
        incentive: "",
        type: "Update"
    })
 
    // const [radio, setRadio] = useState(detail.comments);
    const dispatch = useDispatch();
    const [productImg, setProductImg] = useState(`http://3.7.71.29:6001/imgs/${detail.skuimage}`);

    console.log(detail.iscomp, detail.ispc, detail.ispcat, detail.new_launch, detail.popular_product);

    const [state, setState] = useState({
        iscomp: detail.iscomp===true? true : false,
        ispc:detail.ispc===true? true : false,
        ispcat: detail.ispcat===true? true : false,
        new_launch: detail.new_launch===true? true : false,
        popular_product:detail.popular_product===true? true : false,
    });

    const [file, setFile] = useState('');
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    console.log(formdata);
    console.log(detail)

    useEffect(() => {
        if (detail) {

            setFormdata(detail);
            // setState({
            //     iscomp: `${detail.iscomp}`,
            //     ispc: `${detail.ispc}`,
            //     ispcat: `${detail.ispcat}`,
            //     new_launch: `${detail.new_launch}`,
            //     popular_product: `${detail.popular_product}`
            // });
        }
    }, [detail])

    // const [popular, setPopular] = useState({ product: true, company: true, category: true, new: true, other: true })











    const param = {
        "skuname": `${detail.skuname}`,
        "skurating": `${detail.skurating}`,
        "categories": `${formdata.categories}`,
        "unitprice": `${formdata.unitprice}`,
        "producttext": `${formdata.producttext}`,

        "ispc": `${state.ispc}`,
        "ispcat": `${state.ispcat}`,
        "iscomp": `${state.iscomp}`,
        "popular_product": `${state.popular_product}`,
        "new_launch": `${state.new_launch}`,

        "company": `${formdata.company}`,
        "productname": `${detail.productname}`,
        "zone": `${zone}`,
        "skuimage": `${formdata.skuimage}`,
        "riderprice": `${formdata.riderprice}`,
        "retailerprice": `${formdata.retailerprice}`,
        "wholesellerprice": `${formdata.wholesellerprice}`,
        "distributorprice": `${formdata.distributorprice}`,
        "incentive": `${formdata.incentive}`,
        "imagedata": "",
        "type": "Update"
    }



    console.log(param);
    const obj =
    {
        skuname: `${detail.skuname}`,
        skurating: `${detail.skurating}`,
        categories: `${formdata.categories}`,
        unitprice: `${formdata.unitprice}`,
        producttext: `${formdata.producttext}`,
        ispc: `${state.ispc}`,
        ispcat: `${state.ispcat}`,
        iscomp: `${state.iscomp}`,
        popular_product: `${state.popular_product}`,
        new_launch: `${state.new_launch}`,
        company: `${formdata.company}`,
        productname: `${detail.productname}`,
        skuimage: ``,
        riderprice: `${formdata.riderprice}`,
        retailerprice: `${formdata.retailerprice}`,
        wholesellerprice: `${formdata.wholesellerprice}`,
        distributorprice: `${formdata.distributorprice}`,
        incentive: `${formdata.incentive}`,
        imagedata: "",

    }
    console.log(obj);
    // setTimeout(
    //     () => this.setState({ position: 1 }), 
    //     3000
    //   );

    const handleSubmit = async () => {

        await axios.post(`${baseUrl}VitaranSDK/setProductDetails`, param, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log(res);
            dispatch({ type: 'FETCHSKUDETAIL', payload: obj });


            Sed(!ed);
        })
            .catch(err => console.log(err.message))



    }


    const imgUpload = async (formData) => {
        await axios.post(`http://3.7.71.29:6001/VitaranSDK/uploadImage`, formData)
            .then(res => {
                setFormdata({ ...formdata, skuimage: res.data });

                console.log('success');
                setProductImg(`http://3.7.71.29:6001/imgs/${res.data}`);
            })
            .catch(err => console.log(err.message))
    }



    const imgSelect = (event) => {
        setFile(event.target.files[0]);
    }

    React.useEffect(() => {
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData)
        imgUpload(formData)
    }, [file])





    return (
        <div className="Sku">
            <form >
                <div className="sku_top">
                    <div className="sku_image_container">
                        <img src={productImg} className="sku_image" alt="product"></img>

                        <div className="image-upload">
                            <label htmlFor="inp"><EditIcon /></label>
                            <input accept="image/*" name="image-upload" id="inp" onChange={imgSelect} type="file" />
                        </div>
                    </div>
                    <div className="sku_top_side">
                        <h6 className="sku_category">cigarette</h6>
                        <div className="edit_sku"><label>{formdata.skuname}</label></div>
                        <div className="sku_rating">
                            <Rating
                                name="simple-controlled"
                                value={parseInt(detail.skurating)}
                                name="rating"

                            //                     onChange={(event, newValue) => {
                            //   setValue(newValue);
                            // }}

                            />
                            <label className="sku_rating_name">(152 customer Reviews)</label>
                        </div>
                        <div className="sku_price">
                            <label className="sku_price_name">Price:   </label>
                            <TextField className="sku_price_value_price" required id="outlined-basic" name="unitprice" size="small" value={formdata.unitprice} variant="outlined" onChange={(e) => setFormdata({ ...formdata, unitprice: e.target.value })} />
                        </div>

                        <div className="sku_description" >
                            <label>Description: </label> <TextField required className="sku_description_value" id="outlined-basic" size="small" value={formdata.producttext} variant="outlined" onChange={(e) => setFormdata({ ...formdata, producttext: e.target.value })} />
                        </div>
                    </div>
                </div>
                <div className="sku_down">
                    <div className="sku_popular">
                        <FormGroup row>
                            <FormControlLabel
                                control={<RedCheckbox checked={state.iscomp} onChange={handleChange} name="iscomp" />}
                                label="Popular Companies"
                            />
                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={state.ispc}
                                        onChange={handleChange}
                                        name="ispc"
                                        color="primary"
                                    />
                                }
                                label="Other Product"
                            />
                            <FormControlLabel
                                control={
                                    <RedCheckbox
                                        checked={state.ispcat}
                                        onChange={handleChange}
                                        name="ispcat"

                                    />
                                }
                                label="Popular Category"
                            />
                            <FormControlLabel
                                control={<RedCheckbox checked={state.new_launch} onChange={handleChange} name="new_launch" />}
                                label="New Launch"
                            />
                            <FormControlLabel
                                control={<RedCheckbox checked={state.popular_product} onChange={handleChange} name="popular_product" />}
                                label="Popular Product"
                            />

                        </FormGroup>
                    </div>
                    <div className="sku_down_sub">
                        <div className="sku_specification">
                            <div>
                                <div className="sku_specification_detail"><label className="sku_specification_name">Category: </label> <TextField required id="outlined-basic" className="sku_specification_value_category" name="categories" size="small" value={formdata.categories} variant="outlined" onChange={(e) => setFormdata({ ...formdata, categories: e.target.value })} /></div>
                                <div className="sku_specification_detail"><label className="sku_specification_name">Companies: </label> <TextField required id="outlined-basic" className="sku_specification_value_company" size="small" name="company" value={formdata.company} variant="outlined" onChange={(e) => setFormdata({ ...formdata, company: e.target.value })} /></div>
                                <div className="sku_specification_detail"><label className="sku_specification_name">Brand: </label> <TextField required id="outlined-basic" className="sku_specification_value_product" size="small" name="productname" value={formdata.productname} variant="outlined" onChange={(e) => setFormdata({ ...formdata, productname: e.target.value })} /></div>
                                <div className="sku_specification_detail"><label className="sku_specification_name">Brand Sku: </label> <TextField required id="outlined-basic" className="sku_specification_value_sku" size="small" value={formdata.skuname} variant="outlined" /></div>
                            </div>
                        </div>


                        <div className="sku_role_price">
                            <div className="sku_roles"><label className="sku_role_name">Retailer:</label> <TextField required className="sku_role_value_retailer" id="outlined-basic" size="small" name="retailercost" value={formdata.retailerprice} variant="outlined" label="retailer cost" onChange={(e) => setFormdata({ ...formdata, retailercost: e.target.value })} /></div>
                            <div className="sku_roles"><label className="sku_role_name">Rider:</label> <TextField required className="sku_role_value_rider" id="outlined-basic" size="small" value={formdata.riderprice} variant="outlined" name="ridercost" onChange={(e) => setFormdata({ ...formdata, ridercost: e.target.value })} /></div>
                            <div className="sku_roles"><label className="sku_role_name">Wholesaler:</label> <TextField required className="sku_role_value" id="outlined-basic" size="small" value={formdata.wholesellerprice} variant="outlined" name="wholesellercost" onChange={(e) => setFormdata({ ...formdata, wholesellercost: e.target.value })} /></div>
                            <div className="sku_roles"><label className="sku_role_name">Distributor:</label><TextField required className="sku_role_value" id="outlined-basic" size="small" value={formdata.distributorprice} variant="outlined" name="distributorcost" onChange={(e) => setFormdata({ ...formdata, distributorcost: e.target.value })} /></div>
                            <div className="sku_roles"><label className="sku_role_name">Incentive:</label><TextField required className="sku_role_value" id="outlined-basic" size="small" value={formdata.incentive} variant="outlined" name="incentive" onChange={(e) => setFormdata({ ...formdata, incentive: e.target.value })} /></div>
                            <div>




                            </div>


                        </div>
                    </div>
                    <div className="ButtonContainer">

                        <Button variant="contained" className="sku_button" color="primary" onClick={handleSubmit}>Update</Button>
                        <Button variant="contained" color="primary" onClick={() => Sed(!ed)}>cancel</Button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Productform
