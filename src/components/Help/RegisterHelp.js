import React from 'react'
import "./RegisterHelp.css"
import Header from '../Heaader/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
const RegisterHelp = () => {
  return (
    <div>
      <Header/>
      <Navbar />
       <div className='helpcurb1'><p style={{ color: "#007bff !important" }} className='ppffg'><Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>HOME</Link></p><p>{">"}</p><p className='helppe'><Link to='/help'style={{ textDecoration: "none", color: "inherit" }}>Help</Link></p><p>{">"}</p><p style={{ marginLeft: '10px' }}>New User Registration</p></div>
                       <div className='makeIntroHelp'>
                    <h2>New User Registration</h2>
                 
                    <div style={{marginBottom:"30px"}} className='selectM'>
                        <div><h5>Registration</h5></div>
                        <div><h5 style={{ fontWeight: '800', color: "#007bff" }}>{">"}</h5></div>
                    </div>
                </div>
    
          <div>
    
          </div>
      <Footer/>
     
    </div>
  )
}

export default RegisterHelp
