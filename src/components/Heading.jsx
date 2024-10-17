import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
const Heading = () => {

    return (
        <>
            <div className="w-full h-screen">
                <div className="w-full border  bg-[url('../src/images/gavel3.jpg')] h-screen   bg-center  bg-cover border-zinc-900 rounded-lg p-4 flex items-center flex-col justify-between border border-2">
                    <div className="w-full">
                        <Navbar />
                    </div>
                    <div className="flex items-center justify-center  w-full flex-wrap">
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: "0%", opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className=" w-[60%] pt-[20vh] flex flex-col ">
                            {["Experiance to", "a Memorable", "Voyage !"].map((item, index) => {
                                return (
                                    <h1 key={index} className="pl-[10%] text-[5vw] tracking-tight text-zinc-100 leading-[5.2vw] tracking-tight  font-bold text-nowrap">{item}</h1>
                                )
                            })}
                            <span className=" pl-[10%] text-[1.5vw] font-bold pt-3 text-zinc-400">experties : commitment : value : </span>
                        </motion.div>
                        <div className="w-[40%] h-[100%]">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 2.5,
                                    ease: [0.76, 0, 0.24, 1],
                                }}
                                className="  flex justify-end pt-[60%]">
                                <div className="flex flex-col gap-3 ">
                                    <div className="flex gap-1  ">
                                        <h1 className=" text-[1.5vw] font-Anek leading-none flex items-end text-white">Request</h1>
                                        <img src="/imagess/arrow.svg" alt="ero" className="h-[4vh]" />
                                        <h1 className="text-[1.5vw] font-Anek leading-none flex items-end text-white">Hope On</h1>
                                        <img src="/imagess/arrow.svg" alt="ero" className="h-[4vh] text-white" />
                                        <h1 className="text-[1.5vw] font-Anek leading-none flex items-end text-white">Auction</h1>
                                    </div>
                                    <div className="">
                                        <div className="flex gap-2 overflow-hidden align-items-center">
                                            <a className="  relative font-medium text-[2.5vh] py-[1.4vh] px-[4vh] bg-[#959598]  rounded border-none text-zinc-100  group text-nowrap " href="#">Explor our  solution
                                                <span className="absolute rounded inset-0 bg-[#ced0db] text-black transition-transform duration-[0.3s] ease[cubic-bezier(0.2, 1, 0.2, 1)]  group-hover:translate-y-0 translate-y-[103%] flex items-center justify-center font-roboto text-[2.5vh] py-[1.4vh] px-[4vh] text-nowrap">Explor our  solution</span>
                                            </a>
                                            <a className=" relative  font-medium text-[2.5vh] py-[1.4vh] px-[4vh] bg-[#959598]  rounded border-none border-zinc-500 text-zinc-100 group text-nowrap" href="#">Get a  Quete
                                                <span className="absolute rounded inset-0 bg-[#ced0db] text-black transition-transform duration-[0.3s] ease[cubic-bezier(0.2, 1, 0.2, 1)]  group-hover:translate-y-0 translate-y-[103%] flex items-center justify-center font-roboto text-[2.5vh] py-[1.4vh] px-[4vh] text-nowrap">Get a  Quete</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Heading
