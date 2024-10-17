import baseUrl from './BaseUrl'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const sellerPostProduct = async (formData) => {
    console.log("formdata in react", formData)
    const token = Cookies.get('token')
    if (token) {
        try {
            const response = await baseUrl.post(`/user/sell-product/${token}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("response", response)
            return response;
        } catch (error) {
            console.log("error", error)
            throw error
        }
    } else {
        console.log("please login")
        throw new Error("please login")
    }
}
export const filterProducts = async (category) => {
    // const dispatch = useDispatch();
    console.log("title in api", category)

    try {
        const filterProducts = await baseUrl.get(`/user/filter-Products/${category}`);
        if (filterProducts.status === 200 && filterProducts.data.filetrProducts.length !== 0) {
            return filterProducts.data;
            // dispatch(getAllProductFun(filterProducts.data.filetrProducts));
        }

    } catch (error) {
        console.log("error", error)
        throw error
    }
}
export const getAllProducts = async () => {
    try {
        const allProducts = await baseUrl.get('/user/all-products');
        return allProducts.data;
    } catch (error) {
        console.log("error", error)
        throw error
    }
}
export const getSellectedProduct = async (productId) => {

    // const response = await baseUrl.get(`/user/selected-product/${productId}`);
    // console.log("hell", response.data.message)
    // console.log("product", response.data.selectedProduct)
    let response;
    try {
        response = await baseUrl.get(`/user/selected-product/${productId}`);
        console.log("Message from API:", response.data.message);
        console.log("Selected product:", response.data);
        if (!response.data.selectedProduct) {
            toast.error("This product doesn't exist!");
            console.log("hello")

            return { success: false };
        }
        return { success: true, product: response.data.selectedProduct };

    } catch (error) {
        console.error("Error fetching product:", error.response ? error.response.data.message : error.message);

        toast.error("This product doesn't exist!");
        return { success: false };
    }


    // return selectedProduct.data;

}
export const getMySelledProduct = async (userId) => {

    try {
        const response = await baseUrl.get(`/buyer/get-mySelledProducts/${userId}`)
        console.log("res my prod", response)



        return response.data.myProducts;
    } catch (error) {
        console.log("error", error)
        throw error
    }
}


export const notifySellerToExtendTime = async (productId) => {

    try {
        const response = await baseUrl.post(`/buyer/notify-seller/${productId}`)
        console.log("res my prod", response)



        return response.data;
    } catch (error) {
        console.log("error", error)
        throw error
    }
}

