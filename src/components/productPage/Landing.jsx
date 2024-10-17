import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProductNav from '../common/ProductNav'

const landing = () => {
    return (
        <div>

            <div className="relative w-full d-flex flex-col h-[15rem] bg-center bg-cover bg-no-repeat rounded-lg bg-[url('../src/images/judge3.jpg')] sm:bg-cover sm:h-[22rem] md:h-[26rem] lg:h-[30rem] text-white   ">
                <ProductNav />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="relative z-10 text-white">
                        <div className=" d-flex justify-center md:pt-[100px] pt-[50px]  ">
                            <div className="d-flex flex-col align-items-center text-center inline w-full sm:w-1/2 leading-none  pt-5">
                                <h1 className='font-Anek text-[1.3rem] sm:text-[4rem] tracking-tight font-semibold text-nowrap leading-none text-white '>Find here Best Product</h1>
                                <p className=' sm:text-[1.5vw]  text-[3vw] font-bold  text-zinc-300 leading-none'>"Your safety and trust are our top priorities—secure transactions, guaranteed."</p>
                                <div className="w-4/5 relative py-2 h-[2.7rem] md:h-[3.3rem]  rounded-lg mt-2 bg-white border-2 border-black">
                                    <div className=" absolute top-[40%]  text-zinc-500 left-[5%]">
                                        <span >serach in |</span>
                                    </div>
                                    <div className="absolute right-[2%]  top-[7%] bg-yellow-500 inline-block p-2 rounded-full text-center ">
                                        <button><FontAwesomeIcon icon={faMagnifyingGlass} className='h-[1rem] md:h-[1.7rem] ' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default landing

