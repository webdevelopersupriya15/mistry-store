import React from 'react'
import { couponlist } from '../Data/couponData'


export default function Coupon() {
 let finalCouponList=couponlist.map((items,index)=>{
        return(
            <CouponItems details={items}  key={index} />
        )
 })

  return (
    <>
        <div className='w-[100%] flex justify-center gap-[10px] lg:flex-row sm:flex-row flex-col'>
             {finalCouponList}
        </div>
        
    </>
  )
}
function CouponItems({details}){
    return(
        <div className='basis-[31%] couponbox'>
            <img src={details.imgUrl} alt="" className='w-[full]' />
        </div>
       
    )
}
