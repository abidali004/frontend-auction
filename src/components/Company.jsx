import React from 'react'
import Img from './Img'
import CompanyDoc from './CompanyDoc'

const Company = () => {
    return (
        <div className="w-full  d-flex align-items-center justify-center pt-10 px-4 ">
            <div className="w-1/2 h-[100%] relative  ">
                <div className="absolute top-[50%] right-[-20%] transform -translate-y-1/2 z-10 shadow-2xl">
                    <CompanyDoc />
                </div>

            </div>
            <div className="w-1/2   h-[100%] d-flex align-items-center justify-center">
                <img src="/src/images/img.webp" alt="" className=' shadow-lg rounded-lg object-fit' />
            </div>

        </div >
    )
}

export default Company
