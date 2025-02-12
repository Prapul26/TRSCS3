import React, { useState } from "react";
import "./Reply.css";
import { Link } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import SideNav from "./SideNav";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import { IoReturnDownForward } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
const Reply = () => {
    const[mail,setMail]=useState(false);
    const showMail=()=>{
        setMail(!mail)
    }
  return (
    <div className="rrr">
      {" "}
      <UserHeader />
      <div className="reply-page">
        <div>
          <SideNav />
        </div>
        <div className="reply-container">
            <MobileNavbar/>
          <div className="c-header">
            <div className="c-h1">
              <h3>Reply</h3>
            </div>
            <div className="c-h2">
              <Link to="/home">
                {" "}
                <p>Home</p>
              </Link>
              <span>.</span>
              <Link to="/myMembership">
                <p>Dashboard</p>
              </Link>
              <span>.</span>
              <Link to="/reply">
                <p>Reply</p>
              </Link>
            </div>
          </div>
          <div style={{ marginLeft: "20px", borderRadius: "5px" }}>
            <Link to="/"></Link>
          <Link to='/inbox'><button>Back</button></Link>  
          </div>
          <div className="reply-holder">
            <div className="data-holder">
              <div className="mailDrop">
                <div>
                  <h2 style={{ color: "black", fontSize: "large" }}>To:</h2>
                </div>
                <div className="mailDrop1" onClick={showMail}>
                  <p>sample@gmail.com</p>
                  <div style={{ marginTop: "14px", marginLeft: "10px" }}>
                    <IoMdArrowDropdown size={20} color="blue" />
                  </div>
                 
                </div> { mail && <div className="mailDrop">
                    <input type="checkbox"/>Sample mail</div>}
              </div>
              <div className="mailSearch">
                <div>
                  <h2 style={{ color: "black", fontSize: "large" }}>
                    Email Template :
                  </h2>
                </div>
                <div>
                  <select>
                    <option>Reply 1</option>
                    <option>Reply2</option>
                    <option>Reply 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="replyMessage">
              <div>
                <h2 style={{ color: "black", fontSize: "large" }}>Message:</h2>
              </div>
              <div className="replyText">
                <textarea />
              </div>
              <div style={{ display: "flex" }}>
                <input type="checkbox" color="blue" />
                <p>Include Signature</p>
              </div>
            </div>
            <div className="sendReply">
              <button>Send</button>
            </div>
            <div className="replySubject">
<div className="replyIntro">
    <h2>Subject:Introduction - sample</h2>
</div>
<div className="replyData">
<div className="mailDAta">
<div style={{display:"flex" ,marginTop:"10px"}}>
    <div className="iconpp"><img src="https://tracsdev.apttechsol.com/public/uploads/custom-images/user-2024-07-09-02-52-30-9248.png" /></div>
    <div style={{marginTop:"20px",marginLeft:"10px"}}><h4> santhosh kumar</h4></div>
</div>
<div><h5>February, 12 2025 01:39 am</h5></div>
</div><br/>
<h4>Hi [[contact_first_name]] [[contact_last_name]]</h4><br/>
<h4>I hope this email finds you well!</h4><br/>
<h4>I wanted to introduce you to my good friend, [[contact_first_name]]. [[contact_first_name]] is a a skilled and passionate software engineer who has made a significant impact in the tech industry, and I believe they would be a valuable addition to the Business Network.</h4><br/>
<h4>I’ve spoken highly of the H7 Network and thought it would be a great opportunity for both of you to connect. I’m confident that you’ll both find mutual interests and have meaningful conversations.</h4><br/>
<h4>Best regards,</h4><br/>
<h4>TRACS Member</h4><br/>
<h4>Sample</h4><br/>
<h4>6326231515</h4><br/>
<h4>Sample@mail.com</h4><br/>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
