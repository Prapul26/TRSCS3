import React, { useState } from "react";
import "./Password.css";
import UserHeader from "../components/UserHeader";
import SideNav from "./SideNav";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import { Link } from "react-router-dom";
const Password = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className="mobMenuaa">
      <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
      <div style={{ width: "100%" }}>
        <UserHeader />

        <div className="OMH">
          <div className="usernav">
            <SideNav />
          </div>
          <MobileNavbar showMobnav={showMobnav} />
          <div className="fz2">
           
          <div className="d-header" >
            <h2>Change Password</h2>
            
          </div>
          <div className="passChange" style={{ whiteSpace: "nowrap" }}>
              
              <div>
                <label>Current Password:</label>
                <br />
                <input />
              </div>
              <div>
                <label>New Password:</label>
                <br />
                <input />
                <br />
                <p>
                  Note: Password must be at least 8 characters long (12+
                  recommended) and
                </p>
                <p>
                  include at least one uppercase letter, one lowercase letter,
                  one number, and one
                </p>
                <p>special character (!”#$%&'()*+,-./:;?@[]^_`{}~).</p>
              </div>
              <div style={{ marginTop: "50px" }}>
                <label>Conform Password:</label>
                <br />
                <input />
              </div>
              <div className="passButton">
                {" "}
                <button style={{ background: "gold" }}>Update</button>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Password;
