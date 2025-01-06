import React from "react";
import UserHeader from "../components/UserHeader";
import "./AccountSettings.css";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const AccountSettings = () => {
  return (
    <div className="fz1">
      <UserHeader />
      <div className="contacts-container">
        <div className="c-header">
          <div className="c-h1">
            <h3>My Profile</h3>
          </div>
          <div className="c-h2">
            <p>Home</p>
            <span>.</span>
            <p>Dashboard</p>
            <span>.</span>
            <p>my profile</p>
          </div>
        </div>
      </div>
      <div className="prc1">
        <div className="profileContainer1">
          <div className="pc11">
            <label>Name</label>
            <br />
            <div className="nameInput">
              <div style={{ marginTop: "0px", marginLeft: "9px" }}>
                <MdPerson size={30} />
              </div>
              <input type="text" />
            </div>
            <div className="pc111">
              <div className="phone">
                <label>Phone</label>
                <br />
                <div className="phoneInput">
                  <div style={{ marginTop: "6px", marginLeft: "10px" }}>
                    <FaPhoneAlt size={22} />
                  </div>
                  <input type="text" />
                </div>
              </div>
              <div className="email">
                <label>Email</label>
                <br />
                <div className="emailInput">
                  {" "}
                  <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                    <MdOutlineMailOutline size={26} />
                  </div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <label>About Me</label>
            <br />
            <textarea className="textArea" />
            <br />
            <label>Address</label>
            <br />
            <div className="addressInput">
              <div style={{ marginTop: "3.5px", marginLeft: "10px" }}>
                <IoLocationSharp size={26} />
              </div>
              <input type="text" />
            </div>
          </div>
          <div className="pc12">
            <div className="proPic">
              <img
                src="https://tracsdev.apttechsol.com/public/uploads/custom-images/user-2024-07-09-02-52-30-9248.png"
                style={{ height: "100%", width: "100%" }}
              />
              <div>
                <button style={{ background: "orange" }}>Upload Image</button>
              </div>
            </div>
          </div>
        </div>
        <div className="update1">
          <button  style={{background:"orange"}}>Update</button>
        </div>{" "}
      </div>
      <div className="profileContainer2">
        <div className="changeph1">
          <h2>Change Password</h2>
        </div>
        <div className="currentnewp">
          <div className="current">
            <label>Current Password</label>
            <br />
            <div className="currentInput">
              <div  style={{marginTop:"3px"}}>
                <FaLock size={24}/>
              </div>{" "}
              <input type="text" />
            </div>
          </div>
          <div className="new">
            <label>New Password</label>
            <br />
            <div className="newInput">
              <div style={{marginTop:"3px"}}>
                <FaLock size={24}/>
              </div>{" "}
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="confirm">
          <label>Confirm Password</label>
          <br />
          <div className="confirmInput">
            <div style={{marginTop:"3px"}}>
              <FaLock size={24} />
            </div>{" "}
            <input type="text" />
          </div>
        </div>
        <div className="update2">
          <button style={{background:"orange"}}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;