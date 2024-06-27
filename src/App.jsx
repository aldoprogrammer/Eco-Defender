import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Swipe from './pages/Swipe';
import WizardChat from './pages/WizardChat';
import Map from './pages/Map';

function App() {

 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/swipe" element={<Swipe />} />
      <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  )
}

export default App
