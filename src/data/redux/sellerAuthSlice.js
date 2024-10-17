import { createSlice } from '@reduxjs/toolkit';
import { getDate } from '../../api/utilsFun/getDate.js'

const initialState = {
    title: "",
    startTime: null,
    endTime: null,
    condition: null,
    startPrice: null,
    description: "",
    location: null,
}

export const sellerAuthSlice = createSlice({
    name: 'seller',
    initialState,
    reducers: {
        bidStartTime: (state, action) => {
            state.startTime = action.payload
        },
        bidEndTime: (state, action) => {
            state.endTime = action.payload
        },
        bidTitle: (state, action) => {
            state.title = action.payload
        },
        productCondition: (state, action) => {
            state.condition = action.payload
        },
        startBidPrice: (state, action) => {
            state.startPrice = action.payload
        },
        bidDescription: (state, action) => {
            state.description = action.payload
        },
        sellerLocation: (state, action) => {
            state.location = action.payload
        }

    },
})


export const { bidStartTime, bidEndTime, bidTitle, productCondition, startBidPrice, bidDescription, sellerLocation } = sellerAuthSlice.actions

export default sellerAuthSlice.reducer