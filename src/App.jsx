import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'

function App() {
 
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App
