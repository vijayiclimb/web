import React from 'react'
import Card from './card'
import CompareProduct from './compareProduct'
import ProductDetails from './productDetails'
import './styles/index.scss'
import WeekWise from './weekWise'

const Product = () => {
    return (
        <div className="con">
            <Card/>
            <WeekWise />
            <CompareProduct />
            <ProductDetails/>
        </div>
    )
}

export default Product
