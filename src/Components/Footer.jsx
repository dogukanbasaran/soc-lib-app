import React from 'react'
import logo from '../assets/Images/logo.png'
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='h-96 lg:h-60 xl:h-48 bg-gradient-to-t from-slate-900 to-black px-40 border-t border-t-blue-400'>
       <div className='container flex flex-col justify-end lg:flex-row mt-3'>
        {/* LEFT */}
        <div className='basis-1/3 flex pr-20 sm:pr-0 lg:pl-10 pt-2 justify-center'>
            <a href="#" className='flex hover:scale-110 duration-1000'>
            <img src={logo} className='w-14 lg:h-14 xl:w-16 xl:h-16'/>
            <h1 className='pl-2 pt-3 xl:text-xl text-white font-bold whitespace-nowrap'>SOCIOLOGY LIBRARY</h1>
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
        <div className='basis-1/3 flex space-x-1 lg:justify-end xl:pr-10 pt-10 lg:pt-3 justify-center'>
            <a href="https://www.instagram.com/dogukanbasarannn/"><FaInstagram className='text-white h-6 w-6 hover:text-slate-400'/></a>
            <a href="https://www.instagram.com/dogukanbasarannn/"><FaXTwitter className='text-white h-6 w-6 hover:text-slate-400'/></a>
            <a href="https://www.instagram.com/dogukanbasarannn/"><FaLinkedin className='text-white h-6 w-6 hover:text-slate-400'/></a>
            <a href="https://github.com/dogukanbasaran"><FaGithub className='text-white h-6 w-6 hover:text-slate-400'/></a>

        </div>

       </div>
       <div className='flex justify-center items-center pt-10'>
        <p className='text-white font-semibold whitespace-nowrap'>2023 Dogukan Basaran No &copy; Copyright</p>
       </div>
    </footer>
  )
}

export default Footer
