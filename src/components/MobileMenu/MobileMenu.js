import React, { useState } from 'react'
import './MobileMenu.css'
import { RiArrowDropDownLine, RiContactsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { IoPerson, IoSettingsSharp } from 'react-icons/io5'
import { MdOutlineCardMembership, MdOutlineEmail } from 'react-icons/md'
import { TbArrowsRandom } from 'react-icons/tb'
import { FaBriefcase, FaFileSignature } from 'react-icons/fa'
import { HiInboxArrowDown } from 'react-icons/hi2'
const MobileMenu = () => {
      const [intro2, showIntro2] = useState(false);
       const [intro, showIntro] = useState(false);
    const handelIntro2 = () => {
        showIntro2(!intro2);
      };
      const handelIntro = () => {
        showIntro(!intro);
      };
  return (
    <div className='mobnav2e'>
     
      <div style={{height:"79px",background:"rgb(255, 255, 255)",width:"100%",borderBottom:"1px solid black"}}>
       <Link to='/home'> <img             src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png"
 style={{height:"55%",width:"80%",marginLeft:"10%",marginTop:"7%"}}/></Link>
      </div>

          <div className="introduction41" onClick={handelIntro2}>
            <div style={{display:"flex"}}><div style={{marginTop:"13px",marginRight:"12px"}}><IoSettingsSharp size={20} color="black"/> </div>
          <div style={{marginTop:"-4px"}}> <h2 style={{fontSize:"20px"}}>Application Setting</h2></div></div>
          <div style={{marginTop:"14px"}}><RiArrowDropDownLine color="black" size={25}/></div>
            </div>
                {
                                                intro2 && <div className="intoNav" style={{marginLeft:"7px"}}>
                                                  <Link to='/myMembership' style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex" ,marginBottom:"8px"}}><div>< MdOutlineCardMembership size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>My Membership</h3></div></Link>
                                                 <Link to='/accountSettings'  style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex",marginBottom:"8px"}}><div><IoPerson  size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>My Profile</h3></div></Link> 
                                                 <Link to='/passwordChange'style={{color:"inherit",textDecoration:"none"}} ><div style={{display:"flex",marginBottom:"8px"}}> <div><IoPerson size={20} color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>My Password</h3></div></Link> 
                                                 <Link to='/affiliation'style={{color:"inherit",textDecoration:"none"}} > <div style={{display:"flex",marginBottom:"8px"}}><div><TbArrowsRandom size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Affiliation</h3></div></Link> 
                                  
                                                </div>
                                              }
                                               <div className="introduction4" onClick={handelIntro}>
                                                          <div style={{display:"flex"}}><div style={{marginTop:"13px",marginRight:"12px"}}><FaBriefcase size={20} color="black"/> </div>
                                                        <div style={{marginTop:"-4px"}}> <h2 style={{fontSize:"20px"}}>Introduction</h2></div></div>
                                                        <div style={{marginTop:"14px"}}><RiArrowDropDownLine color="black" size={25}/></div>
                                                          </div>
                                                              {
                                                                                              intro && <div className="intoNav" style={{marginLeft:"7px"}}>
                                                                                                <Link to='/contacts' style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex" ,marginBottom:"8px"}}><div>< RiContactsFill size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Contacts</h3></div></Link>
                                                                                               <Link to='/inbox'  style={{color:"inherit",textDecoration:"none"}}><div style={{display:"flex",marginBottom:"8px"}}><div><HiInboxArrowDown  size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Messages</h3></div></Link> 
                                                                                               <Link to='/email'style={{color:"inherit",textDecoration:"none"}} ><div style={{display:"flex",marginBottom:"8px"}}> <div><MdOutlineEmail size={20} color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Template</h3></div></Link> 
                                                                                               <Link to='/signature'style={{color:"inherit",textDecoration:"none"}} > <div style={{display:"flex",marginBottom:"8px"}}><div><FaFileSignature  size={20}color="black" style={{marginRight:'7px',marginTop:'4px'}} /></div><h3 style={{color:"black",fontSize:'large'}}>Signature</h3></div></Link> 
                                                                                
                                                                                              </div>
                                                                                            }
    </div>
  )
}

export default MobileMenu
