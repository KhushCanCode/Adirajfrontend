import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={ <LoginPage />} />
        <Route path='/about' element={ <AboutPage /> } />
        <Route path='/profile' element={ <ProfilePage />} />
        <Route path='/contact' element={ <ContactPage />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App