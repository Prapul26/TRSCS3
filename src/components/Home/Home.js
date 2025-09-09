import React, { useEffect, useState } from "react";
import "./Home.css";
import Slider from "react-slick";
import imgage from "../../assets/image.png"
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
import image from "../../assets/image2.png"

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
    const token = sessionStorage.getItem("authToken");
    navigate("/whatIsMakeIntro");
  };

  const handleDashboard = () => {
    const token = localStorage.getItem("authToken");
    navigate("/inbox");
  };

  return (
    <div className="homeHolder">
      <Header />
      <Navbar />
    
      <div className="home-details">
        <div style={{textAlign:"center"}} className="hd0"><h3>Total Referral Advanced Conversion System</h3></div>
        <div className="hd1">

          <div className="hd1-details">
            
            <div><h3>TRACS helps you effortlessly connect and make introductions like a champion!</h3></div>
            <div>{isLoggedIn ?<Link to="/inbox"><button className="ncb1">DASHBOARD</button></Link> :<Link to='/whatIsMakeIntro'><button className="ncb1" >LEARN MORE</button></Link>}</div>


           

          </div>
          <div className="hd1-pic">
            <img src={imgage} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="down2" style={{textAlign:"center"}}>
          <div><h3>How it Works</h3></div>
          <div><p>Strengthening your reputation, while strengthening your Trusted-Relationships.</p></div>
          <div><img  src={image}/></div>
        </div>
        

      </div>

      <Footer />
    </div>
  );
};
export default Home;
