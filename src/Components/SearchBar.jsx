import React from 'react'

class SearchBar extends React.Component {
  render(){
    return (
        <div className='w-full bg-slate-900 p-4 flex justify-center'>
          <input type='text' className='bg-slate-800 w-2/4 py-2 px-1 rounded-lg hover:foc text-white' placeholder='Search for an essay, book, etc.'/>
        </div>
      )

  }
}

export default SearchBar
