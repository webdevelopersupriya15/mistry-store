import React from 'react'

export default function Download() {
  return (
    <div className='w-full bg-[#f3f3f3] mt-12'>
        <div className='max-w-[1320px] mx-auto py-12'>
            <div className='w-full grid grid-cols-[54%_46%] gap-[40px]'>
              <div className=''>
                <p className='pt-[150px] poppins-thin font-medium text-[38px]'>Mistry.Store Download the App Now!</p>
                <div className='flex gap-4 mt-4'>
                    <img src='https://mistry.store/images/home/google-play.png'/>
                    <img src='https://mistry.store/images/home/app-store.png'/>
                </div>
              </div>
              <div className=''>
                <img src='https://mistry.store/images/home/mobile-img.png' className='block mx-auto'/>
              </div>
            </div>
        </div>
    </div>
  )
}
