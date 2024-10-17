import React, { useEffect } from 'react'
import Heading from '../components/Heading'
import Company from '../components/Company'
import Services from '../components/Services'
import ProductList from '../components/common/Product'

const Home = () => {
    return (

        <div className="">
            <Heading />
            <Company />
            <Services />
            <ProductList />
        </div>
    )
}

export default Home
