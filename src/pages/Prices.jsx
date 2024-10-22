import React from 'react'
import Slider from 'react-slick'
import { pricelist } from '../Data/priceData'



export default function Prices() {
  let finalPrice=pricelist.map((items,index)=>{
    return(
        <PriceItems details={items}  key={index}/>
    )
 })
 let homeSlidersettings = {
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
        slidesToShow: 6,
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
        {/* <div className="explore-price grid grid-cols-[18%_18%_18%_18%_18%] lg:gap-[20px] sm:gap-[20px] gap-[10px] py-5 basis-[90%] place-content-center mt-5 mb-5">
         
          {finalPrice}
        </div> */}
         <div className='explore-price max-w-[1000px] mx-auto'>
            <h2 className='font-bold text-[15px] poppins-thin'>Explore Our Prices</h2>
            <Slider {...homeSlidersettings} className=''>
              {finalPrice}
            </Slider>
        </div>
    </>
  )
}
function PriceItems({details}){
    return(
      <div className='bg-[#f8f8f8] text-center p-3 mt-3 mb-3 mr-3 h-[180px]'>
          <img src={details.image} width={60} height={60} alt="" className='block mx-auto' />
          <p className='text-slate-700 font-bold text-[15px] mt-3 mb-2 poppins-thin'>{details.unit}</p>
          <p className='text-slate-400 text-[14px] poppins-thin'>Starting From</p>
          <p className='text-red-700 font-bold text-[22px] poppins-thin'>{details.rs}</p>
          <p className='text-slate-700 text-[12px] font-bold poppins-thin'>per sqft</p>
      </div>
    )
}
