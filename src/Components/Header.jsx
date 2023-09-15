import React from 'react'
import logo from '../assets/Images/logo.png'
import avatar from '../assets/Images/avatar.jpg'
import { HiHome, HiPlus, HiStar, HiQuestionMarkCircle, HiUserGroup, HiBookOpen} from "react-icons/hi";
import { HiMagnifyingGlass} from "react-icons/hi2";
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
    <div className='flex justify-between items-center bg-slate-900 py-4' id='navigation'>
        {/* LOGO */}
        <div className='flex items-center gap-2 ' id='logo'>
        <img src={logo} className='pl-4 w-[80px] object-cover'/>
        <h1 className=' text-2xl text-white font-bold'>SOCIOLOGY LIBRARY</h1>
        </div>

        {/* MENU */}
        <div className='flex items-center space-x-8  mr-64' id='menu'>
            {menu.map((item) =>(
                <HeaderItem name={item.name} Icon={item.icon}/>
            ))}
        </div>

        {/* USER LOGIN */}
        <div className='pr-4' id='user-login'>
            <button className='flex bg-blue-800 py-2 px-4 hover:bg-blue-500 duration-500 text-white font-semibold rounded-md'>LOGIN</button>
        </div>
    </div>
  )
}

export default Header;
