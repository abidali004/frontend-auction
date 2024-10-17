import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
const ProductImage = ({ handleImages, errors, touched }) => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className="w-2/3 flex flex-col gap-5  border-b border-zinc-600 py-20">
                <div className="">
                    <h1 className='text-[1.9rem]  text-nowrap md:text-[3rem] font-bold'>Add Pitchers</h1>
                    <p className="text-[18px] font-semibold text-zinc-600"> add can add <strong>10</strong> images</p>

                </div>
                <div className=" border-5 border-dashed border-zinc-400 w-full h-[25rem] flex items-center justify-center rounded-xl">
                    <div className="w-2/5  flex flex-col gap-3 items-center">
                        <div className="flex items-center justify-center flex-col gap-3">
                            <FontAwesomeIcon icon={faFileImage} className='h-[35px]' />
                            <h1 className='text-[2vw] font-semibold'>add photos</h1>
                        </div>
                        <div className="text-center">
                            <p className="text-[18px] font-semibold text-zinc-600">upload maximam <strong>10</strong>images</p>
                        </div>
                        <div className=" relative text-center w-[200px] md:w-[225px]">
                            <label className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 h-[3.4rem] p-2.5">
                                <span className="text-[18px] font-semibold text-zinc-600 pl-5">Choose file...</span>
                                <input
                                    type="file"
                                    name="photo"
                                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleImages}
                                />
                            </label>
                            {errors.photos && touched.photos && (
                                <div className="text-red-500">{errors.photos}</div>
                            )}
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductImage
