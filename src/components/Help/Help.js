import React, { useEffect, useState } from 'react'
import Header from '../Heaader/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Help.css'
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Help = () => {
const[data ,setData]=useState([])
  useEffect(()=>{
const fetchData=async()=>{
  try{
const response=await axios.get("https://tracsdev.apttechsol.com/api/helpsection ");
setData(response.data.blogs.data || [])
  }catch(err){
    console.log(err)
  }
}
fetchData();  },)
  return (
    <div className="homeHolder">
      <Header />
      <Navbar />

      <div className='helpcurb1'><p style={{ color: "#007bff !important" }} className='ppffg'></p><p>{">"}</p><p style={{ marginLeft: '10px' }}>Help</p></div>
      <div className='helpContainer'>
 {data.map((help, index) => (
         <Link to={`/help/${help.id}`} style={{ textDecoration: "none", color: "inherit" }}> <div className='makeIntoButtonContainer' key={help.id}>
            <div>
              <h5>
                
                  {help.title}
               
              </h5>
            </div>
            <div>
             
              <h5 style={{ fontWeight: '800', color: "#007bff" }}>{">"}</h5>
            </div>
          </div> </Link>
        ))}
       
        
        <div></div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default Help
