import ChatBox from '@/components/perchasedProducts/ChatBox'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import PerchasedProd from '../components/perchasedProducts/PercheseProd';
import { toast, ToastContainer } from 'react-toastify'
import { getMyPerchasedProduct } from '@/api/buyer'
import { useNavigate } from 'react-router-dom';
const PerchasedProduct = () => {
    const [purchasedProducts, setIsPurchasedProducts] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getPerchaseProduct = async () => {
            const userId = Cookies.get('userId')
            if (userId) {
                const response = await getMyPerchasedProduct(userId);
                setIsPurchasedProducts(response)
            } else {
                toast.error("please login")
                setTimeout(() => {
                    navigate('/')
                }, 3000)

            }
        }
        getPerchaseProduct();
    }, [])
    return (
        <div>
            <PerchasedProd purchasedProducts={purchasedProducts} />

            <ToastContainer />
        </div>
    )
}

export default PerchasedProduct
