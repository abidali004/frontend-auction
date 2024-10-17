import ChatBox from '@/components/perchasedProducts/ChatBox'
import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import PerchasedProd from '../components/perchasedProducts/PercheseProd';
import { toast, ToastContainer } from 'react-toastify'
import { getMySelledProduct } from '@/api/sellerAuth'
import { useNavigate } from 'react-router-dom';
const SelledProducts = () => {
    const [selledProducts, setIsSelledProducts] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getSelledProduct = async () => {
            const userId = Cookies.get('userId')
            if (userId) {
                const response = await getMySelledProduct(userId);
                setIsSelledProducts(response)
            } else {
                toast.error("please login")
                setTimeout(() => {
                    navigate('/')
                }, 3000)

            }
        }
        getSelledProduct();
    }, [])
    return (
        <div>
            <PerchasedProd purchasedProducts={selledProducts} type={"seller"} />

            <ToastContainer />
        </div>
    )
}

export default SelledProducts
