import React from 'react'
import './ContactDetails.css'
import Header from '../Heaader/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { TiArrowBackOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'
const ContactDetails = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className='contactDetails-container'>
      <div style={{marginLeft:"20px"}}> <button style={{ borderRadius: "30px", border: "transparent" }}><span><Link to='/inbox'><TiArrowBackOutline color='white' size={35} /></Link></span> </button></div>
      <div style={{marginLeft:"20px"}}><h2>Contact of S Kumar Nelli</h2></div>
<div className='pic44Container'>
<div className='pic44HOlder'>
<img src='https://tracs.app/public/uploads/contact_icon.png'/>
</div>
<div><h3>santhosh Kumar</h3></div>
<div><p>santhosh@yopmail.com</p></div>
</div>
      </div>
    </div>
  )
}

export default ContactDetails
