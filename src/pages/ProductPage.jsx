import React from 'react'
import ProductList from '../components/common/Product'
import Landing from '../components/productPage/Landing'
import CategoryNav from '../components/common/CategoryNav'

const ProductPage = () => {
    return (
        <div>

            <Landing />
            <CategoryNav />
            <ProductList />


        </div>
    )
}

export default ProductPage
