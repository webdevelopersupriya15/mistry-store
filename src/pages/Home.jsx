import React from 'react'
import Header from '../common/Header'
import './Home.css'
import Reels from './Reels'
import Prices from './Prices'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Coupon from './Coupon'
import MobileCoupon from './MobileCoupon'
import freeimg from '../icons/image+253.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faRupee, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import ShareRequirement from './ShareRequirement'
 import StoreWork from './StoreWork'
 import Referfellow from './Referfellow'
import ProBenefit from './Pro Benefit'
import Trusted from './Trusted'
import Exculsive from './Exculsive'
import GrowCommunity from './Grow Community'
import Download from './Download'
import Professional from './Professional'
import StoreNews from './Store News'
import StoreBlog from './Store Blog'
import Footer from './Footer'

export default function Home() {
  
  return (
    <>
        <Header/>
        <section className='w-[full]'>
            <div className='max-w-[1320px] mx-auto'>
                <Reels />
            </div>
        </section>
        <section className='w-[full] p-3'>
            <Prices />
        </section>
        <section className='w-[full] lg:block sm:block hidden'>
            <div className='max-w-[1320px] mx-auto'>
                <Coupon />
            </div>
        </section>
        <section className='w-[full] lg:hidden sm:hidden block p-2'>
            
                <MobileCoupon />
            
        </section>
        <section className='w-[full] mt-[50px] lg:block sm:block hidden pb-10'>
            <div className='max-w-[1000px] mx-auto flex gap-[30px] lg:flex-row sm:flex-row flex-col'>
                <div className="basis-[45%] rounded-[10px] flex items-center gap-[10px] p-[15px_10px] shadow-lg">
                    <div className='frame rounded-[10px_0_0_10px]'><img src={freeimg} alt="" /></div>
                    <div className=''>
                        <h2 className='text-[14px] font-bold poppins-thin'>FREE DELIVERY</h2>
                        <p className='text-[12px] text-slate-600 poppins-thin'>Subscribe to our delivery package to enjoy free</p>
                    </div>
                </div>
                <div className="basis-[45%] rounded-[20px] flex items-center gap-[10px] p-[15px_10px] shadow-lg">
                    <div className='frame rounded-[10px_0_0_10px]'><img src={freeimg} alt="" /></div>
                    <div className=''>
                        <h2 className='text-[14px] font-bold poppins-thin'>WELCOME500</h2>
                        <p className='text-[12px] text-slate-600 poppins-thin'>Save Rs 500</p>
                    </div>
                </div>
               
            </div>
            
            
       {/* <StoreWork/>  */}
        </section> 
        <section className='w-full'>
        <Yellowline/>
             <ShareRequirement/>
          <StoreWork/>
            <Referfellow/> 
            <ProBenefit/>
            <Trusted/>
            <Exculsive/>
            <GrowCommunity/>
            <Download/>
            <Professional/>
            <StoreNews/>
            <StoreBlog/>
            <Footer/>
            </section>
    </>
  )
}






function Yellowline() {
    return (
      <div className='mt-5'>
        <div className='w-full bg-yellow-300   mb-6 flex items-center'>
          <marquee direction="left" scrollamount="20">
            <div className='flex justify-around gap-[30px]'>
          <p className='text-red-400  font-poppins font-medium py-4 '> <FontAwesomeIcon  icon={faIndianRupeeSign} /> Always Low Prices</p>
          <p className='text-red-400 flex font-poppins font-medium py-4 '> <img src='https://mistry.store/images/contact-phone.svg'/> &nbsp;Dedicated Relationship manager</p>
          <p className='text-red-400 ms-5 font-poppins font-medium flex py-4 '>  <img src='https://mistry.store/images/multi-cat-store.svg'/> &nbsp;Multi Category Store</p>
          <p className='text-red-400 ms-5 font-poppins font-medium flex py-4 '><img src='https://mistry.store/images/logistics-icon.svg'/> &nbsp; Simplified Logistics</p>
          </div>
          </marquee>
        </div>
      </div>
    )
  }
