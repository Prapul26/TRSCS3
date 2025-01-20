import React, { useState } from "react";
import "./Header.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FcGlobe } from "react-icons/fc";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
/*  <FaFacebook />
  <FaSquareXTwitter />
 <FaLinkedin />
 <FcGlobe /> 
 <IoMdArrowDropdown />
 <IoMdArrowDropup /> 
 <CiMenuKebab />
 <ImCross />*/
const Header = () => {
  const [menu, showMenu] = useState(false);
  const[about,showAbout]=useState(false);
  const[drop1,showDrop1]=useState(false);
  const[drop2,showDrop2]=useState(false);
  const handelDrop1=()=>{
showDrop1(!drop1);
showDrop2(false);
  };
  const handelDrop2=()=>{
showDrop2(!drop2);
showDrop1(false)
  }
  const handelMenu = () => {
    showMenu(!menu);
  };
  const handleCross=()=>{
    showMenu(false);
  };
  const handelAbout=()=>{
    showAbout(!about);
  }
  return (
    <div className="Header">
      {menu && (
        <div className="Menu">
          <div className="cross">
            <div className="crossPosition" onClick={handleCross}>
              <ImCross size={24} />
            </div>
          </div>
          <div className="home">
            <div className="Home">
               <Link to='/home' style={{textDecoration:"none",color:"inherit"}}><h2>Home</h2></Link> 
            </div>
          </div>
          <div className="aboutUs">
            <div><h2>About US</h2></div>
            <div onClick={handelAbout} style={{marginTop:"18px",marginRight:"5pxw"}}> {about ?  <IoMdArrowDropup  size={35} /> :<IoMdArrowDropdown size={35} />}</div>
        
          </div> {
            about && <div className="dropAbout">
<div className="dropAboutUs">
  <Link to='/about_us' style={{textDecoration:"none",color:"inherit"}}> <h2>About Us</h2></Link> 

</div>
<div className="dropContact">
   <Link to='/contact' style={{textDecoration:"none",color:"inherit"}}> <h2>Contact</h2></Link>
</div>
<div className="dropPartner">
 <Link to='/partner'style={{textDecoration:"none",color:"inherit"}} > <h2>Partners</h2></Link>  
</div>
            </div>
         }
          <div className="pricing">
            <div className="Pricing">
               <Link to='/pricing' style={{textDecoration:"none",color:"inherit"}}><h2>Pricing</h2></Link> 
            </div>
          </div>
          <div className="pricing">
          <Link to='/myMembership' style={{textDecoration:"none",color:"inherit"}}> <div className="Pricing">
                <h2>Profile</h2>
            </div></Link> 
          </div>
          <div className="login">
            <button>Login</button>
          </div>
          <div className="register">
            <button>Register</button>
          </div>
          <div className="social-Media">
          <a href="https://www.facebook.com/h7network"> <div className="fff"><FaFacebook size={30} /></div></a> 
           <a href="https://twitter.com"><div className="ffx"><FaSquareXTwitter size={30} /></div></a> 
           <a href="https://www.linkedin.com/company/h7network/"><div className="ffn"> <FaLinkedin size={30} /></div></a> 
          </div>
        </div>
      )}
      <div className="header-container">
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
        <div className="pic">
          <img
            src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png"
            style={{ height: "27px" }}
          />
        </div>
        <div className="dropdowns">
          <div className="globe">
            <div className="globee">
              <FcGlobe size={30} />{" "}
            </div>
            <div className="drop1" onClick={handelDrop1}>
             {drop1 ? <IoMdArrowDropup size={20}/> :<IoMdArrowDropdown size={20} />} 
            {
                drop1 && <div className="dropDown1">
<div className="usaFlag"> <img style={{height:"100%",width:"100%"}} src="https://tracsdev.apttechsol.com/public/uploads/website-images/USA.png"/></div>
<div className="usa"><h3>USA</h3></div>
                </div>
            }</div>
          </div>
          <div className="header-profile">
            <div className="picPro">
              <img
                src="https://tracsdev.apttechsol.com/public/uploads/custom-images/user-2024-07-09-02-52-30-9248.png"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="drop2" onClick={handelDrop2}>
             {drop2 ?<IoMdArrowDropup size={20}/> :<IoMdArrowDropdown size={20} />} 
             {
                drop2 && <div className="dropDown2">
                   <Link to='/myMembership' style={{textDecoration:"none",color:"inherit"}}><div className="profileDrop"><h3>My Profile</h3></div></Link> 
                    <div className="dropLogout" ><h3>Logout</h3></div>
                </div>
             }
            </div>
          </div>
        </div>
        <div className="menu" onClick={handelMenu}>
          <CiMenuKebab size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
