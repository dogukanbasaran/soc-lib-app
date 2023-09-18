import React from 'react'
import logo from '../assets/Images/logo.png'
import avatar from '../assets/Images/avatar.jpg'
import { HiHome, HiPlus, HiStar, HiQuestionMarkCircle, HiUserGroup, HiBookOpen} from "react-icons/hi";
import { HiMagnifyingGlass} from "react-icons/hi2";
import {FaBars} from "react-icons/fa6"
import HeaderItem from './HeaderItem';

function Header() {

    const menu = [
        {
            name: "Home",
            icon:HiHome
        },
        {
            name: "Library",
            icon:HiBookOpen
        },

        {
            name: "Help",
            icon:HiQuestionMarkCircle
        },
        { name: "Team",
          icon: HiUserGroup
        
        }
    ]


  return (
     // NAVIGATION BAR
    <header className='flex flex-col sm:flex-row sm:justify-between sm:items-center bg-slate-900 py-4 border-b border-b-blue-400' id='header'>
        {/* LOGO */}
        <div className='flex items-center gap-2 justify-start pl-2 xl:pl-0' id='logo'>
        <img src={logo} className='sm:pl-4 w-[80px] sm:w-[80px] object-cover'/>
        <h1 className=' text-xl sm:text-2xl text-white font-bold whitespace-nowrap'>SOCIOLOGY LIBRARY</h1>
        </div>

        {/* MENU */}
        <nav className='mr-64' id='menu'>
            <ul className='flex items-center space-x-8'>
                {menu.map((item) =>(
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
            </ul>
        </nav>

        {/* USER LOGIN */}
        <div className='hidden xl:block pr-4' id='user-login'>
            <button className='flex bg-blue-800 py-2 px-4 hover:bg-blue-500 duration-500 text-white font-semibold'>LOGIN</button>
        </div>

        {/* MOBILE MENU */}

        <div className='xl:hidden pr-2 sm:pr-4 w-full flex items-end justify-end' id='mobile-menu'>
            <FaBars className='text-white sm:flex sm:items-center text-[24px]  cursor-pointer hover:text-slate-400'/>
        </div>
    </header>
  )
}

export default Header;
