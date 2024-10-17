import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFront, faCircleExclamation, faCreditCard } from '@fortawesome/free-solid-svg-icons';
const ItemDetail = ({ description }) => {
    return (
        <div>
            <div className="flex   flex-col md:flex-row gap-3 pt-3">
                <div className=" w-full md:w-2/3 flex flex-col gap-4">
                    <div className="font-bold text-[2rem]">
                        <h1>Item Detail</h1>
                    </div>
                    <div className=" font-Anek leading-none overflow-scroll h-[10rem] lg:h-full md:overflow-auto">
                        <p>{description}</p>
                    </div>
                </div>
                <div className=" w-full md:w-1/2 flex flex-col gap-4 pt-5 md:px-5">
                    <div className="flex flex-col gap-4  border-b  border-zinc-600 pb-2">
                        <div className="">
                            <h1 className='font-bold '>Shpising & Pixking options</h1>
                            <p className='text-zinc-600 '>Item located in Marlborough, MA, US</p>
                        </div>
                        <div className='flex felx-col gap-2 items-center border'>
                            <FontAwesomeIcon icon={faTruckFront} />
                            <h1 className='font-semibold'>See Policy for Shipping</h1>
                            <FontAwesomeIcon icon={faCircleExclamation} className='h-[13px] mt-1' />
                        </div>
                        <div className="">
                            <a href="#">View Auction Policy for Details</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4  border-b  border-zinc-600 pb-2">
                        <div className="">
                            <h1 className='font-semibold mb-1'>Shpising & Pixking options</h1>
                            <p>Item located in Marlborough, MA, US</p>
                        </div>
                        <div className='flex felx-col gap-2 items-center border'>
                            <FontAwesomeIcon icon={faTruckFront} />
                            <h1 className='font-semibold'>See Policy for Shipping</h1>
                            <FontAwesomeIcon icon={faCircleExclamation} className='h-[13px] mt-1' />
                        </div>
                        <div className="">
                            <a href="#">View Auction Policy for Details</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4  border-b  border-zinc-600 pb-2">
                        <div className="">
                            <h1 className='font-bold'>Payment</h1>
                        </div>
                        <div className='flex felx-col gap-3 items-center border'>
                            <FontAwesomeIcon icon={faCreditCard} className='h-[20px]' />
                            <h1 className='font-semibold'>See Policy for Payment</h1>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default ItemDetail
