import { useEffect } from 'react'
// import { products } from '../../data/Products'
import ProductCard from './ProductCard'
import { getAllProducts } from '@/api/sellerAuth'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductFun } from '../../data/redux/productSlice'
const ProductList = () => {
    const products = useSelector((state) => state.selectedProd.allProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        const allProducts = async () => {
            const products = await getAllProducts()
            dispatch(getAllProductFun(products.allProducts))
        }
        allProducts()
    }, [])

    return (
        <div className='pt-10 px-2'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <div key={index}>
                        <ProductCard product={product} />
                    </div>

                ))}
            </div>




        </div>
    )
}

export default ProductList
