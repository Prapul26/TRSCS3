import React, { useEffect, useState } from 'react'
import "./HelpDescription2.css";
import MobileMenu from '../MobileMenu/MobileMenu';
import UserHeader from '../UserHeader';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import SideNav from '../../UserNavbar/SideNav';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import axios from 'axios';
import { IoIosInformationCircle } from 'react-icons/io';
const HelpDescription2 = () => {
    const {id}=useParams();
    const navigate=useNavigate();
       const [showSidebar, setShowSidebar] = useState(false);
           const [helpPopup, setHelpPopup] = useState(true);
              const [data, setData] = useState([]);
              const [subtitile,setSub]=useState("")
                 const handleclicko=()=>{
        setHelpPopup(true);
    }
              const handlePopup = () => {
                  setHelpPopup(false);
              }
           const showMobnav = () => {
             setShowSidebar(prev => !prev);
         
           };
             const[helpTitle,setTitle]=useState("");
   useEffect(()=>{
    const fetchData=async()=>{
      try{
const response=await axios.get(`https://tracsdev.apttechsol.com/api/helpsection-description/${id}`)
setData(response.data?.title_info.description);
setTitle(response.data?.title_info.seo_title);
setSub(response.data?.title_info.helpsection.title)

      }catch(err){
        console.log(err)
      }
    }
  fetchData();},[id]);

  const adjustInternalHtml=(html)=>{
    const container=document.createElement("div");
    container.innerHTML=html;
    return container.innerHTML;}
    const handleNavigate=()=>{
navigate(-1)
    }
  return (
    <div>
       <div className='mobMenuaa'>
                    <div className='mobMenu33'>
                        {showSidebar && (<MobileMenu />)}
                    </div>
                    <div>
                        <UserHeader />

                        <div className="SPPP">
                            <div className="usernav">
                                <SideNav />
                            </div>
                            <div className="SPP"><MobileNavbar showMobnav={showMobnav} />
                                <div className="d-header">
                                     <div style={{display:"flex"}}><h2> App Help</h2>
                                                                    <div style={{marginTop:"17px",marginLeft:"10px"}} onClick={handleclicko}><IoIosInformationCircle size={15} /></div>
                                                                                                    </div>

                                </div>
                            {
                                helpPopup && (<div className='backgroundPop'>
                                    <div className='containerHelp'>
                                        <div className='div1'>
                                            <div><h5>Help Section</h5></div>
                                            
                                            <div onClick={handlePopup} style={{ paddingRight: "10px" }}><RxCross2 /> </div>

                                        </div>
                                                <div className='helpcurb1'><p style={{ color: "#007bff !important" }} className='ppffg'></p><p className='helppe'><Link to='/help2'style={{ textDecoration: "none", color: "inherit" }}>App Help</Link></p><p>{" >"}</p><p onClick={handleNavigate}>{subtitile}</p><p>{" >"}</p><p style={{ marginLeft: '10px' }}>{helpTitle}</p></div>
                                        
                                        <div className='holderHelp2' >
                                           <div className="wdwokm" dangerouslySetInnerHTML={{__html:adjustInternalHtml(data)}} ></div>
                                        </div>
                                    </div>

                                </div>)
                            }
                            </div>
                        </div>
                    </div>
                    </div>
    </div>
  )
}

export default HelpDescription2
