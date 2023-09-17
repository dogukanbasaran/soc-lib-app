import React from 'react'
import bookImage from '../assets/Images/book-image/anthony-giddens-sociology-6th.png'

const Library = (props) => {
        return (
            <div className='text-white bg-black grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3 p-10' id='library'>
                {/* Book Cards */}

                {props.books.map((book) => (
                        <div className='max-w-lg sm:max-w-md lg:max-w-sm overflow-hidden' key={book.id}>
                            <img src={book.imageURL} alt='' className='w-full h-auto max-h-[400px]'/>
                            <div className='p-2 bg-slate-900 h-[100px]'>
                                <h3 className='text-[18px] font-semibold flex justify-center'>{book.name}</h3>
                                <p className='text-gray-400 mt-2 flex justify-center text-[14px]'>{book.description}</p>
                            </div>
                            <div className='p-3  bg-slate-900'>
                                <button className='bg-blue-800 py-2 px-4 hover:bg-blue-500 duration-500 text-white font-semibold w-full'>Full Reading</button>
                            </div>
                        </div>
                ))}
                  
            </div>
          )
    
}

export default Library;
