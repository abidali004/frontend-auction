import React, { useEffect, useState } from 'react'
import ProdDetail from './ProdDetail'
import { toast, ToastContainer } from 'react-toastify'
import { getMyPerchasedProduct } from '@/api/buyer'
import { user } from '@nextui-org/react'
import PerchasedProdCard from './PerchaseProdCard'

const PercheseProd = ({ purchasedProducts, type }) => {

    return (
        <>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Your {type === "seller" ? "Selled" : "Purchased"} Products</h2>
                {purchasedProducts.length !== 0 && (
                    purchasedProducts.map((product, index) => (

                        <PerchasedProdCard key={index} product={product} />
                    ))
                )}
            </div>


        </>
    )
}

export default PercheseProd
