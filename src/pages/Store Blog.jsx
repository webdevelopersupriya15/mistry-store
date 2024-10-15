import React from 'react'
import firstblog from '../images/blog1.webp'
import secondblog from '../images/blog2.webp'
import thirdblog from '../images/blog3.webp'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function StoreBlog() {
  return (
    <div className='w-full  pb-12'>
    <div className='max-w-[1320px] mx-auto pb-12'>
       <div className='w-full'>
          <p className='poppins-thin text-[40px] font-bold pt-12 pb-10'>Mistry.Store <span className='font-medium'> Blogs </span></p>
       </div>
       <div className='w-full grid grid-cols-4 gap-6'>
          <div className=''>
              <div className='w-full rounded-lg bg-white shadow-custom'>
                  <img src={firstblog} className='w-[100%] rounded-lg h-[150px]'/>
                  <p className='px-3 poppins-thin py-3 font-bold text-[19px]'>How ‘Select my Designer’ simplifies your search for an ideal interior designer?</p>
                  <p className='text-[red] px-3 font-medium pb-5 cursor-pointer'>Read more &nbsp;<FontAwesomeIcon icon={faRightLong} ></FontAwesomeIcon></p>
              </div>
          </div>
          <div className=''>
          <div className='w-full rounded-lg bg-white shadow-custom'>
                  <img src={secondblog} className='w-[100%] rounded-lg h-[150px]'/>
                  <p className='px-3 poppins-thin py-3 font-bold text-[19px]'>How can one effectively select an ideal interior designer?</p>
                  <p className='text-[red] px-3 font-medium pb-5 cursor-pointer'>Read more &nbsp;<FontAwesomeIcon icon={faRightLong} ></FontAwesomeIcon></p>
              </div>
          </div>
          <div className=''>
          <div className='w-full rounded-lg bg-white shadow-custom'>
                  <img src={thirdblog} className='w-[100%] rounded-lg h-[150px]'/>
                  <p className='px-3 poppins-thin py-3 font-bold text-[19px]'>Challenges in Choosing an Interior Designer for Your Home</p>
                  <p className='text-[red] px-3 font-medium pb-5 cursor-pointer'>Read more &nbsp;<FontAwesomeIcon icon={faRightLong} ></FontAwesomeIcon> </p>
              </div>
          </div>
          <div className=''></div>
       </div>
    </div>
  </div>
  )
}
