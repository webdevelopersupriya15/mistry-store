import React from 'react'

export default function Exculsive() {
  return (
    <div className='w-full mt-12'>
        
        <div className='max-w-[1320px] mx-auto py-7 relative'>
        <img src='https://mistry.store/images/home/bg-gray-block-left-72.png' className='absolute top-[0%] left-[-4%]'/>
            <div className='w-full grid grid-cols-[49%_49%] gap-[150px]'>
               <div className=''>
                <div className=''>
                    <p className='poppins-thin text-[42px]  pt-5'>Exclusive platform for all</p>
                    <h2 className='poppins-thin text-[42px]   font-semibold'>Home Building</h2>
                    <h2 className='poppins-thin text-[42px]   font-semibold'>Professionals</h2>
                    <div className=''>
                        <p className='poppins-thin leading-7  pt-4 pe-4'>Introducing Mistry.Store, India's first organized platform that simplifies building material purchases for home-building professionals like Architects, Interior Decorators, Contractors & Skilled workers.</p>
                        <p className='poppins-thin leading-7  pt-4 pe-4'>A comprehensive platform dealing in over 100+ brands across Plywood & Boards, Hardware & Tools, Electricals & Lights, Paints & Chemicals, Sanitary & Plumbing.</p>
                    </div>
                </div>
               </div>
               <div className=''>
                <div className='flex flex-wrap gap-5'>
                    <div className='w-[230px] h-[230px] shadow-white2 py-5 rounded-2xl'>
                        <img src='https://mistry.store/images/currency-rupee.svg' className='block mx-auto w-[58px] h-[58px]'/>
                        <h6 className='poppins-thin font-medium px-2 pt-2 text-center'>Always Low Prices</h6>
                        <p className='poppins-thin pt-2 text-[#72777a] px-2 text-[14px] text-center'>We offer low prices everyday on quality and original products</p>
                    </div>
                    <div className='w-[230px] h-[230px] shadow-white2 py-5 rounded-2xl'>
                        <img src='https://mistry.store/images/logistics-icon.svg' className='block mx-auto w-[58px] h-[58px]'/>
                        <h6 className='poppins-thin font-medium px-2 pt-2 text-center'>Simplified Logistics</h6>
                        <p className='poppins-thin pt-2 text-[#72777a] text-[14px] px-2 text-center'>We take care of the entire process from placing the order to its delivery</p>
                    </div>
                    <div className='w-[230px] h-[230px] shadow-white2 py-5 rounded-2xl'>
                        <img src='	https://mistry.store/images/dedecate-rm.svg' className='block mx-auto w-[58px] h-[58px]'/>
                        <h6 className='poppins-thin font-medium px-2 pt-2 text-center'>Dedicated Relationship manager</h6>
                        <p className='poppins-thin pt-2 text-[#72777a] px-2 text-[14px] text-center'>A dedicated RM who takes care of placing the order to its delivery</p>
                    </div>
                    <div className='w-[230px] h-[230px] shadow-white2 py-5 rounded-2xl'>
                        <img src='https://mistry.store/images/multi-cat-store.svg' className='block mx-auto w-[58px] h-[58px]'/>
                        <h6 className='poppins-thin font-medium px-2 pt-2 text-center'>Multi Category Store</h6>
                        <p className='poppins-thin pt-2 text-[#72777a] px-2 text-[14px] text-center'>We offer products from 10+ categories, providing end to end solutions</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}
