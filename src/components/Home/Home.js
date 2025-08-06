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
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showtext, setText] = useState(true)

  const [token, setToken] = useState(null);

useEffect(() => {
  const token = sessionStorage.getItem("authToken");
  setToken(token);
  setIsLoggedIn(!!token);
  setText(!token);

  const logout = () => {
    sessionStorage.removeItem("authToken");
    setToken(null);
    setIsLoggedIn(false);
    setText(true);
    navigate("/login");
  };

  // --- Inactivity Tracking ---
  const updateLastActivity = () => {
    localStorage.setItem("lastActivityTime", Date.now().toString());
  };

  const checkInactivity = () => {
    const lastActivity = parseInt(localStorage.getItem("lastActivityTime"), 10);
    if (!lastActivity) return;

    const now = Date.now();
    const diff = now - lastActivity;

    if (diff > 10 * 60 * 1000) {
      logout(); // 10 minutes of inactivity
    }
  };

  // --- Detect user activity ---
  const activityEvents = ["mousemove", "keydown", "click", "scroll"];
  activityEvents.forEach((event) =>
    window.addEventListener(event, updateLastActivity)
  );
  updateLastActivity(); // Set initial

  // --- Detect visibility change ---
  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      updateLastActivity(); // Save timestamp on tab close
    } else {
      checkInactivity(); // Check if user was idle too long
    }
  };
  document.addEventListener("visibilitychange", handleVisibilityChange);

  // --- Cleanup ---
  return () => {
    activityEvents.forEach((event) =>
      window.removeEventListener(event, updateLastActivity)
    );
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };
}, [navigate]);


  const handleMakeIntroClick = () => {
    const token = localStorage.getItem("authToken");
    navigate("/login");
  };

  const handleDashboard = () => {
    const token = localStorage.getItem("authToken");
    navigate("/inbox" );
  };

  return (
    <div className="homeHolder">
      <Header />
      <Navbar />
      <div className="serch-container" >
        <div className="sh2">
          <h2 style={{ color: "white" }}>
            TRACS helps you effortlessly connect and make introductions like a
            champion !
          </h2>
        </div>

        <div className="network-container">

{isLoggedIn?(<button style={{
        borderRadius: "40px",
        padding: "13px 30px",
        fontSize: "17px",
      }} onClick={handleDashboard} >DASHBOARD</button>):(   <button style={{
        borderRadius: "40px",
        padding: "13px 30px",
        fontSize: "17px",
      }} onClick={handleMakeIntroClick}> MAKE INTRODUCTION INSTANTLY </button>)}
       
          
    { /*  {isLoggedIn ? (
    <button
      style={{
        borderRadius: "40px",
        padding: "13px 30px",
        fontSize: "17px",
      }}
      className="bttborder active"
      onClick={handleDashboard}
    >
      <span>DASHBOARD</span>
    </button>
  ) : (
    <button
      className="ncb1"
      style={{
        borderRadius: "40px",
        padding: "13px 30px",
        fontSize: "17px",
      }}
      onClick={handleMakeIntroClick}
    >
      MAKE INTRODUCTION INSTANTLY
    </button>
      )}  */} 
</div>

      </div>
      <div className="home-details">
        <div className="hd1">

          <div className="hd1-details">
            <h1 style={{ fontSize: "25px" }}>
              Strengthening your reputation, while strengthening your
              Trusted-Relationships.
            </h1>


            {!isLoggedIn && (<div className="rfgg"> <p style={{ color: "#f96b39", fontWeight: "700", marginLeft: "20px" }}>1.Sign up for your 14-day trial</p>
              <p style={{ color: "#f96b39", fontWeight: "700", marginLeft: "20px", marginTop: "-4px" }}>2.Create your Account</p>
              <p style={{ color: "#f96b39", fontWeight: "700", marginLeft: "20px", marginTop: "-4px" }}>3.Add your contacts to your account</p>
              <p style={{ color: "#f96b39", fontWeight: "700", marginLeft: "20px", marginTop: "-4px" }}>4.Start Making Introductions</p>
              <p style={{ color: "#f96b39", fontWeight: "700", marginLeft: "20px", marginTop: "-4px" }}>5.Use your Dashboard for Results</p><br /><Link to='/register'><button style={{ color: "black", background: "#eeba2b", height: "45px", borderRadius: "30px", marginTop: "-20px" }}>JOIN NOW</button></Link></div>

            )}


          </div>
          <div className="hd1-pic">
            <img src="https://tracs.app/public/uploads/website-images/home-img3.jpeg" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="line-1">
          <p style={{ fontSize: "18px", fontWeight: "700", marginBottom: "77px" }}>

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
