import React, { useEffect, useState } from 'react'
import Header from '../Heaader/Header'
import Navbar from '../Navbar/Navbar'
import './WhatIsMakeInro.css';
import Footer from '../Footer/Footer'
import { data } from 'react-router-dom'
import axios from 'axios'

const WhatIsMakeInro = () => {
    const[data,setData]=useState('')
    useEffect(()=>{
        const fetchData=async()=>{
            try{
const response=await axios.get("https://tracsdev.apttechsol.com/api/page/Make-introduction");
setData(response.data.data.page );
console.log(response.data.data?.page)
            }catch(err){
                console.log(err)
            }
        }
    fetchData()},[]);
const adjustInternalHtml = (html) => {
  const container = document.createElement("div");
  container.innerHTML = html;

  // Find all images and wrap them in a link to "/register"
  const images = container.querySelectorAll("img");
  images.forEach((img) => {
    const link = document.createElement("a");
    link.href = "/register";
    img.parentNode.insertBefore(link, img);
    link.appendChild(img);
  });

  return container.innerHTML;
};

  return (
    
    <div>
      <Header />
      <Navbar />
      <div className="ph1">
          <div className="p1h1">
            <h1 style={{fontSize:'35px'}}>{data.page_name}</h1>
          </div>
        </div>
      <div className='whatmi-container' >
<div  dangerouslySetInnerHTML={{ __html: adjustInternalHtml(data.description)}}></div>
      </div>
      <Footer />
    </div>
  )
}

export default WhatIsMakeInro
