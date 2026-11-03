import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div>
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
          </Routes>
        </div >
      </BrowserRouter>
    </>
  )
}

export default App