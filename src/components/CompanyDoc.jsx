import React from 'react'

const CompanyDoc = () => {
    return (
        <div className="">
            < div className=' bg-white shadow-2xl rounded-xl p-[5vw]'>
                <div className="d-flex flex-col gap-3">
                    <div className="">
                        <h1 className='text-[4vw] tracking-tight  leading-[5.2vw] tracking-tight  font-bold text-nowrap '>Our Story</h1>
                    </div>
                    <div className="">
                        <p className='text-[1.5vw] font-Anek leading-none'>Euro Auctions has been conducting unreserved auctions of industrial plant, construction
                            equipment & agricultural machinery since 1998. Euro Auctions
                            conducts around 60 major auctions every year around the globe,
                            in seven countries over four continents.</p>
                    </div>
                </div>
                <div className="pt-4">
                    <div className=" overflow-hidden py-[0.8rem]">
                        <a className="  relative font-medium text-[2.5vh] py-[2.5vh] px-[5vh] bg-[#1b5aff]  rounded-lg border-none text-zinc-100  group " href="#">Contect Us
                            <span className="absolute rounded-lg inset-0 bg-[#b6b6b7] text-black transition-transform duration-[0.3s] ease[cubic-bezier(0.2, 1, 0.2, 1)]  group-hover:translate-y-0 translate-y-[100%] flex items-center justify-center font-roboto text-[2.5vh] py-[2.5vh] px-[5vh]">Contect Us</span>
                        </a>
                    </div>

                </div>

            </div >
        </div>
    )
}

export default CompanyDoc
