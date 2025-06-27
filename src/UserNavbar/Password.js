import React, { useState } from "react";
import "./Password.css";
import UserHeader from "../components/UserHeader";
import SideNav from "./SideNav";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import { Link } from "react-router-dom";
import axios from "axios";
const Password = () => {
  const [message,setMessage]=useState("")
  const [showSidebar, setShowSidebar] = useState(false);
const[currentPassword,setCurrentPassword]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState('');
const handleSubmit = async (e) => {
  e.preventDefault();
  if(password !== confirmPassword){
    setMessage("New password and confirm password do not match.")
  }
  const token = localStorage.getItem("authToken")
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/update-password`, {
      current_password:currentPassword,
      password: password,
      password_confirmation: confirmPassword
    },
    {headers: {
      Authorization: `Bearer ${token}`,
    }});

    setMessage("Password updated successfully!");
  } catch (error) {
    setMessage(error.response?.data?.message || "Error updating the password");
  }
};
  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className="mobMenuaa">
      <form onSubmit={handleSubmit}>
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
                <input value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)} required />
              </div>
              <div>
                <label>New Password:</label>
                <br />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} required/>
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
                <input value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
              </div>
              <div className="passButton">
                {" "}
                <button type="submit" style={{ background: "gold" }}>Update</button>
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>{" "}
        </div>
      </div></form>
    </div>
  );
};

export default Password;
