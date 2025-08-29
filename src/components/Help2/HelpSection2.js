import React, { useEffect, useState } from 'react'
import './HelpSection2.css'
import MobileMenu from '../MobileMenu/MobileMenu';
import UserHeader from '../UserHeader';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import SideNav from '../../UserNavbar/SideNav';
import { Link, useParams } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import axios from 'axios';
import { IoIosInformationCircle } from 'react-icons/io';
const HelpSection2 = () => {
    const {id}=useParams();
     const [showSidebar, setShowSidebar] = useState(false);
         const [helpPopup, setHelpPopup] = useState(true);
            const [data, setData] = useState([]);
            const[subtitile,setSub]=useState("")
            const handlePopup = () => {
                setHelpPopup(false);
            }
               const handleclicko=()=>{
        setHelpPopup(true);
    }
         const showMobnav = () => {
           setShowSidebar(prev => !prev);
       
         };
         
         
         useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://tracsdev.apttechsol.com/api/helpsection/${id}`);
                setData(response.data.subtitles || []);
                setSub(response.data.title_info.helpsection.title)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    },)
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
                                    <div></div>

                                </div>
                            {
                                helpPopup && (<div className='backgroundPop'>
                                    <div className='containerHelp'>
                                        <div className='div1'>
                                            <div><h5>Help Section</h5></div>
                                            <div onClick={handlePopup} style={{ paddingRight: "10px" }}><RxCross2 /> </div>
                                        </div>
                                                                                        <div className='helpcurb1'><p style={{ color: "#007bff !important" }} className='ppffg'></p><p className='helppe'><Link to='/help2'style={{ textDecoration: "none", color: "inherit" }}>App Help</Link></p><p>{" >"}</p><p >{subtitile}</p></div>
                                        
                                        <div className='holderHelp'>
                                            {data.map((help,index)=>(
                                           <Link style={{textDecoration:"none",color:"inherit"}} to={`/helpDescription2/${help.id}`}> <div className='help2oo'>
                                                <div><strong>{help.title}</strong></div>
                                                <div><strong><MdKeyboardArrowRight /></strong></div>
                                            </div></Link>))}
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

export default HelpSection2
