import React, { useEffect, useState } from "react";
import "./MemberDetails.css";
import { FaRegBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";

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
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="member-holder">
        <div className="userPic">
          <img src="https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg" />
        </div>

        <div className="userNAME">
          <h2 style={{ justifyContent: "center" }}>Santhosh</h2>
        </div>
        <div className="userNAME">
          <h4 style={{ justifyContent: "center",marginTop:"-10px" }}>Agent</h4>
        </div><div className="userNAME" >
          <h4 style={{ justifyContent: "center",marginTop:"-10px" }}>Insurance Company</h4>
        </div>

        <div className="divider">
          <div className="section3">
            <div className="divider1">
              {" "}
              <div className="infoheading">
                <h3>Information</h3>
              </div>
              <div className="EmailLink">
                <div className="mailIcon">
                  <IoMdMail size={30} />
                </div>
                <div>
                  <h4 style={{ textAlign: "left" }}>Email</h4>
                  <h3>sample@mail.com</h3>
                </div>
              </div>
              <div className="PhoneLink">
                <div className="PhoneIcon">
                  <IoCall size={30} />
                </div>
                <div>
                  <h4 style={{ textAlign: "left" }}>Phone</h4>
                  <h3>987080979867</h3>
                </div>
              </div>
            </div>
            <div className="divider2">
              <div className="infoheading">
                <h3 style={{ color: "white" }}>.</h3>
              </div>{" "}
              <div className="WebsiteLink">
                <div className="randomIcon">
                  <TbArrowsRandom size={30} />
                </div>
                <div>
                  <h4 style={{ textAlign: "left" }}>Affiliation</h4>
                  <h3>http/wdad/wsampke</h3>
                </div>{" "}
              </div>
              <div className="AffiliationLink">
                <div className="webIcon">
                  <TbWorldWww size={30} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ textAlign: "left" }}> WebsiteLink</h4>
                   <h3>www.sampleWeblink.com</h3>
                </div>
              </div>
              <div className="AffiliationLink">
                <div className="webIcon">
                  <IoLogoLinkedin size={30} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ textAlign: "left" }}> Linked In</h4>
                  <h3>www.LinkedInSample.com</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="About-Container">
            <div>
              <h2>About Us:</h2>
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
          <h3>Images</h3>
        </div>
        <div className="imagesAdd">
          <div className="imageAdd1">
            <div>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg" />
            </div>
            <div>
              <img src="https://wallpapercave.com/wp/wp2656149.jpg" />
            </div>
          </div>
          <div className="imageAdd2">
            <div>
              <img src="https://pbs.twimg.com/profile_images/1442802623338397702/xcIJg8PN_400x400.jpg" />
            </div>
            <div>
              <img src="https://th.bing.com/th/id/OIP.z9lqZb1IAWlS5YPDLMHd4QDMEy?w=400&h=600&rs=1&pid=ImgDetMain" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MemberDetails;
