import React, { useState } from 'react'
import logo from '../images/logo.svg'
import menuimg from '../images/left-menu.svg'
import closeimg from'../images/menu-close.svg'
import switchicon from '../icons/lang-switch.svg'
import callicon from '../icons/call-calling-mobile.svg'
import carticon from '../icons/cart-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

export default function () {
  let [menu,menuState]=useState(false)
  let classname=menu ? 'overLayShow' :'modalDivOverlay'
  return (
    <>
        <header className="w-full lg:static sm:static sticky top-0 bg-white mobileheader">
            <div className="max-w-[1320px] mx-auto flex justify-between items-center lg:ps-0 lg:pr-0 sm:ps-0 sm:pr-0 ps-2 pr-2 lg:py-0 sm:py-0 py-2">
                <button  onClick={()=>menuState(!menu)}><img src={(!menu) ? menuimg :closeimg} alt="" className="lg:hidden sm:hidden block lg:mr-3 sm:mr-3 mr-0 w-[20px] h-[20px]"  /></button>
                <img src={logo} alt="" className='lg:w-[200px] lg:h-[70px] sm:w-[200px] sm:h-[70px] w-[150px] h-[30px]' />
                
                <ul className="menuitems lg:flex sm:flex hidden">
                    <li className="active poppins-thin" >Home</li>
                    <li className="hover:text-[red] poppins-thin">About us</li>
                    <li className="hover:text-[red] poppins-thin">Pdf Catelog</li>
                    <li className="hover:text-[red]">Contact Us</li>
                    <li className="hover:text-[red] poppins-thin">Blogs</li>
                </ul>
                <ul className="flex items-center justify-around ">
                    <li className="lg:block sm:block hidden lg:mr-3 sm:mr-3">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid fa-magnifying-glass absolute search"></FontAwesomeIcon><input type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search wires, plywood, paints etc." className="relative w-[350px] p-[10px_5px] bg-[#f8f8f8] poppins-thin rounded-[5px]"/></li>
                    <li className='lg:mr-3 sm:mr-3'><img src={switchicon} className='w-[30px] h-[30px] md:block hidden' alt=""/></li>
                    <li className='lg:mr-3 sm:mr-3'><img src={callicon}  className='w-[30px] h-[30px]' alt=""/></li>
                    <li className='lg:mr-3 sm:mr-3 mr-3'><img src={carticon} className=' w-[30px] h-[30px] md:block hidden' alt=""/></li>
                    <li className='lg:mr-3 sm:mr-3 mr-0'><button className="bg-[crimson] p-[10px] text-[white] font-bold md:text-[13px] text-[12px] w-[130px] lg:rounded-none sm:rounded-none rounded-[10px] poppins-thin">Login or Signup</button></li>
                </ul>
            </div>
        </header>
        <div className={classname}> </div>
            <div className='w-[80%] bg-white h-[100%] fixed mobilemenu' style={{left:`${menu ? '0' : '-100%'}`}}>
                <ul className='mobilemenu text-slate-700'>
                <li className='poppins-thin'>Home</li>
                <li className='poppins-thin'>About us</li>
                <li className='poppins-thin'>PDF Catelog</li>
                <li className='poppins-thin'>Patrner with Us</li>
                <li className='poppins-thin'>Blogs</li>
                <li className='poppins-thin'>Contact Us</li>
                <li><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> En</li>
                </ul>
            </div>
        
    </>
  )
}

