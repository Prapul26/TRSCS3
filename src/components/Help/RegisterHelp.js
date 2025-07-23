import React, { useEffect, useState } from 'react'
import "./RegisterHelp.css"
import Header from '../Heaader/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const RegisterHelp = () => {
  const {id}=useParams();
  const [data,setData]=useState("");
  const[helpTitle,setHelpTitle]=useState("")
  const[helpTitle2,setHelpTitle2]=useState("")
  const navigate=useNavigate();
  useEffect(()=>{
    const fetchData=async()=>{
      try{
const response=await axios.get(`https://tracsdev.apttechsol.com/api/helpsection-description/${id}`);
setHelpTitle(response.data.title_info?.helpsection)
setHelpTitle2(response.data.title_info?.helpsectionsubtitlename)
setData(response.data?.title_info)
      }catch(err){
console.log(err)
      }
    }
  fetchData();},[id]);
  const stripHtmlTags = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};
const adjustImageWidth = (html) => {
  const container = document.createElement("div");
  container.innerHTML = html;

  const images = container.getElementsByTagName("img");
  for (let img of images) {
    img.classList.add("responsive-image"); // Add custom class
              // Default width
    img.style.height = "auto";             // Maintain aspect ratio
  }

  return container.innerHTML;
};



  return (
    <div>
      <Header/>
      <Navbar />
       <div className='helpcurb1'><p style={{ color: "#007bff !important" }} className='ppffg'><Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>HOME</Link></p><p>{">"}</p><p className='helppe'><Link to='/help'style={{ textDecoration: "none", color: "inherit" }}>Help</Link></p><p>{">"}</p><p style={{ marginLeft: '10px' }}className='ppffg' onClick={()=>navigate(-1)} >{helpTitle.title}</p><p>{">"}</p><p>{helpTitle2.title}</p></div>
                       <div className='makeIntroHelp' style={{border:"transparent "}}>
                    <h1>{helpTitle2.title}</h1>
<div
  className="imgContainer"
  dangerouslySetInnerHTML={{ __html: adjustImageWidth(data.description) }}
/>

                   <div>

                   </div>
                </div>
    
          <div>
    
          </div>
      <Footer/>
     
    </div>
  )
}

export default RegisterHelp
