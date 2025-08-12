import React, { useEffect, useState } from "react";
import "./UserHeader.css";
import { FaArrowAltCircleUp, FaArrowCircleDown, FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdOutlineCardMembership } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine, RiLogoutBoxLine } from "react-icons/ri";
import { IoIosArrowDropup } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { FaArrowAltCircleDown } from "react-icons/fa";
const UserHeader = () => {
  const [userNav, showUserNav] = useState(false);
  const [intro, showIntro] = useState(false);
  const [menuDrop, setMenuDrop]=useState(false);
    const [profileImg,setProfileImg]=useState("");
  const [imageUrl, setImageUrl] = useState("");

useEffect(() => {
  const storedImage = sessionStorage.getItem("profileImageUrl");
  if (storedImage) {
    setImageUrl(storedImage);
  }
}, []);
  const handelMenuDrop=()=>{
setMenuDrop(!menuDrop)
  }
  const handelIntro = () => {
    showIntro(!intro);
  };
  const handelUserNav = () => {
    showUserNav(!userNav);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Check if user is logged in by checking for token in localStorage
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("profileImageUrl")
    setIsLoggedIn(false);
    navigate("/"); // Redirect to login page
    window.location.reload()
  };
console.log("image:"+imageUrl);
useEffect(() => {
  const timeoutId = setTimeout(() => {
    const fetchProfile = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        const response = await axios.get(
          "https://tracsdev.apttechsol.com/api/my-profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        const newImage = data.user?.image;
       if (newImage) {
        const imageUrl = `https://tracsdev.apttechsol.com/public/${newImage}`;
        setProfileImg(imageUrl);
       
      }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, 300);

  return () => clearTimeout(timeoutId);
}, []);
  return (
    <div className="header" style={{ display: "flex" }}>
      {userNav && (
        <div className="usernav">
         <div className="home-container">
            <FaHome size={25} style={{ marginRight: "6px" }} />  <Link to='/home' state={{textDecoration:"none",color:"inherit"}}><h2>Home</h2></Link>
          </div>
          <div className="navs">
            <Link
              to="/myMembership"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              <div className="membership">
                <div className="a2">
                  <MdOutlineCardMembership
                    size={20}
                    className="a1"
                    style={{
                      marginTop: "24px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  />
                </div>
                <h3>My Membership</h3>{" "}
              </div>
            </Link>
            <Link
              to="/accountSettings"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div className="accountSettings">
                <div className="a3">
                  <IoSettingsSharp
                    size={20}
                    style={{
                      marginTop: "22px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  />
                </div>
                <h3>Account Settings/Profile</h3>{" "}
              </div>
            </Link>
            <Link
              to="/businessProfile"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div className="businessProfile">
                <div className="a5">
                  <ImProfile
                    size={20}
                    style={{
                      marginTop: "22px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  />
                </div>
                <h3>My Business Profile</h3>{" "}
              </div>
            </Link>
            <div className="intro1">
              <div className="introduction" onClick={handelIntro}>
                <h3>
                  <span style={{ marginTop: "5px" }}>
                    <FaBriefcase
                      size={20}
                      style={{
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    />
                  </span>
                  Introduction
                </h3>{" "}
                {intro ? (
                  <IoIosArrowDropup size={22} style={{ marginTop: "20px" }} />
                ) : (
                  <IoIosArrowDropdown size={22} style={{ marginTop: "20px" }} />
                )}
              </div>
              {intro && (
                <div className="intoNav">
                  <Link
                    to="/contacts"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <h3>
                      <RiContactsFill style={{ marginRight: "3px" }} />
                      Contacts
                    </h3>
                  </Link>
                  <Link
                    to="/inbox"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <h3>
                      <HiInboxArrowDown style={{ marginRight: "3px" }} />
                      Inbox
                    </h3>
                  </Link>
                  <Link
                    to="/makeIntro"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {" "}
                    <h3>
                      <IoBookOutline style={{ marginRight: "3px" }} />
                      Make Introduction
                    </h3>
                  </Link>
                  <Link
                    to="/email"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <h3>
                      <MdOutlineEmail style={{ marginRight: "3px" }} />
                      Email Templates
                    </h3>
                  </Link>
                  <Link
                    to="/signature"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <h3>
                      <FaFileSignature style={{ marginRight: "3px" }} />
                      Signature
                    </h3>
                  </Link>
                </div>
              )}
            </div>
            <div className="logout" style={{ display: "flex" }}>
              <div className="a4">
                <SlLogout
                  style={{
                    marginTop: "23px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                />
              </div>
              <h3>Logout</h3>{" "}
            </div>
          </div>
        </div>
      )}
      <div className="headerContainer">
        <div className="home3"></div>
        <div className="home2">
          <div style={{ marginRight: "5px" }}>
            {" "}
           <Link to='/home' style={{ color: "inherit", textDecoration: "none" }}><FaHome size={26} /></Link> 
          </div>{" "}
         <Link to='/home' style={{ color: "inherit", textDecoration: "none" }}><h3>Home</h3></Link> 
        </div>
        <div className="userProfile-container">
          <div className='userHome' style={{marginRight:"30px"}}>
          <Link to='/home' style={{ color: "inherit", textDecoration: "none" }}><FaHome size={30} color="white"/></Link> 
          </div>
          <div className="profile-pic">
            <img
src={profileImg}              style={{ height: "100%", width: "100%"}}
            />
          </div>
          <div className="profile-name" onClick={handelMenuDrop}>
          {menuDrop ?(  <MdOutlineArrowDropUp size={25} color="white" />):(< MdOutlineArrowDropDown color="white" size={25}/> )}
          {menuDrop && <div className="menuDrop">
        <div style={{display:"flex",borderBottom:"1px solid black",marginBottom:"5px",cursor:"pointer"}} onClick={handleLogout}> <div style={{marginBottom:"5px"}}><RiLogoutBoxLine /></div><h4>Logout</h4></div>
     <Link to="/myMembership" style={{textDecoration:"none",color:"inherit",cursor:"pointer"}}>  <div style={{display:"flex"}}><div><MdAccountCircle /></div><h4>Dashboard</h4></div></Link></div>}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default UserHeader;
