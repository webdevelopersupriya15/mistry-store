import React from 'react'

export default function Trusted() {
  return (
    <div className='w-full mt-12'>
        <div className='max-w-[1100px] mx-auto bg-white shadow-white rounded-xl px-6 py-6'>
          <div className=''>
            <p className='text-[45px] font-medium poppins-thin'>Trusted by <span className='text-[#e73540]'> 75+ Brands </span></p>
            <div className='w-[65%] mt-7'>
                <div className='flex justify-between'>
                    <button className='poppins-thin rounded-3xl text-[17px] px-5 py-2 bg-black text-[white]'>Electricals</button>
                    <button className='poppins-thin text-[17px] rounded-3xl px-5 py-2 border border-inherit hover:bg-black hover:text-[white] bg-transparent'>Paints</button>
                    <button className='poppins-thin text-[17px] rounded-3xl px-5 py-2 hover:bg-black hover:text-[white] border border-inherit bg-transparent'>Wood Materials</button>
                    <button className='poppins-thin text-[17px] rounded-3xl px-5 hover:bg-black hover:text-[white] border-inherit border py-2 bg-transparent'>Hardware & Plumbing</button>
                </div>
            </div>
            <div className='flex flex-wrap gap-3 pb-4 mt-12'>
                <div className='boxs-small flex justify-center shadow-sm items-center'>
                    <img src='https://mistry.store/images/electricals/elctricals1.svg'/>
                </div>
                <div className='boxs-small flex justify-center shadow-sm items-center'>
                    <img src='https://mistry.store/images/electricals/elctricals2.svg'/>
                </div>
                <div className='boxs-small flex justify-center shadow-sm items-center'>
                    <img src='https://mistry.store/images/electricals/elctricals3.svg'/>
                </div>
                <div className='boxs-small flex justify-center shadow-sm items-center'>
                    <img src='https://mistry.store/images/electricals/elctricals4.svg'/>
                </div>
                <div className='boxs-small flex justify-center shadow-sm items-center'>
                    <img src='https://mistry.store/images/electricals/elctricals5.svg'/>
                </div>
                <div className='boxs-small flex justify-center shadow-sm items-center'>
                    <img src='https://mistry.store/images/electricals/elctricals6.svg'/>
                </div>
                <div className='boxs-small flex justify-center shadow-sm items-center'>
                    <img src='https://mistry.store/images/electricals/elctricals7.svg'/>
                </div>
                <div className='boxs-small flex justify-center shadow-sm items-center'>
                    <img src='https://mistry.store/images/electricals/elctricals8.svg'/>
                </div>
                
            </div>
          </div>
        </div>
    </div>
  )
}
