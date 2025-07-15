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
import { Link, useNavigate } from "react-router-dom";
import Header from "../Heaader/Header";

const Home = () => {
  const navigate=useNavigate()
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showtext,setText]=useState(true) 

 useEffect(() => {
   // Check if user is logged in by checking for token in localStorage
   const token = localStorage.getItem('authToken', "dummy_token");
   
   if (token) {
     setIsLoggedIn(true);
     setText(false)
   }
 }, []);
   const handleMakeIntroClick = () => {
    if (!showtext) {
      navigate("/makeIntro");
    } else if(showtext) {
      navigate("/login");
    };

  };
  const handleDashboard=()=>{
    if(!showtext){
      navigate("/inbox")
    }
    else if(showtext){
      navigate("/login")
    }
  }
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
          
            <button className="ncb1" style={{background:"#eeba2b" ,color:"black",height:"55px",borderRadius:"25px"}}   onClick={handleMakeIntroClick}>MAKE INTRODUCTION INSTANTLY</button>
       
         
            <button style={{background:"#eeba2b" ,color:"black",height:"55px",borderRadius:"25px"}} className="bttborder" onClick={handleDashboard}>
              <span>DASHBOARD</span>
            </button>
          
        </div>
      </div>
      <div className="home-details">
        <div className="hd1">
         
          <div className="hd1-details">
            <h1 style={{fontSize:"25px"}}>
              Strengthening your reputation, while strengthening your
              Trusted-Relationships.
            </h1>
           {showtext &&(<div> <p style={{color:"#f96b39",fontWeight:"700"}}>1.Sign up for your 14-day trial</p>
            <p style={{color:"#f96b39",fontWeight:"700"}}>2.Create your Account</p>
            <p style={{color:"#f96b39",fontWeight:"700"}}>3.Add your contacts to your account</p>
            <p style={{color:"#f96b39",fontWeight:"700"}}>4.Start Making Introductions</p>
            <p style={{color:"#f96b39",fontWeight:"700"}}>5.Use your Dashboard for Results</p><br/><Link to='/register'><button style={{color:"black",background:"#eeba2b",height:"45px",borderRadius:"20px"}}>JOIN NOW</button></Link></div>
                  
          )} 
           
          </div>
          <div className="hd1-pic">
            <img src="https://tracs.app/public/uploads/website-images/home-img3.jpeg" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="line-1">
          <p style={{fontSize:"18px",fontWeight:"700" ,marginBottom:"40px"}}>

            Welcome to <span style={{ color: "#f96b39" }}>TRACS</span>, your
            go-to source for connecting with a diverse community of talented
            individuals. Connect, Collaborate, and build meaningful
            relationships within our vibrant community.
          </p>
        </div>
     {/* {isLoggedIn && ( <div className="hd2">
          
          <div className="hd2-pic">
            <img src='https://tracs.app/public/uploads/website-images/home-img1.jpeg' style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="hd2-details">
            <h3 style={{textAlign:"center",color:"#27479e",textDecoration:"underline"}}>SUBSCRIBE</h3>
            <h3 style={{color:"black"}}>Become a part of our growing community!</h3>
            <p style={{color:"#f96b39",fontWeight:"700"}}>Joining is easy:</p>
            <p style={{color:"#f96b39",fontWeight:"700"}}>1.Sign up for your 14-day trial</p>
            <p style={{color:"#f96b39",fontWeight:"700"}}>2.Create your Account</p>
            <p style={{color:"#f96b39",fontWeight:"700"}}>3.Add your contacts to your account</p>
            <p style={{color:"#f96b39",fontWeight:"700"}}>4.Start Making Introductions</p>
            <p style={{color:"#f96b39",fontWeight:"700"}}>5.Use your Dashboard for Results</p>
          </div>
        </div>)} */} 
       
      </div>

      <Footer />
    </div>
  );
};
export default Home;
