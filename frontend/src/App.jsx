import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import Introduction from './Components/Introduction'
import Library from './Components/Library'
import Footer from './Components/Footer'

class App extends React.Component {

  state = {
    books: [
      {
        "id": 1,
        "name": "Anthony Giddens' Sociology",
        "description": "Anthony Giddens' Sociology sixth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 2,
        "name": "Sociological Theory",
        "description": "Sociological Theory by G. Ritzer and J. Stepnisky ninth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 3,
        "name": "The Presentation of Self in Everyday Life",
        "description": "The Presentation of Self in Everyday Life by Erving Goffman",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 4,
        "name": "Social Psychology",
        "description": "Social Psychology by Elliot Aronson",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 5,
        "name": "Anthony Giddens' Sociology",
        "description": "Anthony Giddens' Sociology sixth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 6,
        "name": "Anthony Giddens' Sociology",
        "description": "Anthony Giddens' Sociology sixth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 7,
        "name": "Anthony Giddens' Sociology",
        "description": "Anthony Giddens' Sociology sixth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 8,
        "name": "Anthony Giddens' Sociology",
        "description": "Anthony Giddens' Sociology sixth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 9,
        "name": "Anthony Giddens' Sociology",
        "description": "Anthony Giddens' Sociology sixth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 10,
        "name": "Anthony Giddens' Sociology",
        "description": "Anthony Giddens' Sociology sixth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 11,
        "name": "Anthony Giddens' Sociology",
        "description": "Anthony Giddens' Sociology sixth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      },
      {
        "id": 12,
        "name": "Anthony Giddens' Sociology",
        "description": "Anthony Giddens' Sociology sixth edition.",
        "imageURL" : "https://i.hizliresim.com/6sofgxh.png"
      }
    ],

    searchQuery: ""
  }

  searchBook = (event) => {
    this.setState({searchQuery: event.target.value})
  }


  render(){

    let filteredBooks = this.state.books.filter(
      (book) => {
        return book.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    )

    return (

      <div>
          <Header/>
          <main>
            <SearchBar searchBookProp={this.searchBook}/>
            <Introduction/>
            <Library books={filteredBooks}/>
          </main>
          <Footer/>
          
      </div>
      )
  }

  }


export default App
