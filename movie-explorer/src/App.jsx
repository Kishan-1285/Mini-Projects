import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorites from './Components/Favorites'
import SearchBar from './Components/SearchBar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App