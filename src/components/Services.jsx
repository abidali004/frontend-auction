import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faCoins, faGavel, faShield, faArrowUpRightDots, faRocket } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="flex flex-col gap-3 pt-4 px-2">
            <motion.div
                initial={{ y: "50%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                    duration: 2,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="p-7 bg-white flex items-center justify-between rounded-lg shadow-sm flex-wrap gap-3"
            >
                <div>
                    <h1 className='font-Anek text-[67px] tracking-tight font-bold'>Why Choose</h1>
                    <h1 className='font-Anek text-[57px] tracking-tight font-bold text-[#1b5aff]'>Us!</h1>
                </div>
                <div className="flex flex-col gap-3">
                    <p>
                        Voyager specializes in personalized transportation experiences. Our team carrying years of<br></br>
                        experience ensures every journey is seamless and memorable, tailored just for you.
                    </p>
                    <div className="overflow-hidden py-[0.5rem]">
                        <a
                            className="relative font-medium text-[2.5vh] py-[1.5vh] px-[3vh] bg-[#1b5aff] rounded-lg border-none text-zinc-100 group"
                            href="#"
                        >
                            Contact Us
                            <span className="absolute rounded-lg inset-0 bg-[#b6b6b7] text-black transition-transform duration-[0.3s] ease[cubic-bezier(0.2, 1, 0.2, 1)] group-hover:translate-y-0 translate-y-[100%] flex items-center justify-center font-roboto text-[2.5vh] py-[1.5vh] px-[3vh]">Contact Us</span>
                        </a>
                    </div>
                </div>
            </motion.div>

            <div className="flex flex-col gap-3">
                <motion.div
                    initial={{ y: "50%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex justify-between flex-wrap gap-6"
                >
                    <div className="bg-white p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%] rounded-lg shadow-sm flex gap-4 flex-col ">
                        <div className="flex items-center gap-4">
                            <span className='bg-zinc-200 p-2 rounded'><FontAwesomeIcon icon={faTruckFast} /></span>
                            <h1 className="text-[2vw] font-medium tracking-[-0.1vw]">Versatile Fleet</h1>
                        </div>
                        <p className="font-Anek leading-[1.2rem] tracking-tight">Custom rides from compact to colossal,<br /> with all your favorite extras.</p>
                    </div>
                    <div className="bg-white p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%] rounded-lg shadow-sm flex gap-4 flex-col">
                        <div className="flex items-center gap-4">
                            <span className='bg-zinc-200 p-2 rounded'><FontAwesomeIcon icon={faCoins} /></span>
                            <h1 className="text-[2vw] font-medium tracking-[-0.1vw]">Cost-Effective</h1>
                        </div>
                        <p className="font-Anek leading-[1.2rem] tracking-tight">Custom rides from compact to colossal,<br /> with all your favorite extras.</p>
                    </div>
                    <div className="bg-white p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%] rounded-lg shadow-sm flex gap-4 flex-col">
                        <div className="flex items-center gap-4">
                            <span className='bg-zinc-200 p-2 rounded'><FontAwesomeIcon icon={faGavel} /></span>
                            <h1 className="text-[2vw] font-medium tracking-[-0.1vw]">24/7 Live Bid</h1>
                        </div>
                        <p className="font-Anek leading-[1.2rem] tracking-tight">Custom rides from compact to colossal,<br /> with all your favorite extras.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: "50%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex justify-content-between flex-wrap gap-4 "
                >
                    <div className="border bg-white p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%] rounded-lg shadow-sm flex gap-4 flex-col">
                        <div className="flex items-center gap-4">
                            <span className='bg-zinc-200 p-2 rounded'><FontAwesomeIcon icon={faShield} /></span>
                            <h1 className="text-[2vw] font-medium tracking-[-0.1vw]">Absolute Safety</h1>
                        </div>
                        <p className="font-Anek leading-[1.2rem] tracking-tight">Custom rides from compact to colossal,<br /> with all your favorite extras.</p>
                    </div>
                    <div className="bg-white p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%] rounded-lg shadow-sm flex gap-4 flex-col">
                        <div className="flex items-center gap-4">
                            <span className='bg-zinc-200 p-2 rounded'><FontAwesomeIcon icon={faArrowUpRightDots} /></span>
                            <h1 className="text-[2vw] font-medium tracking-[-0.1vw]">Revolutionary Technology</h1>
                        </div>
                        <p className="font-Anek leading-[1.2rem] tracking-tight">Custom rides from compact to colossal,<br /> with all your favorite extras.</p>
                    </div>
                    <div className="bg-white p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%] rounded-lg shadow-sm flex gap-4 flex-col">
                        <div className="flex items-center gap-4">
                            <span className='bg-zinc-200 p-2 rounded'><FontAwesomeIcon icon={faRocket} /></span>
                            <h1 className="text-[2vw] font-medium tracking-[-0.1vw]">Voyager Pass</h1>
                        </div>
                        <p className="font-Anek leading-[1.2rem] tracking-tight">Custom rides from compact to colossal,<br /> with all your favorite extras.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
