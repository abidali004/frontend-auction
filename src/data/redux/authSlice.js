import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
    login: false,
    isDialogOpen: false,
    userId: null,
}

export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        userlogin: (state) => {
            state.login = true;

        },
        userlogout: (state) => {
            state.login = false
            Cookies.remove('token')
            Cookies.remove('userId')
        },
        signupModalOppen: (state) => {
            state.isDialogOpen = true
        },
        signupModalClose: (state) => {
            state.isDialogOpen = false
        }

    },
})


export const { userlogin, userlogout, signupModalOppen, signupModalClose } = authSlice.actions

export default authSlice.reducer