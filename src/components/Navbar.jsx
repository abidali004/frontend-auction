import React, { useState } from 'react';
import CompanyDropDown from './CompanyDropDown';
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Signup from './common/Signup';
import { options } from '../data/staticData/dorpDownData'



const Navbar = () => {
    const [dropDown, setDropDown] = useState(false)

    const navigate = useNavigate();

    const handleClick = (value) => {
        console.log("vall", value)
        navigate(`/${value}`)
    }
    return (
        <div className="  ">
            <div className="relative">
                <nav className="h-[9vh] py-2 my-2">
                    <div className="flex items-center justify-between w-full py-2">

                        <motion.div
                            initial={{ y: "-100%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="font-Anek text-[1.3rem] sm:text-[2.5rem] tracking-tight font-bold text-nowrap  pt-2 pl-[5rem] text-white">My auction.com</motion.div>
                        <motion.div
                            initial={{ x: "-60%", opacity: 0 }}
                            animate={{ x: "0%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 3.5,
                                ease: [0.87, 0, 0.13, 1],
                            }}
                            className="flex items-center justify-between w-[50vw] h-[7.6vh]  rounded text-white">
                            <div className="flex items-center justify-center w-[70%]">
                                <ul className="flex items-center w-full gap-[3.4vw] list-none p-0 m-0">
                                    <li>
                                        <div className="flex items-center">
                                            <div
                                                className="  flex items-center overflow-hidden ">
                                                <a className="font-Moder relative text-zinc-100 font-medium text-[1.1vw] pr-[1vh] leading-none no-underline font-roboto flex items-center jutify-items-center transition-transform duration-[0.3s] ease[cubic-bezier(0.2, 1, 0.2, 1)] hover:translate-y-[-102%]  " href="#"><CompanyDropDown menuLabel={'Company'} options={options[0]} />
                                                    <span className="font-Moder absolute text-[#e8ecf0] font-roboto translate-y-full leading-none flex items-center "><CompanyDropDown menuLabel={'Company'} options={options[0]} /></span>
                                                </a>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[2vh] h-[2vh]" fill="#fcfcfc" viewBox="0 -960 960 960">
                                                    <path d="M480-144 318-306l51-51 111 111 111-111 51 51-162 162ZM369-603l-51-51 162-162 162 162-51 51-111-111-111 111Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <div
                                                className="  flex items-center overflow-hidden">
                                                <a className="relative text-zinc-100 font-medium text-[1.1vw] pr-[1vh] leading-none no-underline font-roboto flex items-center jutify-items-center transition-transform duration-[0.4s] ease[cubic-bezier(0.2, 1, 0.2, 1)] hover:translate-y-[-100%]  focus:outline-none focus:ring-0" ><CompanyDropDown menuLabel={'Buy'} options={options[1]} handleClick={handleClick} />
                                                    <span className="absolute text-[#e8ecf0] font-roboto translate-y-full leading-none flex items-center focus:outline-none focus:ring-0"><CompanyDropDown menuLabel={'Buy'} options={options[1]} handleClick={handleClick} /></span>
                                                </a>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[2vh] h-[2vh]" fill="#ffffff" viewBox="0 -960 960 960">
                                                    <path d="M480-144 318-306l51-51 111 111 111-111 51 51-162 162ZM369-603l-51-51 162-162 162 162-51 51-111-111-111 111Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <div className="  flex items-center overflow-hidden">
                                                <a className="relative text-zinc-100 font-medium text-[1.1vw] pr-[1vh] leading-none no-underline font-roboto flex items-center jutify-items-center transition-transform duration-[0.4s] ease[cubic-bezier(0.2, 1, 0.2, 1)] hover:translate-y-[-100%]  " href="#"><CompanyDropDown menuLabel={'Oppen'} options={options[2]} />
                                                    <span className="absolute text-[#e8ecf0] font-roboto translate-y-full leading-none flex items-center "><CompanyDropDown menuLabel={'Oppen'} options={options[2]} /></span>
                                                </a>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[2vh] h-[2vh]" fill="#ffffff" viewBox="0 -960 960 960">
                                                    <path d="M480-144 318-306l51-51 111 111 111-111 51 51-162 162ZM369-603l-51-51 162-162 162 162-51 51-111-111-111 111Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <div className="  flex items-center overflow-hidden">
                                                <a

                                                    className="relative text-zinc-100 font-medium text-[1.1vw] pr-[1vh] leading-none no-underline font-roboto flex items-center jutify-items-center transition-transform duration-[0.4s] ease[cubic-bezier(0.2, 1, 0.2, 1)] hover:translate-y-[-100%]  " ><CompanyDropDown menuLabel={'Seller'} options={options[3]} handleClick={handleClick} />
                                                    <span className="absolute text-[#e8ecf0] font-roboto translate-y-full leading-none flex items-center "><CompanyDropDown menuLabel={'Seller'} options={options[3]} handleClick={handleClick} /></span>
                                                </a>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[2vh] h-[2vh]" fill="#ffffff" viewBox="0 -960 960 960">
                                                    <path d="M480-144 318-306l51-51 111 111 111-111 51 51-162 162ZM369-603l-51-51 162-162 162 162-51 51-111-111-111 111Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <div className=" flex   justify-center items-center overflow-hidden  ">
                            {/* <a className="z--1 relative bg-dark text-white font-medium text-[2.5vh] py-[1.4vh] px-[3vh] rounded   border-none  group font-roboto  ">
                                <Signup />
                                <span className="absolute rounded inset-0 bg-[#ced0db] text-black transition-transform duration-[0.3s] ease[cubic-bezier(0.2, 1, 0.2, 1)]  group-hover:translate-y-0 translate-y-full flex items-center justify-center font-roboto text-[2.5vh] py-[1.4vh] px-[3vh]">Sign Up</span>
                            </a> */}
                            <Signup />
                        </div>
                    </div>
                </nav>
                {/* {dropDown &&
                    (
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: "0%", opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.2, 1, 0.2, 1]
                            }}
                            exit={{ x: "-100%", opacity: 0 }}
                            onMouseEnter={() => setDropDown(true)}
                            onMouseLeave={() => setDropDown(false)}
                            className="absolute top-[80%] right-[41%]"
                        >
                            <div className="pt-4">
                                <CompanyDropDown />
                            </div>
                        </motion.div>

                    )} */}



            </div>

        </div>
    );
}

export default Navbar;
