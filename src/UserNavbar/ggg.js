import React, { useState } from "react";
import "./Password.css";
import UserHeader from "../components/UserHeader";
import SideNav from "./SideNav";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import MobileMenu from "../components/MobileMenu/MobileMenu";
const Password = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className="mobMenuaa">
      <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
      <div>
        <UserHeader />
        <div className="passwordContainer">
          <div className="usernav">
            <SideNav />
          </div>
          <div className="passwordHolder">
            <div style={{ marginLeft: "0px" }}>
              <MobileNavbar showMobnav={showMobnav} />
            </div>

            <div className="passChange">
              <div className="d-header">
                <h2>Change Password</h2>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
