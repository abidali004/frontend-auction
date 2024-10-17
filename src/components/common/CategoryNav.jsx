import React, { useState } from "react";
import { categories } from '../../data/Category';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../productPage/Arrows";
import { useMediaQuery } from 'react-responsive';
import { filterProducts } from "@/api/sellerAuth";
import { getAllProductFun } from '../../data/redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const CategoryNav = () => {
    const dispatch = useDispatch();
    const [width, setWidth] = useState(600);
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
    const [activeCategory, setActiveCategory] = useState(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 12,
        slidesToScroll: 5,
        nextArrow: !isMobile ? <NextArrow /> : null,
        prevArrow: !isMobile ? <PrevArrow /> : null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 15,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            }
        ]
    };

    const handleCategory = async (title) => {
        console.log("title", title)
        setActiveCategory(title)
        const products = await filterProducts(title)
        dispatch(getAllProductFun(products.filetrProducts));

    }
    return (
        <div className=" w-[95%]  slider-container mx-auto py-2  relative ">


            <Slider {...settings}>
                {categories.map((item) => (
                    <div key={item.id} onClick={() => handleCategory(item.category)} className={`text-center flex flex-col items-center p-2 w-20 sm:w-24 md:w-28 lg:w-32 ${activeCategory === item.category
                        ? "text-black"
                        : "text-zinc-400"
                        } hover:text-black group`} >
                        <div className=''>
                            {item.icon}
                        </div>
                        <div className="font-semibold text-xs sm:text-sm md:text-s lg:text-s leading-none tracking-tight whitespace-nowrap">
                            {item.category}
                        </div>
                    </div>
                ))
                }

            </Slider >
        </div >
    );
}

export default CategoryNav;