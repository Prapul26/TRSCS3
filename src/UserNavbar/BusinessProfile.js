import React, { useState } from "react";
import "./BusinessProfile.css";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";
const BusinessProfile = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div>
      <UserHeader />
      <div className="c-header">
        <div className="c-h1">
          <h3>Business Profile</h3>
        </div>
        <div className="c-h2">
          <p>Home</p>
          <span>.</span>
          <p>Dashboard</p>
          <span>.</span>
          <p>Business Profile</p>
        </div>
      </div>
    <Link to='/createBusinessProfile'><div className="businessButton">
        <button>Create Business Profile</button>
      </div></Link>  
      <br />
      <div className="activeStatus">
        <div className="activeStatus-holder">
          <div
            className={`active ${activeTab === "active" ? "selected" : ""}`}
            onClick={() => setActiveTab("active")}
          >
            <h3>Active</h3>
            <span
              style={{
                height: "26px",
                borderRadius: "50%",
                background: "green",
                width: "26px",
                marginLeft: "6px",
                textAlign: "center",
                color: "white",
                lineHeight: "26px",
              }}
            >
              0
            </span>
          </div>
          <div
            className={`inactive ${activeTab === "inactive" ? "selected" : ""}`}
            onClick={() => setActiveTab("inactive")}
          >
            <h3>Inactive</h3>
            <span
              style={{
                height: "26px",
                borderRadius: "50%",
                background: "red",
                width: "26px",
                marginLeft: "6px",
                textAlign: "center",
                color: "white",
                lineHeight: "26px",
              }}
            >
              0
            </span>
          </div>
        </div>
        {activeTab === "active" ? (
          <div className="result">
            <h1>No Active Results Found</h1>
          </div>
        ) : (
          <div className="result">
            <h1>No Inactive Results Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessProfile;
