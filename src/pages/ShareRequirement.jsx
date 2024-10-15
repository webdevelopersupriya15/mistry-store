import React from 'react'
import './ShareRequirement.css'

export default function ShareRequirement() {
  return (
    <div className='w-full'>
      <div className='max-w-[1320px] mx-auto '>
        <div className='w-full grid grid-cols-2 requirements-box'>
          <div className=''>
          <img src='https://mistry.store/images/engineer.png' className='block mx-auto'/>
          </div>
          <div className=''>
          <p className='text-[27px] text-center pt-10'>
            <span className='text-[#e73540] text-[27px] font-medium poppins-thin'>Share your requirements</span> & <br/>
           <span className='text-center ps-16 font-medium poppins-thin'> get your Estimate </span><br/>
           <span className='ps-16 font-medium poppins-thin'> within </span>
            <span className='text-[#e73540] text-[27px] font-medium poppins-thin'>4 hrs</span>
          </p>
          <div className='ms-12 pt-7'>
          <button className='bg-[#e73540] text-white rounded-md py-2 px-8  block mx-auto poppins-thin'>Order Now</button> 
          </div>     
          </div> 
          </div>
        </div>
      </div>
    
  )
}









