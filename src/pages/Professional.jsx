import React from 'react'
import firstprofessor from '../images/Tanu+Gupta+Thumbnail+(2)+1.png'
import sameimg from '../images/avatar.png'
import secondprofessor from '../images/Deepak+Gupta+Thumbnail+(1)+2.png'
import thirdprofessor from '../images/Vishal+Sharma+Thumbnail+(1)+3.png'
import fourthprofessor from '../images/Sanjeev+kumar+thumbnail+(1)+1.png'

export default function Professional() {
  return (
    <div className='w-full professional-section '>
        <div className='max-w-[1320px] mx-auto'>
          <p className='pt-10 text-[lightgray] text-[43px] font-medium poppins-thin'>What our Professionals say about us!</p>
          <div className='w-full grid grid-cols-4 gap-5 pb-12 pt-12'>
            <div className=''>
                <div className='bg-white p-3 rounded-xl'>
                    <div className=''>
                        <img src={firstprofessor} className='w-[97%] mx-auto h-[150px]'/>
                    </div>
                    <div className='flex items-center gap-4 pt-8'>
                      <div className=''>
                        <img src={sameimg} className='w-[45px] ms-2'></img>
                      </div>
                      <div className=''>
                        <p className='poppins-thin font-bold'>Tannu Gupta</p>
                        <p className='poppins-thin text-[13px]'>Interior Design</p>
                      </div>
                    </div>
                    <div className=''>
                      <p className='poppins-thin pt-3 pb-3'>Mistry.Store is offering all building material under one roof which makes my life easier. I recommend all people I know. I hope the...</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='bg-white p-3 rounded-xl'>
                    <div className=''>
                        <img src={secondprofessor} className='w-[97%] mx-auto h-[150px]'/>
                    </div>
                    <div className='flex items-center gap-4 pt-8'>
                      <div className=''>
                        <img src={sameimg} className='w-[45px] ms-2'></img>
                      </div>
                      <div className=''>
                        <p className='poppins-thin font-bold'>Deepak Gupta</p>
                        <p className='poppins-thin text-[13px]'>Building Contructor</p>
                      </div>
                    </div>
                    <div className=''>
                      <p className='poppins-thin pt-3 pb-3'>Yahan ek hi platform par saara samaan milta hai, rate market se kaafi ache hai. Quotation bhi phone par mil jaati hai kahin bhagna nahi...</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='bg-white p-3 rounded-xl'>
                    <div className=''>
                        <img src={thirdprofessor} className='w-[97%] mx-auto h-[150px]'/>
                    </div>
                    <div className='flex items-center gap-4 pt-8'>
                      <div className=''>
                        <img src={sameimg} className='w-[45px] ms-2'></img>
                      </div>
                      <div className=''>
                        <p className='poppins-thin font-bold'>Vishal Sharma</p>
                        <p className='poppins-thin text-[13px]'>Carpentry Contructor</p>
                      </div>
                    </div>
                    <div className=''>
                      <p className='poppins-thin pt-3 pb-3'>Main apne contractor bhaiyon ko kehna chahunga ki Mistry.Store se jude aur apna keemti samaya bachaye. Ek hi jagah par saara...</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='bg-white p-3 rounded-xl'>
                    <div className=''>
                        <img src={fourthprofessor} className='w-[97%] mx-auto h-[150px]'/>
                    </div>
                    <div className='flex items-center gap-4 pt-8'>
                      <div className=''>
                        <img src={sameimg} className='w-[45px] ms-2'></img>
                      </div>
                      <div className=''>
                        <p className='poppins-thin font-bold'>Sanjeev Kumar</p>
                        <p className='poppins-thin text-[13px]'>Builder</p>
                      </div>
                    </div>
                    <div className=''>
                      <p className='poppins-thin pt-3 pb-3'>Mistry.Store se jo bhi maal liya hai chahe 1 lakh ka ho ya 500 ka, they deliver at my site. Any material you will buy from them,you will not face..</p>
                    </div>
                </div>
            </div> 
          </div>
        </div>
    </div>
  )
}
