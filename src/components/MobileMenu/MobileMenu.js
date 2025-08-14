import React, { useState } from 'react'
import './MobileMenu.css'
import { RiArrowDropDownLine, RiContactsFill, RiFeedbackFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { IoPerson, IoSettingsSharp } from 'react-icons/io5'
import { MdOutlineCardMembership, MdOutlineCreditCard, MdOutlineEmail } from 'react-icons/md'
import { TbArrowsRandom } from 'react-icons/tb'
import { FaBriefcase, FaFileSignature, FaRegComment, FaRegFile, FaUnlockAlt } from 'react-icons/fa'
import { HiInboxArrowDown } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';

const MobileMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [intro2, showIntro2] = useState(true);
  const [intro, showIntro] = useState(true);
    const [intro3, showIntro3] = useState(true);

  const handelIntro2 = () => {
    showIntro2(!intro2);
  };
  const handelIntro = () => {
    showIntro(!intro);
  };
  const handelIntro3 = () => {
    showIntro3(!intro3);
  };
  
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className='mobnav2e'>

      <div style={{ height: "79px", background: "rgb(255, 255, 255)", width: "100%", borderBottom: "1px solid black" }}>
        <Link to='/home'> <img src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png"
          style={{ height: "55%", width: "80%", marginLeft: "10%", marginTop: "7%" }} /></Link>
      </div>

      <div style={{borderBottom:"1px solid black"}}>
      <div className={`introduction41 ${(
        currentPath === "/myMembership" ||
        currentPath === "/accountSettings" ||
        currentPath === "/affiliation" ||
        currentPath === "/passwordChange"
      ) ? "" : ""}`} onClick={handelIntro2}>
        <div style={{ display: "flex" }}><div style={{ marginTop: "16px", marginRight: "12px" }}><IoSettingsSharp size={20} /> </div>
          <div style={{ marginTop: "-4px" }}> <h2 style={{ fontSize: "20px", marginTop: "18px" }}>Application Setting</h2></div></div>
        <div style={{ marginTop: "14px" }}><RiArrowDropDownLine size={25} /></div>
      </div>     
      {
        intro2 && <div className="intoNav" style={{ marginLeft: "7px" }}>
          <Link to='/myMembership' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/myMembership" ? "active" : ""}`}><div style={{ display: "flex", marginBottom: "8px" }} ><div>< MdOutlineCardMembership size={20} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>My Membership</h3></div></Link>
          <Link to='/accountSettings' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/accountSettings" ? "active" : ""}`} ><div style={{ display: "flex", marginBottom: "8px" }}  ><div><IoPerson size={17} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>Dashboard</h3></div></Link>
          <Link to='/passwordChange' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/passwordChange" ? "active" : ""}`} ><div style={{ display: "flex", marginBottom: "8px" }}  > <div><FaUnlockAlt size={17} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>Change Password</h3></div></Link>
          <Link to='/affiliation' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/affiliation" ? "active" : ""}`} > <div style={{ display: "flex", marginBottom: "8px" }}  ><div><TbArrowsRandom size={17} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>Affiliation</h3></div></Link>

        </div>
      }
     
      </div> 

      <div style={{borderBottom:"1px solid black"}}>
      <div className={`introduction4 ${(
        currentPath === "/contacts" ||
        currentPath === "/inbox" ||
        currentPath === "/email" ||
        currentPath === "/signature"
      ) ? "" : ""}`} onClick={handelIntro}>
        <div style={{ display: "flex" }}><div style={{ marginTop: "13px", marginRight: "12px" }}><FaBriefcase size={20} /> </div>
          <div style={{ marginTop: "-4px" }}> <h2 style={{ fontSize: "20px" }}>Introduction</h2></div></div>
        <div style={{ marginTop: "10px" }}><RiArrowDropDownLine size={25} /></div>
      </div>
      {
        intro && <div className="intoNav" style={{ marginLeft: "7px" }}>
          <Link to='/contacts' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/contacts" ? "active" : ""}`}><div style={{ display: "flex", marginBottom: "8px" }}><div>< RiContactsFill size={17} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>My Contacts</h3></div></Link>
          <Link to='/inbox' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/inbox" ? "active" : ""}`}><div style={{ display: "flex", marginBottom: "8px" }}><div><HiInboxArrowDown size={17} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>Introduction Messages</h3></div></Link>
          <Link to='/email' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/email" ? "active" : ""}`}><div style={{ display: "flex", marginBottom: "8px" }}> <div><MdOutlineEmail size={17} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>Email Template</h3></div></Link>
          <Link to='/signature' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/signature" ? "active" : ""}`}> <div style={{ display: "flex", marginBottom: "8px" }}><div><FaFileSignature size={17} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>Email Signature</h3></div></Link>

        </div>
      }
      
      </div>
      
 <div style={{borderBottom:"1px solid black"}}>
      <div className={`introduction4 ${(
        currentPath === "" ||
        currentPath === "" ||
        currentPath === "" ||
        currentPath === ""
      ) ? "" : ""}`} onClick={handelIntro3}>
        <div style={{ display: "flex" }}><div style={{ marginTop: "13px", marginRight: "12px" }}><MdOutlineCreditCard size={20} /> </div>
          <div style={{ marginTop: "-4px" }}> <h2 style={{ fontSize: "20px" }}>Resources</h2></div></div>
        <div style={{ marginTop: "10px" }}><RiArrowDropDownLine size={25} /></div>
      </div>
      {
        intro3 && <div className="intoNav" style={{ marginLeft: "7px" }}>
          <Link to='/help' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/help" ? "active" : ""}`}><div style={{ display: "flex", marginBottom: "8px" }}><div>< FaRegFile size={17} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>App Help</h3></div></Link>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfqdWj3Mb6Zkzl1MLxgcjAlme37X1vxgeNwkosWLf-TDN3Hag/viewform?vc=0&c=0&w=1&flr=0' target='_blank' style={{ color: "inherit", textDecoration: "none" }} className={`menu-item ${currentPath === "/email" ? "active" : ""}`}><div style={{ display: "flex", marginBottom: "8px" }}> <div><RiFeedbackFill size={17} style={{ marginRight: '7px', marginTop: '1px' }} /></div><h3 style={{ fontSize: 'large' }}>Feedback</h3></div></a>
        

        </div>
      }
      
      </div>
      

     <Link to="/contactUs" style={{ color: "inherit", textDecoration: "none" }} ><div className={`constactUS ${currentPath === "/contactUs" ? "active" : ""}`}>
<div style={{marginTop:"16px",marginRight:"10px",marginLeft:"10px"}}><FaRegComment /></div>
<div ><h2>Contact us</h2></div>
      </div></Link> 
   
    </div>
  )
}

export default MobileMenu
