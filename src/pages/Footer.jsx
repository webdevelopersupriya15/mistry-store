import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div className='w-full bg-[#f3f3f3] pb-12'>
        <div className='max-w-[1320px] mx-auto relative'>
            <div className='w-full absolute bg-dark-blue footer-contact-box'>
                <div className='w-[85%] mx-auto'>
                   <div className='flex gap-[100px]'>
                    <div className=''>
                        <p className='text-[38px] text-[white] '>Find Building Material for your next construction project!</p>
                    </div>
                    <div className=''>
                        <button className='poppins-thin bg-[#e73540] w-[200px] py-3 rounded-lg hover:bg-[white] hover:text-[#e73540] hover:border-[#e73540] hover:border text-[19px] mt-10 text-[white]'>Contact Us</button>
                    </div>
                   </div>
                </div>
            </div>
            
        </div>
        <div className='max-w-[1320px] mx-auto pt-16'>
            <div className='w-full grid grid-cols-4 gap-5 pt-16'>
                <div className='pt-16'>
                    <img src='https://mistry.store/images/logo.svg' className='w-[85%] mt-12'/>
                </div>
                <div className='pt-16'>
                    <ul type='none' className='pt-12'>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer text-[18px]'>Home</li>
                        <li className='poppins-thin text-[#191919] font-semibold pt-7 hover:text-[#e73540] cursor-pointer text-[18px]'>About Us</li>
                        <li className='poppins-thin text-[#191919] font-semibold pt-7 hover:text-[#e73540] cursor-pointer text-[18px]'>Partner with Us</li>
                        <li className='poppins-thin text-[#191919]  font-semibold pt-7 hover:text-[#e73540] cursor-pointer text-[18px]'>Contact Us</li>
                        <li className='poppins-thin text-[#191919] font-semibold pt-7 hover:text-[#e73540] cursor-pointer text-[18px]'>FAQ's</li>
                        <li className='poppins-thin text-[#191919] font-semibold pt-7 hover:text-[#e73540] cursor-pointer text-[18px]'>Expert Inspection Services</li>
                    </ul>
                </div>
                <div className='pt-16'>
                    <ul type='none' className='pt-12'>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer text-[18px]'>Privacy Policy</li>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer pt-7 text-[18px]'>Terms & Conditions</li>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer pt-7 text-[18px]'>Returns Policy</li>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer pt-7 text-[18px]'>Shipping & Delivery Policy</li>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer pt-7 text-[18px]'>Terms of Trade</li>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer pt-7 text-[18px]'>Need Interior Designer for Your Home?</li>
                       
                    </ul>
                </div>
                <div className='pt-16'>
                    <ul type='none' className='pt-12'>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer text-[28px] '>Contact Us</li>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer pt-7 text-[18px] flex'><FiPhoneCall className='text-[24px]' /> &nbsp;&nbsp;+91 80708 80707</li>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer pt-7 text-[18px] flex'><MdOutlineMarkEmailRead className='text-[28px]' /> &nbsp;&nbsp;Marketing: marketing@mistry.store</li>
                        <li className='poppins-thin text-[#191919] font-semibold hover:text-[#e73540] cursor-pointer pt-7 text-[18px] flex'><MdOutlineMarkEmailRead className='text-[28px]' /> &nbsp;&nbsp;Sales: sales@mistry.store</li>
                        <li className='poppins-thin text-[#191919] font-semibold text-[18px] hover:text-[#e73540] cursor-pointer pt-7  flex'><IoLocationOutline  className='text-[38px]' /> &nbsp;&nbsp;Plot no 24, CRPF Road, Sector 61, Gurugram</li>
                        
                    </ul>
                </div>
            </div>
            <div className='flex mt-12 justify-between'>
              <div className='pt-5'>
                <p className='poppins-thin text-[21px] font-medium'>Copyright © 2023 Infraequity Technologies Private Limited</p>
              </div>
              <div className='pt-5'>
                <ul type='none' className='flex gap-3'>
                    <li><img src='https://mistry.store/images/home/youtube.svg'></img></li>
                    <li><img src='	https://mistry.store/images/home/facebook.svg'></img></li>
                    <li><img src='https://mistry.store/images/home/whatsapp.svg'></img></li>
                    <li><img src='https://mistry.store/images/home/instagram.svg'></img></li>
                    <li><img src='https://mistry.store/images/home/linkedin.svg'></img></li>
                </ul>
              </div>
            </div>
        </div>

    </div>
  )
}
