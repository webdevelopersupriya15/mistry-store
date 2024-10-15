import React from 'react'

export default function Referfellow() {
  return (
    <div className='w-full mt-12'>
        <div className='max-w-[1100px] mx-auto refer-ad-box '>
          <div className='w-full grid grid-cols-2'>
            <div className=''>
              <img src='https://mistry.store/images/three-painters.png' className='block mx-auto'/>
            </div>
            <div className='pt-10'>
                 <p className='text-[27px] text-center pb-5'>
                  <span className='text-[#e73540] font-medium poppins-thin'>Refer Fellow Professionals</span> <br/>
                  <span className='text-[#72777a] font-medium ps-6 poppins-thin'>& Earn Referral Benefits</span>
                 </p>
    
                 <button className='bg-[#e73540] text-white rounded-md py-2 px-8  block mx-auto poppins-thin'>Refer Now</button>
            </div>
          </div>
        </div>
      </div> 
  )
}
