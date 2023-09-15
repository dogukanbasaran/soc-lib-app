import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import Introduction from './Components/Introduction'
import Library from './Components/Library'

function App() {

  return (
    <div>
        <Header/>
        <hr/>
        <SearchBar/>
        <Introduction/>
        <Library/>
        
        
    </div>
    )
}

export default App
