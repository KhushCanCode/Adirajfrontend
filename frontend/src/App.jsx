import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import Lenis from '@studio-freight/lenis';
import Footer from './components/Footer';
import ItemPage from './pages/ItemPage';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust scrolling speed
      smooth: true, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/item' element={<ItemPage />} />
      </Routes>
      <Footer/>
      <Toaster />
    </div>
  );
}

export default App;
