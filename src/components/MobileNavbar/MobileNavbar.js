import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import "./MobileNavbar.css";
import { HiInboxArrowDown } from "react-icons/hi2";
import { MdAccountCircle, MdOutlineEmail } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaHouse } from "react-icons/fa6";
import { RiArrowDropDownLine, RiContactsFill, RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineCardMembership } from "react-icons/md";
import { IoArrowDown, IoArrowDownCircle, IoPerson, IoSettingsSharp } from "react-icons/io5";
import { TbArrowsRandom } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowAltCircleUp, FaArrowCircleDown, FaArrowCircleRight } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const MobileNavbar = ({showMobnav}) => {
  const [mobnav, setMobnav] = useState(false);
   const [intro, showIntro] = useState(false);
   const [intro2, showIntro2] = useState(false);
     const [menuDrop, setMenuDrop]=useState(false);
     const handelMenuDrop=()=>{
   setMenuDrop(!menuDrop)
     }

  const cancelMenu = () => [setMobnav(false)];
  const handelIntro = () => {
    showIntro(!intro);
  };
  const handelIntro2 = () => {
    showIntro2(!intro2);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Check if user is logged in by checking for token in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };
  return (
    <div style={{display:"flex"}}>
      <div>
     
      </div>
    <div className={`mobnav ${showMobnav ?"move":""}`}>
      <div style={{display:"flex"}}><div className="menuButton" onClick={showMobnav}>
        {" "}
        <LuMenu size={30} />
      </div>
      <Link to="/home" style={{color:"inherit"}}><div style={{marginTop:"17px",marginRight:"70px"}}>
        <FaHouse size={30 }/></div></Link>
        </div>
      <div style={{display:"flex"}}>
        <div className={`mobnavPic ${mobnav ?"hidden":""}`}><img src="https://cdn.motiondesign.school/uploads/2021/05/radik.jpg"/></div>
        
        <div className={`profile-name ${mobnav ?"hidden":""}`} onClick={handelMenuDrop} style={{marginTop:"22px"}}>
                {menuDrop ?(  <IoMdArrowDropup color="black" size={22} />):(<IoMdArrowDropdown color="black" size={22}/> )}
                {menuDrop && <div className="menuDrop">
              <div style={{display:"flex",borderBottom:"1px solid black",marginBottom:"5px",cursor:"pointer"}} onClick={handleLogout }> <div style={{marginBottom:"5px"}}><RiLogoutBoxLine /></div><h4>Logout</h4></div>
           <Link to="/myMembership" style={{textDecoration:"none",color:"inherit" ,cursor:"pointer"}}>  <div style={{display:"flex"}}><div><MdAccountCircle /></div><h4>My Account</h4></div></Link></div>}
                </div>
        </div>
      
    </div></div>
  );
};

export default MobileNavbar;
