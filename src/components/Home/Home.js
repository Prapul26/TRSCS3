import React, { useEffect, useState } from "react";
import "./Home.css";
import Slider from "react-slick";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import pd1 from "../assets/pd1.png";
import pd2 from "../assets/pd2.png";
import pd3 from "../assets/pd3.png";
import Data2 from "../../components/Data/Data2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Header from "../Heaader/Header";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

 useEffect(() => {
   // Check if user is logged in by checking for token in localStorage
   const token = localStorage.getItem('authToken');
   if (token) {
     setIsLoggedIn(true);
   }
 }, []);
  return (
    <div className="homeHolder">
      <Header />
      <Navbar />
      <div className="serch-container" >
        <div className="sh2">
          <h2 style={{color:"white"}}>
            TRACS helps you effortlessly connect and make introductions like a
            champion !
          </h2>
        </div>

        <div className="network-container">
          <Link to="/makeIntro">
            <button style={{background:"#eeba2b"}}>Make Introduction Instantly</button>
          </Link>
          <Link to="/inbox">
            <button style={{background:"#eeba2b"}} className="bttborder">
              <span>My Dashboard</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="home-details">
        <div className="hd1">
         
          <div className="hd1-details">
            <h1 style={{fontSize:"25px"}}>
              Strengthening your reputation, while strengthening your
              Trusted-Relationships.
            </h1>
           {!isLoggedIn &&(<Link to='/register'><button>Join now</button></Link>)} 
          </div>
          <div className="hd1-pic">
            <img src="https://tracs.app/public/uploads/website-images/home-img3.jpeg" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="line-1">
          <p>

            Welcome to <span style={{ color: "#f96b39" }}>TRACS</span>, your
            go-to source for connecting with a diverse community of talented
            individuals. Connect, Collaborate, and build meaningful
            relationships within our vibrant community.
          </p>
        </div>
        <div className="hd2">
          
          <div className="hd2-pic">
            <img src='https://tracs.app/public/uploads/website-images/home-img1.jpeg' style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="hd2-details">
            <h1 style={{textAlign:"center",color:"darkblue",textDecoration:"underline"}}>SUBSCRIBE</h1>
            <h3 style={{color:"black"}}>Become a part of our growing community!</h3>
            <p>Joining is easy:</p>
            <h3>1.Sign up for your 14-day trial</h3>
            <h3>2.Create your Account</h3>
            <h3>3.Add your contacts to your account</h3>
            <h3>4.Start Making Introductions</h3>
            <h3>5.Use your Dashboard for Results</h3>
          </div>
        </div>
       
      </div>

      <Footer />
    </div>
  );
};
export default Home;
