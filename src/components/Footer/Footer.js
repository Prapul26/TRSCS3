import React from 'react'
import './Footer.css'
import gplay from '../../assets/ggplay.jpg'
import { FaFacebook, FaPhone, FaPhoneAlt } from "react-icons/fa";

import { FaPhoneFlip, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import aplay from '../../assets/apple.png'
import { Link } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import { IoMagnetOutline, IoMailOutline } from 'react-icons/io5';
const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='dlc-holder'>
                <div className='download-container'>
                    <h1>Download Our App</h1>
                    <div className='store-holder' style={{display:"flex"}}>
                    <div className='playStore-container'>
                        <a href="https://play.google.com/store/apps/details?id=com.hotspot.tracs&pli=1" target="_blank" rel="noopener noreferrer"><img src="https://tracs.app/public/user/images/google-play-store.png" /></a>
                    </div>
                    <div className='appleStore-container'>
                        <a href='https://apps.apple.com/us/app/tracs-for-h7-network/id6446471421' target="_blank" rel="noopener noreferrer"><img src="https://tracs.app/public/user/images/apple-store.png" /></a>

                    </div>
                    
                    </div>
                    <div className='socialInvisible'>
                    <a href="https://www.facebook.com/h7network"><div className="facebook">
                                    {" "}
                                    <FaFacebook size={28} color='black'/>
                                  </div></a> 
                                
                                 <a href="https://www.linkedin.com/company/h7network/"><div className="LinkedIn">
                                    <FaLinkedin size={28} color="black" />
                                  </div></a> 
                    </div>
                    <div className='socilaMediaStore-container'>
                         <div className="socila-icons">
                                 <a href="https://www.facebook.com/h7network"><div className="facebook">
                                    {" "}
                                    <FaFacebook size={28} color='black'/>
                                  </div></a> 
                                
                                 <a href="https://www.linkedin.com/company/h7network/"><div className="LinkedIn">
                                    <FaLinkedin size={28} color="black" />
                                  </div></a> 
                                </div>
                    </div>
                </div>
                <div className='important-links-container'>
                    <div className='imp-links'>
                        <h1>
                            Important Links
                        </h1>
                      <Link to='/home' style={{textDecoration:"none",color:"inherit"}}> <p style={{color:"black"}}>Home</p></Link> 
                      <Link to='/pricing' style={{textDecoration:"none",color:"inherit"}}> <p style={{color:"black"}}>Pricing</p></Link> 
                      <Link to='/about_us' style={{textDecoration:"none",color:"inherit"}}><p style={{color:"black"}}>About Us</p></Link>  
                     

                    </div>
                </div>
                <div className='contact-container'>
                    <div className='contact'>
                        <h1>Contact Us</h1>
                        <div  className="conulli"style={{ display:"flex"}}>
                        <div><CiLocationOn size={20} /> </div>
                           <div style={{marginTop:"-18px"}}> <ul style={{ display: "flex", flexDirection: "column", flexWrap: "wrap",textDecoration:"none" }}>
                         <li style={{listStyle:"none"}}>4031 Colonel Glenn Hwy Suite 416</li>
                               <li style={{listStyle:"none"}}> Dayton ,OH 45431</li></ul>
                               </div>
                               
                               </div>


                        <div className="conulli" style={{ display:"flex"}}>
                            <div><IoMailOutline /></div>
                        <div style={{marginTop:"-18px"}}>   <ul><li style={{listStyle:"none"}}> support@tracs.app</li>
                        </ul>
                        </div> 
                        </div>
                        <div  className="conulli" style={{display:"flex"}}> <div style={{marginTop:"0px"}}><FaPhoneAlt /></div>
                          <div style={{marginTop:"-16px"}}> <ul>
                                <li style={{listStyle:"none"}}> 513.371.5299</li>
                            </ul></div> 
                           
                        </div>


                    </div>
                </div>

            </div>
            <div className='copyright-container'>
                <div className='tpc-container'>
                    <p> Terms and Condition /  Privact Policy  /  Contact</p>
                </div>
                <div>
                    <h3 style={{color:"white"}}>Copyright 2025 .AptTech Solutions Inc . All Rights Reserved.</h3>
                </div>

            </div>
        </div>
    )
}
export default Footer;