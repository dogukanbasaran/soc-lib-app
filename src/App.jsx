import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import Introduction from './Components/Introduction'
import Library from './Components/Library'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
        <Header/>
        <hr/>
        <main>
          <SearchBar/>
          <Introduction/>
          <Library/>
        </main>
        <Footer/>
        
    </div>
    )
}

export default App
