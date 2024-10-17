import React, { useState, useEffect } from 'react';
import { useScroll } from 'react-use';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { color } from 'framer-motion';
import { MdBorderBottom } from 'react-icons/md';


const ProductNav = () => {


    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const dynamicStyle = {
        backgroundColor: scrollPosition > 20 ? 'white ' : " ",
        color: scrollPosition > 20 ? 'black ' : " ",

    };


    return (
        <div className=' relative sticky top-0 z-50 shadow-inner '>
            <div className="d-flex p-3 " style={dynamicStyle}>
                <div className="w-1/2  d-flex align-items-center">
                    <h1 className='font-Anek text-[1.3rem] sm:text-[3rem] tracking-tight font-bold text-nowrap '>My auction.com</h1>
                </div>
                <div>scroll:{scrollPosition}</div>
                <div className="  d-flex gap-3 w-1/2  justify-end">
                    <div className=" hidden  contect_buttons shadow-sm border-[1.3px] border-zinc-400 w-[225px] h-[2.5rem] rounded-lg md:flex align-items-center gap-2 justify-center">
                        <a href='#' className='font-semibold '>Auction your Home</a>
                    </div>
                    <div className="contect_buttons hidden shadow-sm border-[1.3px] border-zinc-400 w-[80px] h-[2.5rem] rounded-lg md:flex align-items-center gap-2 justify-center">
                        <FontAwesomeIcon icon={faWhatsapp} className=' h-[25px] ' />
                        <span>|</span>
                        <FontAwesomeIcon icon={faPhoneVolume} className=' h-[20px] ' />
                    </div>
                    <div className=" contect_buttons shadow-sm border-[1.3px] border-zinc-400 w-[70px] h-[2.5rem] rounded-lg d-flex align-items-center gap-3 justify-center ">
                        <FontAwesomeIcon icon={faBars} className=' h-[20px] ' />
                        <FontAwesomeIcon icon={faUser} className=' h-[20px] ' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductNav
