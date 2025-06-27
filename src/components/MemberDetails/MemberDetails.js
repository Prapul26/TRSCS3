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
import { Link, useParams } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStarOutline } from "react-icons/io";
import { TbArrowsRandom, TbWorld, TbWorldWww } from "react-icons/tb";
import Images from "../Data/Images";
import Slider from "react-slick";
const MemberDetails = () => {
  const [picView, setPicView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user_id, member_type } = useParams();
  const [data, setData] = useState("");
  const [affdata,setAffdata]=useState("")
  const[additionalImages,setAddImages]= useState( [] );
  const[additionalimg,setAdditionalimg]=useState([""]);
  const [fullImageUrls, setFullImageUrls] = useState([]);
  const picViewHandler = (index) => {
    setPicView(true);
    setCurrentIndex(index);
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
  const fetchData = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/profile_details/${user_id}/${member_type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (parseInt(member_type) === 1) {
        setData(response.data.listing.user);
      } else if (parseInt(member_type) === 2) {
        const userProfile = response.data.user_profile;
        setData(userProfile);

        const imageUrls = userProfile.user_images?.map(img =>
          `https://tracsdev.apttechsol.com/public/${img.image}`
        );
        setAddImages(imageUrls || []);

        const additional = userProfile.user_images;
        if (additional) {
          setAdditionalimg(additional);

          const fullImageUrlsMapped = additional.map((img) => ({
            id: img.id,
            image: `uploads/additional_images/${img.image}`,
          }));

          setFullImageUrls(fullImageUrlsMapped);
        }
      }

      setAffdata(response.data?.affiliation_link);
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
}, []);

         

  useEffect(() => {
  console.log("affdata changed:", affdata);
}, [affdata]);
        console.log("userImages:"+data.user_images);
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div style={{ marginLeft: "20px" }}>
        {" "}
        <button style={{ borderRadius: "30px", border: "transparent" }}>
          <span>
            <Link to="/inbox">
              <TiArrowBackOutline color="white" size={35} />
            </Link>
          </span>{" "}
        </button>
      </div>
      <div className="member-holder">
        <div className="pic-Holder">
          <div>
            <div className="userPic">
              <img
                src={`https://tracsdev.apttechsol.com/public/${data.image} `}
              />
            </div>
          </div>
          <div className="dataName">
            <div className="userNAME">
              <h2 style={{ justifyContent: "center" }}>{data.name}</h2>
            </div>
            <div className="userNAME2">
              <h4 style={{ justifyContent: "center", marginTop: "-10px" }}>
                <span
                  style={{
                    background: "green",
                    color: "white",
                    borderRadius: "3px",
                  }}
                >
                  <span style={{ color: "green" }}>.</span> TRACS
                  <span style={{ color: "green" }}>..</span>
                </span>{" "}
                <span style={{ color: "black" }}>Member</span>
              </h4>
            </div>
            <div className="userNAME2">
              <h4 style={{ justifyContent: "center", marginTop: "-10px" }}>
                {data.business_name}
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
                  <h3 style={{ color: "blue", fontWeight: "normal" }}>
                    {data.email}
                  </h3>
                </div>
              </div>
              <div className="PhoneLink">
                <div className="PhoneIcon">
                  <IoCall size={30} />
                </div>
                <div>
                  <h4 style={{ textAlign: "left", color: "black" }}>Phone</h4>
                  <h3 style={{ color: "blue", fontWeight: "normal" }}>
                    {data.phone}
                  </h3>
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
                  <h3 style={{ color: "blue", fontWeight: "normal" }}>
                    {data.website}
                  </h3>
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
                {affdata?.affiliate_link && (
  <h3 style={{ color: "blue", fontWeight: "normal" }}>
    {affdata.affiliate_link}
  </h3>)}
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
                  <h3 style={{ color: "blue", fontWeight: "normal" }}>
                    {data.linkedin}
                  </h3>
                </div>
              </div>
            </div>
          </div>
         
          <div className="About-Container" style={{}}>
            <div>
              <h2 style={{ color: "black" }}>About Me</h2>
            </div>
            <div>
              
            </div>
            <div>
              <p>{data.about}</p>
            </div>
          </div>
        </div>
        <div>

      <div>



      </div>
 
        </div>
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
          <h2>Images</h2>
        </div>
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
      <div>
        {" "}
        {picView && (
  <div className="overlay">
    <div className="popup-overlay">
      <button className="close-btn" onClick={closeImagePopup}>
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
)}
      </div>
      <Footer />
      
    </div>
  );
};
export default MemberDetails;
