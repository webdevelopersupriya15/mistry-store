import React from 'react'
import { reelslist } from '../Data/reelsData'

export default function Reels() {
  let finalReels=reelslist.map((items,index)=>{
        return(
            <ReelsItem details={items} key={index}/>
        )
       
  })
  return (
            <div className='flex lg:gap-[20px] sm:gap-[20px] gap-[12px] lg:p-0 sm:p-0 justify-center ps-3 pr-3'>
                {finalReels}
                    
            </div>
  )
}
function ReelsItem({details}){
    return(
        <div className='mt-2 mb-2 basis-[10%] '>
            <div className='rounded-[50%] mx-auto lg:w-[60px] sm:w-[60px] w-[35px] lg:h-[60px] sm:h-[60px] h-[35px]'>
                <img src={details.image} className='w-[full h-[full] rounded-[50%]' />
            </div>
            <p className='text-center mt-2 poppins-thin lg:text-[14px]  sm:text-[14px] text-[12px] font-medium text-[#616060]'>{details.heading}</p>
        </div>
    )
}