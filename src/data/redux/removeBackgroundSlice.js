import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: '',
    password: "",
}
export const removeBackgroundSlice = createSlice({
    name: 'removeBackground',
    initialState,
    reducers: {
        removeBackgroundImage: (state, action) => {
            state.image = action.payload
        },
        passwordstor: (state, action) => {
            state.password = action.payload
        }
    }

})

export const { removeBackgroundImage, passwordstor } = removeBackgroundSlice.actions
export default removeBackgroundSlice.reducer
