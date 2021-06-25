import React, { useState, useEffect } from 'react'
import './productform.scss'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { makeStyles } from '@material-ui/core/styles';
import Marl from '../../../images/product/cig2.jpg'
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux'
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
import Rating from '@material-ui/lab/Rating';

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






const Addform = ({ zone, show, showaction, productname }) => {
    const classes = useStyles();
    const detail = useSelector(state => state.skuDetail)
    const [value, setValue] = useState(0);
    const [radio, setRadio] = useState('Product Product');
    console.log(detail.productname)
    const [formdata, setFormdata] = useState({ skuname: "", skuimage: "", skurating: `${value}`, unitprice: "", producttext: "", categories: "", company: "", productname: `${detail.productname}`, retailerprice: "", riderprice: "", wholesellercprice: "", distributorprice: "", incentive: "", type: "Add" })
    const [formError, setFormError] = useState({ skunameError: "", unitpriceError: "", descriptionError: "", categoryError: "", companyError: "", productnameError: ``, retailercostError: "", ridercostError: "", wholesellercostError: "", distributorcostError: "", incentiveError: "" })
    console.log(formdata);
    const dispatch = useDispatch();

    const [productImg, setProductImg] = useState(`http://3.7.71.29:6001/imgs/${formdata.skuimage}`);

    

    const [state, setState] = useState({
        iscomp: false,
        ispc: false,
        ispcat: false,
        new_launch: false,
        popular_product: false,
    });

    const [file, setFile] = useState('');

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        if (detail) {

            setFormdata({ ...formdata, productname: detail.productname })
        }
    }, [detail])

    const initialState = { skunameError: "", unitpriceError: "", descriptionError: "", categoryError: "", companyError: "", productnameError: ``, retailercostError: "", ridercostError: "", wholesellercostError: "", distributorcostError: "", incentiveError: "" };

    const validate = () => {
        let skunameError = "";
        let priceError = "";
        let categoryError = ""
        let companyError = ""
        let retailercostError = ""
        let ridercostError = ""
        let distributorcostError = ""
        let wholesellercostError = ""
        let incentiveError = ""

        if (!formdata.skuname.trim()) {
            skunameError = "sku name is required"
        }

        if (skunameError) {
            setFormError({ ...formError, skunameError: skunameError });
            return false
        }

        if (formdata.unitprice.length === 0) {
            priceError = "enter valid price"
        }
        if (priceError) {
            setFormError({ ...formError, unitpriceError: priceError });
            return false
        }

        if (formdata.retailerprice.length === 0) {
            retailercostError = "enter valid price"
        }
        if (retailercostError) {
            setFormError({ ...formError, retailercostError: retailercostError });
            return false
        }
        if (formdata.riderprice.length === 0) {
            ridercostError = "enter valid price"
        }
        if (ridercostError) {
            setFormError({ ...formError, ridercostError: ridercostError });
            return false
        }
        if (formdata.wholesellerprice.length === 0) {
            wholesellercostError = "enter valid price"
        }
        if (wholesellercostError) {
            setFormError({ ...formError, wholesellercostError: wholesellercostError });
            return false
        }
        if (formdata.distributorprice.length === 0) {
            distributorcostError = "enter valid price"
        }
        if (distributorcostError) {
            setFormError({ ...formError, distributorcostError: distributorcostError });
            return false
        }
        if (formdata.incentive.length === 0) {
            incentiveError = "enter valid incentive"
        }
        if (incentiveError) {
            setFormError({ ...formError, incentiveError: incentiveError });
            return false
        }


        return true
    }



    // const [popular, setPopular] = useState({ product: true, company: true, category: true, new: true, other: true })







    let bb = toString(formdata.skurating)

    console.log(bb);
    console.log(typeof (bb));
    console.log(typeof (formdata.skurating));


    const param = {
        "skuname": `${formdata.skuname}`,
        "skurating": `${formdata.skurating}`,
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
        "type": "Add"
    }

    console.log(value)
    console.log(param);

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


    const handleSubmit = async (e) => {

        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            setFormError(initialState)
            await axios.post(`${baseUrl}VitaranSDK/setProductDetails`, param, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res);
                showaction(!show);
            })
                .catch(err => console.log(err.message))


        }
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
                            <label htmlFor="edit"><EditIcon /></label>
                            <input accept="image/*" name="image-upload" id="edit" onChange={imgSelect} type="file" />
                        </div>
                    </div>
                    <div className="sku_top_side">
                        {/* <h6 className="sku_category">cigarette</h6> */}
                        <div className="edit_sku"><label>skuname </label> <TextField name="skuname" className="sku_name" variant="outlined" size="small" value={formdata.skuname} onChange={(e) => setFormdata({ ...formdata, skuname: e.target.value })} />  <div>{formError.skunameError}</div></div>
                        <div className="sku_rating">
                            <Rating
                                name="simple-controlled"
                                value={value}
                                name="rating"
                                onChange={(e, newValue) => {
                                    setFormdata({ ...formdata, skurating: newValue })
                                    setValue(newValue)
                                }}
                            //                     onChange={(event, newValue) => {
                            //   setValue(newValue);
                            // }}

                            />
                            <label className="sku_rating_name">(152 customer Reviews)</label>
                        </div>
                        <div className="sku_price">
                            <label className="sku_price_name">Price:   </label>
                            <TextField className="sku_price_value_price" id="outlined-basic" name="unitprice" type="number" size="small" value={formdata.unitprice} variant="outlined" onChange={(e) => setFormdata({ ...formdata, unitprice: e.target.value })} />
                            <div>{formError.unitpriceError}</div>
                        </div>

                        <div className="sku_description" >
                            <label>Description: </label> <TextField className="sku_description_value" id="outlined-basic" size="small" value={formdata.producttext} variant="outlined" onChange={(e) => setFormdata({ ...formdata, producttext: e.target.value })} />
                            <div>{formError.descriptionError}</div>
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
                            <div className="sku_roles"><label className="sku_role_name">Retailer:</label> <TextField required className="sku_role_value_retailer" id="outlined-basic" size="small" name="retailercost" value={formdata.retailerprice} variant="outlined" onChange={(e) => setFormdata({ ...formdata, retailerprice: e.target.value })} /></div>
                            <div className="sku_roles"><label className="sku_role_name">Rider:</label> <TextField required className="sku_role_value_rider" id="outlined-basic" size="small" value={formdata.riderprice} variant="outlined" name="ridercost" onChange={(e) => setFormdata({ ...formdata, riderprice: e.target.value })} /></div>
                            <div className="sku_roles"><label className="sku_role_name">Wholesaler:</label> <TextField required className="sku_role_value" id="outlined-basic" size="small" value={formdata.wholesellerprice} variant="outlined" name="wholesellercost" onChange={(e) => setFormdata({ ...formdata, wholesellerprice: e.target.value })} /></div>
                            <div className="sku_roles"><label className="sku_role_name">Distributor:</label><TextField required className="sku_role_value" id="outlined-basic" size="small" value={formdata.distributorprice} variant="outlined" name="distributorcost" onChange={(e) => setFormdata({ ...formdata, distributorprice: e.target.value })} /></div>
                            <div className="sku_roles"><label className="sku_role_name">Incentive:</label><TextField required className="sku_role_value" id="outlined-basic" size="small" value={formdata.incentive} variant="outlined" name="incentive" onChange={(e) => setFormdata({ ...formdata, incentive: e.target.value })} /></div>
                            <div>




                            </div>


                        </div>
                    </div>
                    <div className="ButtonContainer">

                        <Button variant="contained" className="sku_button" color="primary" onClick={handleSubmit}>Add</Button>
                        <Button variant="contained" color="primary" onClick={() =>   showaction(!show)}>cancel</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Addform
