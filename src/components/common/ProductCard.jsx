// src/components/ProductCard.jsx
import { motion } from 'framer-motion';
import { setSelectedProduct } from '@/data/redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSellectedProduct } from '@/api/sellerAuth';

const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    const handleClick = async (productId) => {
        navigate(`/productDetail/${productId}`);
    };
    return (
        <>
            <motion.div

                initial={{ y: "25%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                    ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => handleClick(product._id)}
                className="  rounded-lg  overflow-hidden w-full mt-2 cursor-pointer">
                <div className="relative">
                    <img
                        src={`http://localhost:5000/uploads/${product.images[0]}`}
                        alt={product.title}
                        className=" rounded-xl object-cover object-fill h-[16.4rem] w-full"
                    />
                    <div className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                        ${product.startPrice}
                    </div>
                </div>
                <div className="py-2 flex flex-col">
                    <h2 className="text-xl font-semibold mb-2 leading-none tracking-tight">{product.title}</h2>
                    <div className="flex gap-2 items-center rounded-lg">
                        <h2 className="text-lg font-semibold text-gray-700 leading-tight tracking-tight">
                            {product.condition}
                        </h2>
                        <span className="text-gray-500 text-sm ml-1">Product</span>
                    </div>

                    <div className="text-gray-500 text-sm">
                        Auction ends: {new Date(product.endTime).toLocaleString('en-US', {
                            // "Thursday"
                            year: 'numeric', // "2024"
                            month: 'numeric', // "September"
                            day: 'numeric', // "19"
                            hour: 'numeric', // "12 AM"
                            minute: 'numeric', // "00"
                        })}
                    </div>
                </div>
            </motion.div>

        </>

    );
};

export default ProductCard;
