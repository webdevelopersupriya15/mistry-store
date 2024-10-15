import React from 'react'

export default function StoreWork() {
  return (
    <div  className='w-full works-mistry-section pb-8 '>
      <div className='max-w-[1320px] mx-auto mt-12 pb-12'>
        <p className='text-[35px] text-black font-medium pt-12 poppins-thin'>Here’s how Mistry.Store works</p>
        <p className='text-[18px] poppins-thin'>All your home building materials, just a few steps away!</p>
        <div className='w-full grid lg:grid-cols-[43%_47%] lg:gap-[80px]  sm:grid-cols-1'>
            <div className=''>
                <div className='flex gap-[20px] mt-8 '>
                    <div className=''>
                        <div className='bg-white rounded-full flex justify-center items-center'>
                            <img src='https://mistry.store/images/send-req-home.svg' className='w-[120px]'/>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-black text-[18px] poppins-thin font-medium'>Search & send your requirements</p>
                        <p className='text-[#72777a] text-[17px] poppins-thin pe-12'>Send your product requirements by sharing images, adding items from our master list, call your RM or Whatsapp</p>
                    </div>
                </div>
                <div className='flex gap-[20px] mt-8'>
                    <div className=''>
                        <div className='bg-white rounded-full flex justify-center items-center'>
                            <img src='https://mistry.store/images/rev-quote-home.svg' className='w-[60px]'/>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-black text-[18px] poppins-thin font-medium'>Review & confirm order</p>
                        <p className='text-[#72777a] text-[17px] poppins-thin pe-12'>Review the quote and confirm your order</p>
                    </div>
                </div>
                <div className='flex gap-[20px] mt-10'>
                    <div className=''>
                        <div className='bg-white rounded-full flex justify-center items-center'>
                            <img src='https://mistry.store/images/del-support-home.svg' className='w-[80px]'/>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-black text-[18px] poppins-thin font-medium'>Get delivery support</p>
                        <p className='text-[#72777a] text-[17px] poppins-thin pe-12'>See realtime status and get end-to-end support for delivery onsite</p>
                    </div>
                </div>
            </div>
            <div className='relative z-50'>
                <div className=' lg:mt-0 sm:pt-8'>
                <iframe width="100%" height="350" className='rounded-3xl ' src="https://www.youtube.com/embed/D9GGU4f7Ttk?si=5mga-f-7LMbJQ7oJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
                <img src='https://mistry.store/images/home/dot-grid-gray.png' className='absolute  right-[-10%] bottom-[-9%] '/>
                
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}











