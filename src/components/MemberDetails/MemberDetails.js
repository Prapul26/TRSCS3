import React, { useEffect, useState } from "react";
import "./MemberDetails.css";
import { FaRegBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import axios from 'axios';

import { IoLogoLinkedin, IoMail, IoPersonSharp } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { GrFormSchedule } from "react-icons/gr";
import Header from "../Heaader/Header";
import { FaLinkedinIn } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineBusiness } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './PopUp.css'
import { FaCertificate } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaCopy } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuRectangleVertical } from "react-icons/lu";
import { FaShare } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import Logo from "../assets/M-D1.jpg";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { TbArrowsRandom, TbWorld, TbWorldWww } from "react-icons/tb";

const MemberDetails = () => {
  const[picView,setPicView]=useState(false);
  const [currentImage, setCurrentImage] = useState("");
 
  const picViewHandler = (src) => {
    setPicView(true);
    setCurrentImage(src);
  };
  
  const closeImagePopup = () => {
    setPicView(false);
    setCurrentImage("");
  };
  
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="member-holder">
        <div className="pic-Holder">
          <div>
            <div className="userPic">
              <img src="https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg" />
            </div>
          </div>
          <div className="dataName">
            <div className="userNAME">
              <h2 style={{ justifyContent: "center" }}>Santhosh</h2>
            </div>
           
            <div className="userNAME2">
              <h4 style={{ justifyContent: "center", marginTop: "-10px" }}>
                Insurance Company
              </h4>
            </div>{" "}
          </div>
        </div>

        <div className="divider">
          <div className="section3">
            <div className="divider1">
              {" "}
              <div className="infoheading">
                <h3>Contact Me :</h3>
              </div>
              <div className="EmailLink">
                <div className="mailIcon">
                  <IoMdMail size={30} />
                </div>
                <div>
                  <h4 style={{ textAlign: "left" ,color:"black" }}>Email</h4>
                  <h3 style={{color:'blue',fontWeight:"normal"}}>Sample@mail.com</h3>
                </div>
              </div>
              <div className="PhoneLink">
                <div className="PhoneIcon">
                  <IoCall size={30} />
                </div>
                <div>
                  <h4 style={{ textAlign: "left" ,color:"black"}}>Phone</h4>
                  <h3 style={{color:'blue',fontWeight:"normal"}}>8272927190</h3>
                </div>
              </div>
              <div className="PhoneLink">
                <div className="PhoneIcon">
                  <TbWorldWww size={30} />
                </div>
                <div>
                  <h4 style={{ textAlign: "left" ,color:"black",fontWeight:"bolder"}}>Website Link</h4>
                  <h3 style={{color:"blue",fontWeight:"normal"}}>www.sampleWeblink.com</h3>
                </div>
              </div>
              
            </div>
            <div className="divider2">
              <div className="infoheading">
                <h3 style={{ color: "white" }}>.</h3>
              </div>{" "}
              
              <div className="AffiliationLink">
                <div className="webIcon">
                <img width="30" height="30" src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/external-affiliate-seo-and-marketing-nawicon-glyph-nawicon.png" alt="external-affiliate-seo-and-marketing-nawicon-glyph-nawicon"/>      

                </div>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ textAlign: "left" ,color:"black" }}> Affiliation</h4>
                   <h3 style={{color:"blue",fontWeight:"normal"}}>http/wdad/wsampke</h3>
                </div>
              </div>
              <div className="AffiliationLink">
                <div className="webIcon">
                  <IoLogoLinkedin size={30} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ textAlign: "left"  ,color:"black"}}> Linked In</h4>
                  <h3 style={{color:"blue",fontWeight:"normal"}}>www.LinkedInSample.com</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="section4">
            <div className="pe-holder">
              <div style={{ marginTop: "20px" }}>
                <h3 style={{ fontSize: "22px" }}>Contact Me :</h3>
              </div>
              <div style={{ marginTop: "25px" }}>
                {" "}
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ marginRight: "10px" }}>
                    <IoMail size={20} />
                  </div>
                  <div>
                    <h3>Mail</h3>
                  </div>
                </div>
                <p style={{ marginLeft: "28px" }}>Sample@mail.com</p>
              </div>
              <div style={{ marginTop: "25px" }}>
                {" "}
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ marginRight: "10px" }}>
                    <IoCall size={20} />
                  </div>
                  <div>
                    <h3>Phone</h3>
                  </div>
                </div>
                <p style={{ marginLeft: "28px" }}>8272927190</p>
              </div>
              <div style={{ marginTop: "25px" }}>
                {" "}
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ marginRight: "10px" }}>
                    <TbWorldWww size={20} />
                  </div>
                  <div>
                    <h3>WebsiteLink</h3>
                  </div>
                </div>
                <p style={{ marginLeft: "28px", color: "blue" }}>
                  www.sampleWeblink.com
                </p>
              </div>
            </div>
            <div className="Links-Holder">
              <div>
                {" "}
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ marginRight: "10px" }}>
                  <img width="23" height="23" src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/external-affiliate-seo-and-marketing-nawicon-glyph-nawicon.png" alt="external-affiliate-seo-and-marketing-nawicon-glyph-nawicon"/>                  </div>
                  <div>
                    <h3>Affiliation</h3>
                  </div>
                </div>
                <p style={{ marginLeft: "28px" }}>http/wdad/wsample</p>
              </div>
              <div style={{ marginTop: "25px" }}>
                {" "}
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ marginRight: "10px" }}>
                    <IoLogoLinkedin size={20} />
                  </div>
                  <div>
                    <h3> Linked In</h3>
                  </div>
                </div>
                <p style={{ marginLeft: "28px" }}>www.LinkedInSample.com</p>
              </div>
            </div>
          </div>
          <div className="About-Container">
            <div>
              <h2>About Me</h2>
            </div>
            <div>
              <p>
                At TRACS, we believe in the power of connections. Our platform
                is designed to be the heartbeat of professional networking,
                where members come together to forge meaningful relationships,
                exchange ideas, and unlock new opportunities. Our platform is
                designed for individuals and businesses seeking meaningful
                networking experiences.
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <h2>Images</h2>
        </div>
        <div className="imagesAdd">
          <div className="imageAdd1" >
            <div onClick={(e)=>picViewHandler("https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg")} >
              <img src="https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg" />
            </div>
            <div onClick={(e)=>picViewHandler("https://wallpapercave.com/wp/wp2656149.jpg")}>
              <img src="https://wallpapercave.com/wp/wp2656149.jpg" />
            </div>
          </div>
          <div className="imageAdd2">
            <div onClick={(e)=>picViewHandler("https://pbs.twimg.com/profile_images/1442802623338397702/xcIJg8PN_400x400.jpg")}>
              <img src="https://pbs.twimg.com/profile_images/1442802623338397702/xcIJg8PN_400x400.jpg" />
            </div>
            <div onClick={(e)=>picViewHandler("https://th.bing.com/th/id/OIP.z9lqZb1IAWlS5YPDLMHd4QDMEy?w=400&h=600&rs=1&pid=ImgDetMain")}>
              <img src="https://th.bing.com/th/id/OIP.z9lqZb1IAWlS5YPDLMHd4QDMEy?w=400&h=600&rs=1&pid=ImgDetMain"  />
            </div>
          </div>    
      </div>
        </div>
  {picView && <div className="wada"><button onClick={closeImagePopup}><RxCross2/></button>
  <img src={currentImage}/></div>}
      <Footer />
    </div>
  );
};
export default MemberDetails;
