import React from 'react'
import ProductCard from './productCard'
import ProductTable from './productTable'
import './styles/productDetails.scss'

const ProductDetails = () => {
    return (
        <div className="detailContainer">
            <div className="product_list">
              <ProductTable/>
            </div>
            <div className="product_detail">
             <ProductCard/>
            </div>
        </div>
    )
}

export default ProductDetails
