import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
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