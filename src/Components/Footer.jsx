import React from 'react'
import logo from '../assets/Images/logo.png'
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='h-48 bg-gradient-to-t from-slate-900 to-black px-40'>
       <div className='container flex flex-col xl:flex-row '>
        {/* LEFT */}
        <div className='basis-1/3 flex pl-10 pt-2'>
            <a href="#" className='flex hover:scale-110 duration-1000'>
            <img src={logo} className='w-16 h-16'/>
            <h1 className='pl-2 pt-3 text-xl text-white font-bold whitespace-nowrap'>SOCIOLOGY LIBRARY</h1>
            </a>
        </div>
        {/* MIDDLE */}
        <div className='basis-1/3  flex justify-center pt-3'>
            <ul className='px-4'>
                <li className='text-white hover:text-slate-400 font-semibold cursor-pointer'>Home</li>
                <li className='text-white hover:text-slate-400 font-semibold cursor-pointer'>Library</li>
                <li className='text-white hover:text-slate-400 font-semibold cursor-pointer'>Help</li>
                <li className='text-white hover:text-slate-400 font-semibold cursor-pointer'>Team</li>
            </ul>
        </div>
        {/* RIGHT */}
        <div className='basis-1/3 flex space-x-1 justify-end pr-10 pt-3'>
            <a href="https://www.instagram.com/dogukanbasarannn/"><FaInstagram className='text-white h-6 w-6 hover:text-slate-400'/></a>
            <a href="https://www.instagram.com/dogukanbasarannn/"><FaXTwitter className='text-white h-6 w-6 hover:text-slate-400'/></a>
            <a href="https://www.instagram.com/dogukanbasarannn/"><FaLinkedin className='text-white h-6 w-6 hover:text-slate-400'/></a>
            <a href="https://github.com/dogukanbasaran"><FaGithub className='text-white h-6 w-6 hover:text-slate-400'/></a>

        </div>

       </div>
       <div className='flex justify-center items-center pt-10'>
        <p className='text-white font-semibold'>2023 Dogukan Basaran No &copy; Copyright</p>
       </div>
    </footer>
  )
}

export default Footer
