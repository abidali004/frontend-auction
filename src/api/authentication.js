import baseUrl from './BaseUrl'
import Cookies from 'js-cookie'

export const userSignup = async (formData) => {
    try {
        const response = await baseUrl.post('/user/signup', formData);
        return response;
    } catch (error) {
        console.log("error", error)
        throw error
    }
}
export const userLogin = async (formData) => {
    console.log("login passs", formData)
    try {
        const response = await baseUrl.post('/user/login', formData);
        console.log("response passs", response)
        if (response.status !== 200) {
            throw Error
        }
        const minutes = 50;
        const expiryDate = new Date(new Date().getTime() + minutes * 60 * 1000);
        Cookies.set('token', response.data.token, { expires: expiryDate })
        Cookies.set('userId', response.data.response._id, { expires: expiryDate })
        console.log("response.response", response.data.response._id)
        return response;
    } catch (error) {
        console.log("error", error)
        throw error;
    }
}

export const forgetPass = async (formData) => {
    console.log("forgetpass", formData)
    try {
        const response = await baseUrl.post('/user/forget-password', formData);
        console.log("forget pass error", response)
        return response;
    } catch (error) {
        console.log("error", error)
        throw error
    }
}

export const resetPassword = async (formData, token) => {
    console.log("resetPassword", formData)
    try {
        const response = await baseUrl.post(`/user/reset-password/${token}`, formData);
        return response;
    } catch (error) {
        console.log("error", error)
        throw error
    }
}

export const clearMessage = async (userId, productId) => {

    try {
        const response = await baseUrl.patch(`/user/clear-chat/${userId}/${productId}`)
        console.log("gethighestbidprice", response)
        return response.data;
    } catch (error) {
        console.log("error", error)
        throw error
    }
}

