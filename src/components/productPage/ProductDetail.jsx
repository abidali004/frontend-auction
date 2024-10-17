import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCircleExclamation, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProductNav from '../common/ProductNav'
import ProductList from '../common/Product';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
// import { products } from '../../data/products'
import { getSellectedProduct } from '@/api/sellerAuth';
import { getHighestBid, perchasedProduct, postBidPrice } from '@/api/buyer';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signupModalOppen, signupModalClose } from '../../data/redux/authSlice';
import Signup from '../common/Signup';
// import { deleteProduct } from '@/api/authentication';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { notifySellerToExtendTime } from '../../api/sellerAuth'


const ProductDetail = () => {
    const userId = Cookies.get('userId')
    const [slideIndex, setSlideIndex] = useState(0)
    const [product, setProduct] = useState(null)
    const [highestBid, setHighestBid] = useState(null)
    const [userBidPrice, setUserBidPrice] = useState('')
    const [isSoldProduct, setIsSoldProduct] = useState(false)

    const dispatch = useDispatch();
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const navigate = useNavigate();




    const selectedProdId = useSelector((state) => state.selectedProd.selectedProduct)
    const oppen = useSelector((state) => state.authentication.isDialogOpen)
    console.log("oppen", oppen)

    const { productId } = useParams()

    const postBid = async () => {
        console.log("product?.startPrice", product?.startPrice)
        if (product.seller === userId) {
            toast.error("You cannot place a bid on your own product")
            return;
        }
        if (userBidPrice > (highestBid !== null ? highestBid.offerBidPrice : product.startPrice) && !isSoldProduct) {
            // console.log("bid  post", userBidPrice, "highest bid", highestBid.offerBidPrice)

            toast.promise(postBidPrice(userBidPrice, product._id), {
                pending: "posting your bid",
                success: "post your bid successfully",
                error: "please login bid",
            })
            console.log("pid", product._id)
            setUserBidPrice('')
        } else {
            // console.log("bid  post", userBidPrice, "highest bid", highestBid.offerBidPriceif()
            if (isSoldProduct) {
                toast.error("time out this product")
            } else {
                toast.error("Bid  must be grate then highest bid  or starting bid")
                setUserBidPrice('')
            }
        }
    }

    const maxSlide = (n, length) => {

        setSlideIndex((prev) => {
            let next = prev + n;
            if (next > length - 1) next = 0;
            if (next < 0) next = length - 1;
            return next;
        })
    };
    useEffect(() => {
        const fetchSelectedProduct = async () => {
            const response = await getSellectedProduct(productId)
            if (!response.success) {
                navigate('/');
            } else {

                setProduct(response.product)
                // setIsSoldProduct(response.product.isSold)

            }

            const highestBid = await getHighestBid(productId)
            console.log("api data", highestBid)
            setHighestBid(highestBid)

        }



        fetchSelectedProduct();


    }, [userBidPrice, productId, selectedProdId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedProdId, productId])
    console.log("product?.startPrice", product?.startPrice)

    // useEffect(() => {
    //     if (!product) return;
    //     const endTime = new Date(product.endTime);


    //     const updateRemainingTime = async () => {
    //         const now = new Date();
    //         const timeDifference = endTime - now;

    //         if (timeDifference > 0) {
    //             const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    //             const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    //             const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    //             const seconds = Math.floor((timeDifference / 1000) % 60);
    //             setTimeRemaining({ days, hours, minutes, seconds });
    //         } else {
    //             setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    //             clearInterval(timeDifference);

    //             if (!highestBid?.buyer) {
    //                 await perchasedProduct(highestBid.buyer, productId);
    //                 // await deleteProduct(productId)
    //                 // navigate('/');
    //             } else {
    //                 toast.error("not highest bid ")
    //             }
    //         };

    //         updateRemainingTime();

    //         const timerInterval = setInterval(updateRemainingTime, 1000);

    //         return () => clearInterval(timerInterval);
    //     }, [product?.endTime]);
    useEffect(() => {
        if (!product) return;

        const endTime = new Date(product.endTime);

        const timerInterval = setInterval(async () => {
            const now = new Date();
            const timeDifference = endTime - now;

            if (timeDifference <= 0) {

                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timerInterval);
                if (highestBid?.buyer) {
                    await perchasedProduct(highestBid.buyer, productId);
                    setIsSoldProduct(true)

                    // await deleteProduct(productId)
                    if (highestBid.buyer === userId) {
                        navigate('/Your-Products');

                    }
                } else {
                    console.log("email send")

                    await notifySellerToExtendTime(product._id);

                }





            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
                const seconds = Math.floor((timeDifference / 1000) % 60);

                setTimeRemaining({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [product?.endTime, highestBid?.buyer]);


    // const deletePro = async () => {
    //     await perchasedProduct(highestBid?.buyer, productId);
    // }

    if (!product) {
        return (
            <p>Loading...</p>
        )
    }
    console.log("high buyer", highestBid)

    return (

        <div className='px-3'>
            {isSoldProduct && <p className='text-[3vh]'>sold</p>}
            {/* <Signup /> */}
            <ProductNav />
            <div className='w-full flex flex-col md:flex-row items-center gap-2 md:justify-between relative'>
                {/* <marquee behavior="smooth" direction="left" className='absolute z-50 font-bolder text-[4rem]'>New Product</marquee> */}
                <div className="relative w-full md:w-1/2 h-[263px] md:h-[28rem]">
                    <div onClick={() => maxSlide(-1)} className="absolute inset-y-0 left-0 flex items-center justify-center w-[30px] h-[30px] top-1/2 transform -translate-y-1/2 bg-white rounded-full opacity-75 cursor-pointer">
                        <FontAwesomeIcon icon={faChevronLeft} className='h-[1rem]' />
                    </div>
                    {product.images.map((img, index) => (
                        <div key={index} className={`${index === slideIndex ? "block" : "hidden"} h-full w-full`}>
                            <img src={`http://localhost:5000/uploads/${img}`} alt="image" className='object-cover object-center h-[100%] w-[100%]' />
                        </div>
                    ))}
                    <div onClick={() => maxSlide(1, product.images.length)} className="absolute inset-y-0 right-0 flex items-center justify-center w-[30px] h-[30px] top-1/2 transform -translate-y-1/2 bg-zinc-400 opacity-75 rounded-full cursor-pointer">
                        <FontAwesomeIcon icon={faChevronRight} className='h-[1rem]' />
                    </div>
                </div>
                {/* <div className="  hidden md:flex flex-col gap-2 h-[450px] border-2  overflow-scroll">
                    {products[selectedProdId].images.map((img, index) => (
                        <div onClick={() => setSlideIndex(index)} key={index} className="w-[100px] h-[100px] shadow-xl">
                            <img src={img} alt="" className={`object-cover object-center h-full w-full ${index !== slideIndex ? "border-none" : "border-2 border-black"}`} />
                        </div>
                    ))}
                </div> */}
                <div className="hidden md:flex flex-col gap-2 h-[450px] overflow-auto scrollbar-hide">
                    {product.images.map((img, index) => (
                        <div onClick={() => setSlideIndex(index)} key={index} className="w-[100px] h-[100px] shadow-xl">
                            <img src={`http://localhost:5000/uploads/${img}`} alt="" className={`object-cover object-center h-full w-full ${index !== slideIndex ? "border-none" : "border-2 border-black"}`} />
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-1/3 border rounded-lg overflow-hidden bg-white flex flex-col gap-6">
                    <div className="bg-blue-100 p-4 text-center">
                        <h1 className="tracking-tight font-semibold text-[4vh]">{product.title}</h1>
                    </div>
                    <div className="w-full bg-yellow-500 text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faClock} />
                            <h1 className="text-lg">   {`${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`}
                            </h1>
                        </div>
                        <div className="font-semibold">
                            <h1>{new Date(product.endTime).toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                            })}</h1>
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            {highestBid && <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                                <h1 className="text-[3.5vh] font-bold">${highestBid.offerBidPrice}</h1>
                                <h1 className="text-lg font-medium">Current Highest Bid</h1>
                            </div>}
                            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                                <h1 className="text-[3.5vh] font-bold">${product.startPrice}</h1>
                                <h1 className="text-lg font-medium">Starting Bid</h1>
                            </div>
                        </div>
                        <div className="text-xs flex flex-col gap-2 text-gray-600">
                            <h1>2 bids & 4 watchers</h1>
                            <div className="h-[3rem] shadow-md border rounded-lg flex items-center gap-2 px-3 bg-gray-50">
                                <FontAwesomeIcon icon={faCircleExclamation} className="text-red-500" />
                                <span className="font-semibold text-blue-500 cursor-pointer">Login to Bid</span>
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-2">
                            <input
                                onChange={(e) => setUserBidPrice(e.target.value)}
                                value={userBidPrice}
                                type='text' className="w-1/2 h-[3rem] border border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:border-blue-500" placeholder={`Enter your bid ${highestBid?.offerBidPrice ? highestBid?.offerBidPrice + 10 : product.startPrice}`} />
                            <button
                                onClick={postBid}
                                className="w-1/2 h-[3rem] border rounded-lg shadow bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-300">Bid Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ItemDetail description={product.description} />
            <ProductList />
            <ToastContainer />
            <div className="disabled opacity-0">
                <Signup />
            </div>

        </div >
    )
}

export default ProductDetail
