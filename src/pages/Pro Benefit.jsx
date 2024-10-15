import React from 'react'

export default function ProBenefit() {
  return (
    <div className='w-full pro-benefit pro-benefit2 mt-12'>
        <div className='max-w-[1320px] mx-auto grid grid-cols-[50%_50%] gap-[40px] py-9'>
            <div className='pt-12'>
                <div className=''>
                <p className='poppins-thin text-[white] pt-12 text-[38px]  font-semibold'>Register with us and get access to a world of exclusive &nbsp;
                    <span className='text-[red]'>PRO Benefits</span></p>
                    <img src='	https://mistry.store/images/home/underline.png'/>
                    </div>
                    <div className='py-10'>
                        <button className='bg-[#e73540] hover:bg-[white] hover:text-[red] mt-12 hover:border-[red] poppins-thin text-[15px] border-none text-[white] rounded-md px-6 py-3'>Register with us</button>                    
                        </div>
            </div>
            <div className='py-12 red-dot-bg '>
                <div className='w-[80%] mx-auto flex flex-wrap lg:gap-[30px] '>
                    <div className=''>
                        <div className='bg-[#fff5f5] rounded-2xl w-[180px] h-[200px] py-2'>
                            <img src='https://mistry.store/images/excl-network.svg' className='ms-2'/>
                            <p className='poppins-thin font-medium px-2 text-[15px] pt-1'>Networking Event Invites</p>
                            <p className='poppins-thin text-[14px] pt-2 px-2 text-[gray]'>Exclusive Access to Premier Industry Events</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='bg-[#fff5f5] rounded-2xl w-[180px] h-[200px] py-2'>
                            <img src='https://mistry.store/images/excl-loyality.svg' className='ms-2'/>
                            <p className='poppins-thin font-medium px-2 text-[15px] pt-1'>Loyalty Points on Every Purchase</p>
                            <p className='poppins-thin text-[14px] pt-2 px-2 text-[gray]'>Shop more!<br/>
                            Earn more!</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='bg-[#fff5f5] rounded-2xl w-[180px] h-[200px] py-2'>
                            <img src='https://mistry.store/images/excl-refer.svg' className='ms-2'/>
                            <p className='poppins-thin font-medium px-2 text-[15px] pt-1'>Refer & Earn Schemes</p>
                            <p className='poppins-thin text-[14px] pt-2 px-2 text-[gray]'>Share and save with our referral program.</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='bg-[#fff5f5] rounded-2xl w-[180px] h-[200px] py-2'>
                            <img src='https://mistry.store/images/excl-disc.svg' className='ms-2'/>
                            <p className='poppins-thin font-medium px-2 text-[15px] pt-1'>Additional Discounts on Every Purchase</p>
                            <p className='poppins-thin text-[14px] pt-2 px-2 text-[gray]'>Save more on every buy with exclusive discounts!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}



