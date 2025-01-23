import React, { useEffect, useState } from "react";
import "./MemberDetails.css";
import { FaRegBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";

import { IoMail } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { GrFormSchedule } from "react-icons/gr";
import Header from "../Heaader/Header";
import { FaLinkedinIn } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
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
import { IoIosStarOutline } from "react-icons/io";

const MemberDetails = () => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [share, showShare] = useState(false);
  const [schedule, setSchedule] = useState(false);

  const data = {
    photos: "https://via.placeholder.com/150",
    company: "Sample Company",
    name: "John Doe",
    role: "Manager",
    certification: "Certified Professional",
    tagline: "Founder/CEO and Marketing Consultant, Digital Advertising Strategist",
    AboutUs: "We provide quality services tailored to your needs.",
    area: "123 Main Street, City, Country",
    number: "+1234567890",
    link: "www.example.com",
    categories: ["Category 1", "Category 2", "Category 3"],
    location: "City Center",
    products: ["Product 1", "Product 2", "Product 3"],
    services: "Our wide range of services includes...",
    refferal: "Earn rewards by referring us to others.",
    picture: "https://via.placeholder.com/100",
  };

  const showSchedule = () => {
    setSchedule(!schedule);
  };
  const openShare = () => {
    showShare(!share);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Rating:", rating);
    console.log("Comment:", comment);
  };
  return (
    <div className="container">
      <Header />
      <Navbar />

      {data && (
        <div className="details-container">
          <button
            style={{
              backgroundColor: " #4D4DFF",
              borderRadius: "30px",
              border: "transparent",
            }}
          >
            <span>
              <Link to="/home">
                <TiArrowBackOutline color="white" size={35} />
              </Link>
            </span>{" "}
          </button>
          <div className="pic1-container">
            <img
              style={{ opacity: "none" }}
              src={Logo}
              alt="Member"
              className="member-image"
            />
          </div>

          <div className="cards-container">
            <div className="ab-holder">
              <div className="a-holder">
                <div className="details">
                  <div className="details-card">
                    <div className="pic1-holder">
                      <img
                        src={data.photos}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                    <div className="name-holder">
                      <div className="name-holder2"></div>
                      <h2>{data.company}</h2>
                      <p>{data.name}</p>
                      <p>
                        <span style={{ marginRight: "2px", marginTop: "-3px" }}>
                          <LuRectangleVertical />
                        </span>
                        {data.role}
                      </p>
                      <p>
                        <span style={{ marginRight: "2px", marginTop: "-3px" }}>
                          <FaCertificate />
                        </span>
                        {data.certification}
                      </p>
                    </div>
                  </div>
                  
             
                </div>
                <div className="tagline">
                  <div className="tagline-card">
                    <h1>Tagline</h1>
                    <p>{data.tagline}</p>
                  </div>
                </div>
                <div className="about-us">
                  <div className="about-us-card">
                    <h1>About-Us</h1>
                    <p>{data.AboutUs}</p>
                  </div>
                </div>
              </div>
              <div className="b-holder">
                <div className="contacts">
                  <div className="contacts-card">
                    {" "}
                    <h1>Contact</h1>
                    <ul>
                      <li>{data.area}</li>
                      <li>{data.number}</li>
                      <li>{data.link}</li>
                    </ul>
                  </div>
                  <div className="socilaMediaStore-container1">
                    <button>
                      <span style={{ marginLeft: "-2px", marginTop: "2px" }}>
                        <a
                          href="https://www.facebook.com/h7network"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <FaFacebook />
                        </a>
                      </span>
                    </button>
                    <button>
                      <span style={{ marginLeft: "-2px", marginTop: "4px" }}>
                        <a
                          href="https://x.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <FaXTwitter />
                        </a>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="categories">
                  <div className="categories-card" style={{ padding: "15px" }}>
                    <h1>Categories</h1>
                    <ul style={{ listStyle: "none", padding: "0px" }}>
                      {data.categories.map((categorie, index) => (
                        <li key={index}>
                          <IoIosArrowForward />
                          {categorie}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="location">
                  <div className="location-card" style={{ padding: "15px" }}>
                    <h1>Locations</h1>
                    <ul style={{ listStyle: "none", padding: "0px" }}>
                      {data && (
                        <li>
                          <IoIosArrowForward />
                          {data.location}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="c-holder">
              <div className="products">
                <div className="products-card">
                  <h1>Products</h1>
                  <ul>
                    {data.products.map((product, index) => (
                      <li key={index}>{product}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="services">
                <div className="services-card">
                  <h1>Services</h1>
                  <p>{data.services}</p>
                </div>
              </div>
              <div className="refferal">
                <div className="refferal-card">
                  <h1>Refferal Reward</h1>
                  <p>{data.refferal}</p>
                </div>
              </div>
              <div className="photos">
                <h1>Photos</h1>
                <div className="photos-card">
                  <div className="cardpic-holder">
                    <img src={data.photos} className="cardpic" />
                  </div>
                </div>
                <div className="smallPic">
                  <img src={data.picture} className="smallPic1" />
                </div>
              </div>
              <div className="videos">
                <div className="videos-card" style={{ padding: "10px" }}>
                  <h1>Videos</h1>
                  <div
                    className="vid-holder"
                    style={{
                      backgroundImage:
                        "url(https://img.youtube.com/vi/3ctoSEQsY54/0.jpg)",
                    }}
                  >
                    <a href="https://www.youtube.com/watch?v=3ctoSEQsY54">
                      <FaRegCirclePlay className="play" size="35" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rate" style={{marginBottom:"30px"}}>
                <div className="rate-card" style={{ padding: "10px" }}>
                  <h1>Add Review & Rate</h1>
                  <div className="rate-form">
                    <select
                      value={rating}
                      onChange={handleRatingChange}
                      className="rating-dropdown"
                    >
                      <IoIosStarOutline />
                      <option value="" disabled>
                        <IoIosStarOutline />1
                      </option>
                      <option value="1">1</option>
                      <option value="2">2 </option>
                      <option value="3">3 </option>
                      <option value="4">4 </option>
                      <option value="5">5</option>
                    </select>
                    <br></br>
                    <textarea
                      value={comment}
                      onChange={handleCommentChange}
                      className="comment-box"
                      placeholder="COMMENT"
                    />
                    <br></br>
                    <button onClick={handleSubmit} className="submit-button">
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {share && (
        <div
          className="shareDetails"
          style={{ height: "fit-content", marginTop: "-50px" }}
        >
          <div className="pr">
            <div className="sd1">
              <h3>Share</h3>
            </div>
            <div className="sd1a">
              <RxCross2 size={25} onClick={() => showShare(false)} />
            </div>
          </div>

          <div className="link-share-container">
            <input />
            <button>Copy text</button>
          </div>
          <div className="row">
            <div className="row-m1">
              <div className="row-mt1">
                {" "}
                <h4>SwaranJeeth</h4>
              </div>
              <div className="row-mt2">
                <img src={Logo} style={{ height: "100px", width: "100px" }} />
              </div>
            </div>
            <div className="row-m2">
              <div className="k1" style={{ display: "flex" }}>
                <FaRegBuilding
                  style={{ marginTop: "18px", marginRight: "10px" }}
                />
                <p>SRR Insurance Agent Services</p>{" "}
              </div>
              <div className="k2" style={{ display: "flex" }}>
                <FaPhoneAlt
                  style={{ marginTop: "18px", marginRight: "10px" }}
                />{" "}
                <p>213431434</p>
              </div>
              <div className="k3" style={{ display: "flex" }}>
                <IoMail style={{ marginTop: "18px", marginRight: "10px" }} />{" "}
                <p>awfdawefdaf</p>
              </div>
              <div className="k4" style={{ display: "flex" }}>
                {" "}
                <BsGlobe
                  style={{ marginTop: "18px", marginRight: "10px" }}
                />{" "}
                <p>ffefefef</p>
              </div>
              <div className="k5" style={{ display: "flex" }}>
                <FaUserTag style={{ marginTop: "18px", marginRight: "10px" }} />{" "}
                <p>efessfefefe</p>
              </div>
              <div className="k6"> Powered by TRACS Network</div>
            </div>
          </div>
          <div className="m1">
            <h4>How would you like to share</h4>
          </div>
          <div className="so1">
            <a
              href="https://www.facebook.com/h7network"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FaFacebook color="white" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <FaXTwitter color="white" />
            </a>
            <a
              href="https://www.linkedin.com/company/h7network/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <FaLinkedinIn color="white" />
            </a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
export default MemberDetails;
