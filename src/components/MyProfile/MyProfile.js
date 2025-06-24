import React, { useEffect, useState } from "react";
import "./MyProfile.css";
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
import "./PopUp.css";
import { FaCertificate } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaCopy } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuRectangleVertical } from "react-icons/lu";
import { FaShare } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowDropDown } from "react-icons/md";
import Logo from "../assets/M-D1.jpg";
import { data, Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStarOutline } from "react-icons/io";
import { TbArrowsRandom, TbWorld, TbWorldWww } from "react-icons/tb";
import Images from "../Data/Images";
import Slider from "react-slick";
const MyProfile = () => {
  const [picView, setPicView] = useState(false);
   const [imagePreview, setImagePreview] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[linkedIn,setLinkedIn]=useState("");
const[website,setWebsite]=useState("");
const[phone,setPhone]=useState("")
const[business,setBusiness]=useState("")
const[additionalimg,setAdditionalimg]=useState([""]);
const[membertype,setMembertype]=useState("");
const [about,setAbout]=useState("")
const [affiliate,setAffiliate]=useState("")
const [fullImageUrls, setFullImageUrls] = useState([]);
const[data2,setData2]=useState("")
  const picViewHandler = (id) => {
    setPicView(true);
    setCurrentIndex(id);
  };

  const closeImagePopup = () => {
    setPicView(false);
  };

  const sliderSettings = {
    initialSlide: currentIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    cursor: "pointer",
    arrows: true,
  };
  useEffect(() => {
  const timeoutId = setTimeout(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
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
          setImagePreview(`https://tracsdev.apttechsol.com/public/${newImage}`);
        

        }
const name2= data.user.name ;
if(name2){
  setName(name2);
 
}
const name3= data.user.email ;
if(name3){
  setEmail(name3);
 
}
const name4= data.user.phone ;
if(name4){
  setPhone(name4);
 
}
const name5= data.user.website ;
if(name5){
  setWebsite(name5);
 
}
const name6=data.user.linkedin;

if(name6){
  setLinkedIn(name6);
 
};
const name7=data.user.business_name ;
if(name7)
{
  setBusiness(name7)
}  
const name8=data.user.about ;
if(name8){
  setAbout(name8)
}   
const name9=data.user.member_type;
if(name9 === "1"){
  setMembertype("H7")
}
else if(name9 === "2"){
  setMembertype("Tracs")
}

const additional = data.total_photos;  
if (additional) {
  setAdditionalimg(additional);

  const fullImageUrlsMapped = additional.map((img) => ({
    id: img.id,
    image: `uploads/additional_images/${img.image}`, // use relative path
  }));

  setFullImageUrls(fullImageUrlsMapped);
}

      
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, 300);

  return () => clearTimeout(timeoutId);
}, []);
   useEffect(()=>{
    const fetchData=async()=>{
      const token=localStorage.getItem("authToken");
      try{
        const response= await axios.get("https://tracsdev.apttechsol.com/api/affiliation",{
          headers:{
            Authorization:`Bearer${token} `
          }
        });
        setData2(response.data);
      }catch(err){
        console.log(err)
      }
    }
   fetchData()},[])
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div style={{ marginLeft: "20px" }}> <button style={{ borderRadius: "30px", border: "transparent" }}><span><Link to='/accountSettings'><TiArrowBackOutline color='white' size={35} /></Link></span> </button></div>
      <div className="member-holder">
        <div className="pic-Holder">
          <div>
            <div className="userPic">
              <img src={imagePreview} />
            </div>
          </div>
          <div className="dataName">
            <div className="userNAME">
              <h2 style={{ justifyContent: "center" }}>{name}</h2>
            </div>
            <div className="userNAME2">
              <h4 style={{ justifyContent: "center", marginTop: "-10px" }}>
                <span style={{ background: "green", color: "white", borderRadius: "3px" }}><span style={{ color: "green" }}>.</span> {membertype}<span style={{ color: "green" }}>..</span></span> <span style={{ color: "black" }}>Member</span>
              </h4>
            </div>
            <div className="userNAME2">
              <h4 style={{ justifyContent: "center", marginTop: "-10px" }}>
            {business}
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
                  <h4 style={{ textAlign: "left", color: "black" }}>Email</h4>
                  <h4 style={{ color: "blue"}}>
                   {email}
                  </h4>
                </div>
              </div>
              <div className="PhoneLink">
                <div className="PhoneIcon">
                  <IoCall size={30} />
                </div>
                <div>
                  <h4 style={{ textAlign: "left", color: "black" }}>Phone</h4>
                  <h4 style={{ color: "blue" }}>
                  {phone}
                  </h4>
                </div>
              </div>
              <div className="PhoneLink">
                <div className="PhoneIcon">
                  <TbWorldWww size={30} />
                </div>
                <div>
                  <h4
                    style={{
                      textAlign: "left",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    Website Link
                  </h4>
                  <h4 style={{ color: "blue",  }}>
                  {website}
                  </h4>
                </div>
              </div>
            </div>
            <div className="divider2">
              <div className="infoheading">
                <h3 style={{ color: "white" }}>.</h3>
              </div>{" "}
              <div className="AffiliationLink">
                <div className="webIcon">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/external-affiliate-seo-and-marketing-nawicon-glyph-nawicon.png"
                    alt="external-affiliate-seo-and-marketing-nawicon-glyph-nawicon"
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ textAlign: "left", color: "black" }}>
                    {" "}
                    Affiliation
                  </h4>
                  <h4 style={{ color: "blue" ,wordBreak:"break-word",whiteSpace:"normal"}}>
                   {data2.link_exist?.affiliate_link}
                  </h4>
                </div>
              </div>
              <div className="AffiliationLink">
                <div className="webIcon">
                  <IoLogoLinkedin size={30} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ textAlign: "left", color: "black" }}>
                    {" "}
                    Linked In
                  </h4>
                  <h4 style={{ color: "blue" }}>
                  {linkedIn}
                  </h4>
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
                  www.sampleWeblinkw.com
                </p>
              </div>
            </div>
            <div className="Links-Holder">
              <div>
                {" "}
                <div style={{ display: "flex", marginTop: "15px" }}>
                  <div style={{ marginRight: "10px" }}>
                    <img
                      width="23"
                      height="23"
                      src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/external-affiliate-seo-and-marketing-nawicon-glyph-nawicon.png"
                      alt="external-affiliate-seo-and-marketing-nawicon-glyph-nawicon"
                    />{" "}
                  </div>
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
             {about}
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <h2>Images</h2>
        </div>
        <div className="imgover"> 
       <div className="carlo" style={{ display: "flex" }}>
 {fullImageUrls.map((img, index) => (
  <div className="AddImages" key={img.id}>
    <div className="images" onClick={() => picViewHandler(index)}>
      <img
        src={`https://tracsdev.apttechsol.com/public/${img.image}`}
        alt={`image-${img.id}`}
      />
    </div>
  </div>
))}
</div>
</div>
      </div>
      <div > {picView && (
        <div className="overlay">
          <div className="popup-overlay">
            <button className="close-btn" onClick={closeImagePopup} >
              <RxCross2 size={30} />
            </button>
           <Slider {...sliderSettings} initialSlide={currentIndex}>
  {fullImageUrls.map((img) => (
    <div key={img.id} className="popup-slide">
      <img
        src={`https://tracsdev.apttechsol.com/public/${img.image}`}
        alt={`popup-image-${img.id}`}
      />
    </div>
  ))}
</Slider>
          </div>
        </div>
      )}</div>
      <Footer />
    </div>
  );
};
export default MyProfile;
