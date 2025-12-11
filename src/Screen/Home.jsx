import React from 'react'
import '../style/global.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate("/course")
  return (
    <div className="home-page">
      <div className="home-container">

        {/* Top empty bar */}
        <div className="top-bar"></div>

        {/* Main content */}
        <div className="content">

          {/* Image section */}
          <div className="image-wrapper">
            <div className="image-box">
              <div
                className="hero-image"
                style={{ backgroundImage: 'url("Home.png")' }}
              ></div>
            </div>
          </div>

          {/* Heading + subtitle */}
          <div className="text-section">
            <h1 className="title">Code Your Future</h1>
            <p className="subtitle">
              Interactive courses to build your skills, one line at a time.
            </p>
          </div>

          {/* Buttons */}
          <div className="button-section">
            <button className="primary-btn" onClick={()=>navigate("/course")} >Get Started</button>
            <button className="secondary-btn">I already have an account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
               


export default Home