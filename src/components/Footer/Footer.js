import React from 'react'
import './Footer.css'
import gplay from '../../assets/ggplay.jpg'
import { FaFacebook } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import aplay from '../../assets/apple.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='dlc-holder'>
                <div className='download-container'>
                    <h1>Download Our App</h1>
                    <div className='playStore-container'>
                        <a href="https://play.google.com/store/apps/details?id=com.hotspot.tracs&pli=1" target="_blank" rel="noopener noreferrer"><img src={gplay} /></a>
                    </div>
                    <div className='appleStore-container'>
                        <a href='https://apps.apple.com/us/app/tracs-for-h7-network/id6446471421' target="_blank" rel="noopener noreferrer"><img src={aplay} /></a>

                    </div>
                    <div className='socilaMediaStore-container'>
                         <div className="socila-icons">
                                 <a href="https://www.facebook.com/h7network"><div className="facebook">
                                    {" "}
                                    <FaFacebook size={28} />
                                  </div></a> 
                                 <a href="https://twitter.com"><div className="x">
                                    {" "}
                                    <FaSquareXTwitter size={28} />
                                  </div></a> 
                                 <a href="https://www.linkedin.com/company/h7network/"><div className="LinkedIn">
                                    <FaLinkedin size={28} />
                                  </div></a> 
                                </div>
                    </div>
                </div>
                <div className='important-links-container'>
                    <div className='imp-links'>
                        <h1>
                            Important Links
                        </h1>
                      <Link to='/home' style={{textDecoration:"none",color:"inherit"}}> <p>Home</p></Link> 
                      <Link to='/pricing' style={{textDecoration:"none",color:"inherit"}}> <p>Pricing</p></Link> 
                      <Link to='/aboutUs' style={{textDecoration:"none",color:"inherit"}}><p>About Us</p></Link>  
                      <Link to='/blog' style={{textDecoration:"none",color:"inherit"}}> <p>Blog</p></Link>

                    </div>
                </div>
                <div className='contact-container'>
                    <div className='contact'>
                        <h1>Contact Us</h1>
                        <div style={{ borderBottom: "1px solid #9a9a9a " }}><ul style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                            <li >4031 Colonel Glenn Hwy Suite 416,Dayton ,OH 45431</li></ul></div>


                        <div style={{ borderBottom: "1px solid #9a9a9a " }}><ul><li >support@tracs.app</li>
                        </ul></div>
                        <div >
                            <ul>
                                <li>513.371.5299</li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>
            <div className='copyright-container'>
                <div className='tpc-container'>
                    <p> Terms and Condition /  Privact Policy  /  Contact</p>
                </div>
                <div>
                    <h3>Copyright 2025 .AptTech Solutions Inc . All Rights Reserved.</h3>
                </div>

            </div>
        </div>
    )
}
export default Footer;