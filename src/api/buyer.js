import baseUrl from './BaseUrl'
import Cookies from 'js-cookie'

export const getHighestBid = async (productId) => {

    try {
        const response = await baseUrl.get(`/buyer/highest-bid/${productId}`)
        console.log("res", response)



        return response.data.highestBid;
    } catch (error) {
        console.log("error", error)
        throw error
    }
}

export const postBidPrice = async (bidPrice, productId) => {
    console.log("bidprice", bidPrice)
    const token = Cookies.get('token')
    if (token) {

        try {
            const response = await baseUrl.post(`/buyer/highest-bid/${token}/${bidPrice}/${productId}`)

            console.log("response", response)
            return response;
        } catch (error) {
            console.log("error", error)
            throw error
        }
    } else {
        throw error
    }

}

export const perchasedProduct = async (buyerId, productId) => {
    console.log("buyer id and prod id ", buyerId, productId)


    try {
        const response = await baseUrl.patch(`/buyer/perchased-product/${buyerId}/${productId}`)

        console.log("response", response)
        return response;
    } catch (error) {
        console.log("error", error)
        throw error
    }


}

export const getMyPerchasedProduct = async (userId) => {

    try {
        const response = await baseUrl.get(`/buyer/get-myProducts/${userId}`)
        console.log("res my prod", response)



        return response.data.myProducts;
    } catch (error) {
        console.log("error", error)
        throw error
    }
}
