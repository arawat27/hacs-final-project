import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/About');
  }

  const handleContactClick = () => {
    navigate('/Contact')
  }

  return (
    <header className="header">
      <a href="/" className="logo" >Animal Rescue</a>

      <nav className="navbar">
        {/* Tabs on the Navbar */}
        <a href="/Home" >Home</a>
        <a href="/About" onClick={handleAboutClick}>About</a>
        <a href="/Contact" onClick={handleContactClick}>Contact</a>
      </nav>
    </header>
  )
}

export default Navbar
