import React, { useEffect, useState } from 'react'
import Header from '../Heaader/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Help.css'
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Help = () => {
const[data ,setData]=useState("")
  useEffect(()=>{
const fetchData=async()=>{
  try{
const response=await axios.get("https://tracsdev.apttechsol.com/api/helpsection ");
setData(response.data)
  }catch(err){
    console.log(err)
  }
}
  })
  return (
    <div className="homeHolder">
      <Header />
      <Navbar />

      <div className='helpcurb1'><p style={{ color: "#007bff !important" }} className='ppffg'><Link to="/home" style={{textDecoration:"none",color:"inherit"}}>HOME</Link></p><p>{">"}</p><p style={{ marginLeft: '10px' }}>Help Center</p></div>
      <div className='helpContainer'>

        <div className='makeIntoButtonContainer'>
          <div><h5><Link to="/makeHelp" style={{textDecoration:"none",color:"inherit"}}>Make Introduction</Link></h5></div>
          <div><h5 style={{ fontWeight: '800', color: "#007bff" }}>{">"}</h5></div>
        </div>
         <div className='makeIntoButtonContainer'>
          <div><h5><Link to="/loginHelp" style={{textDecoration:"none",color:"inherit"}}>Login</Link></h5></div>
          <div><h5 style={{ fontWeight: '800', color: "#007bff" }}>{">"}</h5></div>
        </div>
         <div className='makeIntoButtonContainer' style={{marginBottom:"40px"}}>
          <div><h5><Link to="/registerHelp" style={{textDecoration:"none",color:"inherit"}}>New User Register</Link></h5></div>
          <div><h5 style={{ fontWeight: '800', color: "#007bff" }}>{">"}</h5></div>
        </div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default Help
