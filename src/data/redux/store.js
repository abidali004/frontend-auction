import { configureStore } from '@reduxjs/toolkit'
import removeReducer from './removeBackgroundSlice'
import productReducer from './productSlice'
import authReducer from './authSlice'
import sellerReducer from './sellerAuthSlice'


export const store = configureStore({
    reducer: {
        remove: removeReducer,
        selectedProd: productReducer,
        authentication: authReducer,
        seller: sellerReducer,
    },
})