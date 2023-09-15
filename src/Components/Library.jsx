import React from 'react'
import bookImage from '../assets/Images/book-image/anthony-giddens-sociology-6th.png'

class Library extends React.Component {
    render(){
        return (
            <div className='text-white bg-black p-10 flex space-x-4'>
                {/* Book Cards */}

                <div className='border max-w-sm rounded-lg overflow-hidden'>
                    <img src={bookImage} alt='' className='w-full h-auto'/>
                    <div className='p-2 bg-slate-900'>
                        <h3 className='text-xl font-semibold flex justify-center'>Sociology</h3>
                        <p className='text-gray-400 mt-2 flex justify-center'>Anthony Gidden's Sociology sixth edition.</p>
                    </div>
                    <div className='p-3 border-t bg-slate-900'>
                        <button className='bg-blue-800 rounded-md py-2 px-4 hover:bg-blue-500 duration-500 text-white font-semibold w-full'>Full Reading</button>
                    </div>

                </div>

                <div className='border max-w-sm rounded-lg overflow-hidden'>
                    <img src={bookImage} alt='' className='w-full h-auto'/>
                    <div className='p-2 bg-slate-900'>
                        <h3 className='text-xl font-semibold flex justify-center'>Sociology</h3>
                        <p className='text-gray-400 mt-2 flex justify-center'>Anthony Gidden's Sociology sixth edition.</p>
                    </div>
                    <div className='p-3 border-t bg-slate-900'>
                        <button className='bg-blue-800 rounded-md py-2 px-4 hover:bg-blue-500 duration-500 text-white font-semibold w-full'>Full Reading</button>
                    </div>

                </div>

                <div className='border max-w-sm rounded-lg overflow-hidden'>
                    <img src={bookImage} alt='' className='w-full h-auto'/>
                    <div className='p-2 bg-slate-900'>
                        <h3 className='text-xl font-semibold flex justify-center'>Sociology</h3>
                        <p className='text-gray-400 mt-2 flex justify-center'>Anthony Gidden's Sociology sixth edition.</p>
                    </div>
                    <div className='p-3 border-t bg-slate-900'>
                        <button className='bg-blue-800 rounded-md py-2 px-4 hover:bg-blue-500 duration-500 text-white font-semibold w-full'>Full Reading</button>
                    </div>

                </div>
                
                <div className='border max-w-sm rounded-lg overflow-hidden'>
                    <img src={bookImage} alt='' className='w-full h-auto'/>
                    <div className='p-2 bg-slate-900'>
                        <h3 className='text-xl font-semibold flex justify-center'>Sociology</h3>
                        <p className='text-gray-400 mt-2 flex justify-center'>Anthony Gidden's Sociology sixth edition.</p>
                    </div>
                    <div className='p-3 border-t bg-slate-900'>
                        <button className='bg-blue-800 rounded-md py-2 px-4 hover:bg-blue-500 duration-500 text-white font-semibold w-full'>Full Reading</button>
                    </div>

                </div>
                     
            </div>
          )
    }
}

export default Library;