import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Header from '../Heaader/Header'
const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  return (
    
    <div className='Navbar-Container'>
       
      <div className='navbar-holder'onMouseLeave={() => setDropdownVisible(false)}>
       <Link to="/"> <img  src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png"
            style={{ height: "50px" }}/></Link>
        <ul style={{display:"flex",listStyleType:"none"}} >
           <Link to='/home' style={{textDecoration:"none",color:"inherit"}}><li >HOME</li></Link> 
           <li
            onMouseEnter={()=>setDropdownVisible(true)} 
           
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            ABOUT US
            {isDropdownVisible && (
              <ul className='dropdown-menu23'   onMouseEnter={()=>setDropdownVisible(true)} >
                <li><Link to='/about_us' style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></li>
                <li><Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></li>
                <li><Link to='/partner' style={{ textDecoration: 'none', color: 'inherit' }}>Partners</Link></li>
              </ul>
            )}
          </li>
           <Link to="/pricing" style={{textDecoration:"none",color:"inherit"}}><li>PRICING</li></Link> 
           <Link to='/network' style={{textDecoration:"none",color:"inherit"}}> <li>NETWORK 101</li></Link>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar
