import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Nature.css'
import video from './naturehacs.mp4'


const Nature = () => {
  const navigate = useNavigate();

  const handleEmergencyClick = () => {
    navigate('/form');
  }

  return (
    <div className = "nature">
        <video src={video} autoPlay muted loop className="naturehacs" />
        <div className = "nature-overlay"></div>

        <div className= "home-text">
          <h1 className="nature-header">Animal Rescue Networking</h1>
            <div className="home-btn" onClick={handleEmergencyClick}>
              Emergency
            </div>
          <p>Created By Aarohi Rawat and Ethan Nguyen</p>
        </div>

        
    </div>
  )
}

export default Nature;
