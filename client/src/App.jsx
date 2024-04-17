import React from 'react'
import Auth from './pages/Auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hospitals from './pages/Hospitals'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/hospitals' element={<Hospitals />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App