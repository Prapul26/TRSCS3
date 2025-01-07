import React from 'react'
import './Navbar.css'
import Header from '../Heaader/Header'
const Navbar = () => {
  return (
    
    <div className='Navbar-Container'>
       
      <div className='navbar-holder'>
        <img  src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png"
            style={{ height: "40px" }}/>
        <ul style={{display:"flex",listStyleType:"none"}}>
            <li >HOME</li>
            <li>ABOUT US</li>
            <li>PRICING</li>
            <li>NETWORK 101</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar
