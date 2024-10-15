import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import firstimg from '../images/Untitled-design-168.jpeg'
import secondimg from '../images/1.jpg'
import thirdimg from '../images/luxury-home-design-on-budget-sixteen_nine.jpg'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'


export default function StoreNews() {
  return (
    <div className='w-full bg-[#f3f3f3] pb-12'>
      <div className='max-w-[1320px] mx-auto'>
         <div className='w-full'>
            <p className='poppins-thin text-[40px] font-bold pt-12 pb-10'>Mistry.Store <span className='font-medium'> in News </span></p>
         </div>
         <div className='w-full grid grid-cols-4 gap-6'>
            <div className=''>
                <div className='w-full rounded-lg bg-white'>
                    <img src={firstimg} className='w-[100%] rounded-lg h-[150px]'/>
                    <p className='px-3 poppins-thin py-3 font-bold text-[18px]'>Mistry.Store Launches Indias First Building Material Sampling Van</p>
                    <p className='text-[red] px-3 font-medium pb-5 cursor-pointer'>Read more &nbsp;<FontAwesomeIcon icon={faRightLong} ></FontAwesomeIcon></p>
                </div>
            </div>
            <div className=''>
            <div className='w-full rounded-lg bg-white'>
                    <img src={secondimg} className='w-[100%] rounded-lg h-[150px]'/>
                    <p className='px-3 poppins-thin py-3 font-bold text-[18px]'>Mistry Store to quadruple home interior professionals to 10,000, with an aim...</p>
                    <p className='text-[red] px-3 font-medium pb-5 cursor-pointer'>Read more &nbsp;<FontAwesomeIcon icon={faRightLong} ></FontAwesomeIcon></p>
                </div>
            </div>
            <div className=''>
            <div className='w-full rounded-lg bg-white'>
                    <img src={thirdimg} className='w-[100%] rounded-lg h-[150px]'/>
                    <p className='px-3 poppins-thin py-3 font-bold text-[18px]'>This start-up is trying to organise the home interiors segment; here's how</p>
                    <p className='text-[red] px-3 font-medium pb-5 cursor-pointer'>Read more &nbsp;<FontAwesomeIcon icon={faRightLong} ></FontAwesomeIcon> </p>
                </div>
            </div>
            <div className=''></div>
         </div>
      </div>
    </div>
  )
}
