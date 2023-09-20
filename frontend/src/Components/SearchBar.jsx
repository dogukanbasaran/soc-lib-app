import React from 'react'

class SearchBar extends React.Component {


  handleFormSubmit = (event) => {

    event.preventDefault();

  }

  render(){
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className='w-full bg-slate-900 p-4 flex justify-center' id='search-bar'>
          <input onChange={this.props.searchBookProp} type='text' className='bg-slate-800 w-3/4 sm:w-2/4 py-1 lg:py-2 px-1 rounded-lg hover:foc text-white' placeholder='Search for an essay, book, etc.'/>
        </div>
      </form>
      )

  }
}

export default SearchBar
