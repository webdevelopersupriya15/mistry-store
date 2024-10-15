import React from 'react'
import { couponlist } from '../Data/couponData'
import Slider from 'react-slick';


export default function Coupon() {
 let finalCouponList=couponlist.map((items,index)=>{
        return(
            <CouponItems details={items}  key={index} />
        )
 })
 let couponSlidersettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed:1500,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
        <div className='max-w-[1320px] mx-auto'>
            <Slider {...couponSlidersettings} className=''>
                {finalCouponList}
             </Slider>
        </div>
        
    </>
  )
}
function CouponItems({details}){
    return(
        <div className='w-[100%]'>
            <img src={details.imgUrl} alt="" className='w-[100%]' />
        </div>
       
    )
}
