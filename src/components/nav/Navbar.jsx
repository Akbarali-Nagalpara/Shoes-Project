import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="brand_logo.png" alt="" />
        </div>
        <ul className='unorder'>
          <li className="list-item" href="#">MENU</li>
          <li className="list-item" href="#">LOCATION</li>
          <li className="list-item" href="#">ABOUT</li>
          <li className="list-item" href="#">CONTECT</li>
        </ul>
        <button className='login-btn'>Login</button>
      </nav>
    </div>
  );
}

export default Navbar