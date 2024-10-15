import React from 'react'

export default function GrowCommunity() {
  return (
    <div className='w-full mt-12 growing-community-section'>
        <div className='max-w-[1000px] mx-auto'>
            <p className='poppins-thin text-[40px] text-center'>Be a part of <span className='font-medium'> Mistry’s Growing Community </span></p>
            <div className='w-full mt-12 '>
                <div className='flex flex-wrap gap-12'>
                    <div className=''>
                        <div className='cover-zoom rounded-md'>
                        <img src='https://mistry.store/images/architect.png' className='zoom-img'/>
                        </div>
                        <p className='poppins-thin text-center pt-2 text-[20px] cursor-pointer hover:text-[#e73540]'>Architects</p>
                    </div>
                    <div className=''>
                    <div className='cover-zoom rounded-md'>
                        <img src='https://mistry.store/images/decorators.png'className='zoom-img'/>
                        </div>
                        <p className='poppins-thin text-center text-[20px] pt-2 cursor-pointer hover:text-[#e73540]'>Interior Decorators</p>
                    </div>
                    <div className=''>
                    <div className='cover-zoom rounded-md'>
                        <img src='https://mistry.store/images/contractors.png'className='zoom-img'/>
                        </div>
                        <p className='poppins-thin text-center text-[20px] pt-2 cursor-pointer hover:text-[#e73540]'>Contractors</p>
                    </div>
                    <div className=''>
                    <div className='cover-zoom rounded-md'>
                        <img src='https://mistry.store/images/builders.png'className='zoom-img'/>
                        </div>
                        <p className='poppins-thin text-center text-[20px] pt-2 cursor-pointer hover:text-[#e73540]'>Builders</p>
                    </div>
                    <div className=''>
                    <div className='cover-zoom rounded-md'>
                        <img src='	https://mistry.store/images/electricians.png'className='zoom-img'/>
                        </div>
                        <p className='poppins-thin text-center text-[20px] cursor-pointer hover:text-[#e73540] pt-2'>Electrical Experts</p>
                    </div>
                    <div className=''>
                    <div className='cover-zoom rounded-md'>
                        <img src='https://mistry.store/images/carpenters.png'className='zoom-img'/>
                        </div>
                        <p className='poppins-thin text-center text-[20px] cursor-pointer hover:text-[#e73540] pt-2'>Carpentry Experts</p>
                    </div>
                    <div className=''>
                    <div className='cover-zoom rounded-md'>
                        <img src='https://mistry.store/images/plumbers.png'className='zoom-img'/>
                        </div>
                        <p className='poppins-thin text-center text-[20px] cursor-pointer  hover:text-[#e73540] pt-2'>Plumbing Experts</p>
                    </div>
                    <div className=''>
                    <div className='cover-zoom rounded-md'>
                        <img src='https://mistry.store/images/painters.png'className='zoom-img'/>
                        </div>
                        <p className='poppins-thin text-center text-[20px]  hover:text-[#e73540] cursor-pointer pt-2'>Paint Experts</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
