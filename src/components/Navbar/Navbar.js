import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Header from '../Heaader/Header'
const Navbar = () => {
  return (
    
    <div className='Navbar-Container'>
       
      <div className='navbar-holder'>
        <img  src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png"
            style={{ height: "40px" }}/>
        <ul style={{display:"flex",listStyleType:"none"}}>
           <Link to='/home' style={{textDecoration:"none",color:"inherit"}}><li >HOME</li></Link> 
           <Link to='/about_us' style={{textDecoration:"none",color:"inherit"}}><li>ABOUT US</li></Link> 
           <Link to="/pricing" style={{textDecoration:"none",color:"inherit"}}><li>PRICING</li></Link> 
           <Link to='/network' style={{textDecoration:"none",color:"inherit"}}> <li>NETWORK 101</li></Link>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar
