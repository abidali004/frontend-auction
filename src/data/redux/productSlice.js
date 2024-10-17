import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedProduct: null,
    allProducts: [],
}

export const productSlice = createSlice({
    name: 'selectedProduct',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        },
        getAllProductFun: (state, action) => {
            state.allProducts = action.payload
        }

    },
})


export const { setSelectedProduct, getAllProductFun } = productSlice.actions

export default productSlice.reducer