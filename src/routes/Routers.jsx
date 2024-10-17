import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage';
import DetailProduct from '../pages/DetailProduct';
import Seller from '../pages/Seller';
import ErrorPage from '@/components/common/ErrorPage';
import Signup from '@/components/common/Signup';
import PerchasedProduct from '@/pages/PerchasedProduct';
import SelledProducts from '@/pages/SelledProducts';

const Routers = () => {

    return (


        <Router>
            <Routes>
                <Route path='/:resetpass/:token' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/error' element={<ErrorPage />} />
                <Route path='/Search-Something' element={<ProductPage />} />
                <Route path='/Sale-Something' element={< Seller />} />
                <Route path='/Your-saled-Products' element={< SelledProducts />} />
                <Route path='/productDetail/:productId' element={<DetailProduct />} />
                <Route path='/Your-Products' element={< PerchasedProduct />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>

    )
}

export default Routers;
