import React, { useState } from "react";
import "./MessageDetails.css";
import UserHeader from "../components/UserHeader";
import SideNav from "./SideNav";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import { Link } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import MobileMenu from "../components/MobileMenu/MobileMenu";
const MessageDetails = () => {
  const [template, setTemplate] = useState(false);;
  const [showReply,setReply]=useState(false);
   const [showSidebar, setShowSidebar] = useState(false);
  
     const showMobnav = () => {
       setShowSidebar(prev => !prev);
   
     };
  
  const handelTemplate = () => {
    setTemplate(!template);
  };
  const handelShowReply=()=>{
    setReply(!showReply);
  }
  return (
    <div className='mobMenuaa'>
    <div className='mobMenu33'>
    {showSidebar && (<MobileMenu />)}
    </div>
    <div>
      <UserHeader />
      <div className="mdppp">
        <div className="usernav">
          <SideNav />
        </div>
        <div className="mdpp">
          <MobileNavbar showMobnav={showMobnav}/>
          <div className="d-header">
            <h2>Messages</h2>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
               <div style={{marginLeft:"20px"}}> <button style={{ borderRadius: "30px", border: "transparent" }}><span><Link to='/inbox'><TiArrowBackOutline color='white' size={35} /></Link></span> </button></div>
         
          <div style={{marginRight:"20px",marginTop:"10px"}}>
            <button onClick={handelShowReply}>Reply</button>
          </div>
          </div>
          <div className="messageDetails-container">
            { showReply && <div>
            <div className="select-holder">
              <div className="toHolder">
                <h3>To</h3>
                <br />
                <select>
                  <option value="" disabled selected>
                    select
                  </option>
                  <option value="naresh@yop.com"> Naresh@yop.com</option>
                  <option value="suresh@yop.com"> Sureh@yop.com</option>
                </select>
              </div>
              <div className="templateHolder">
                <div onClick={handelTemplate}>
                  <h3>Email Template</h3>
                  <br />
                  <div className="emailTemplateInput">
                    <div style={{ marginTop: "5px" }}>
                      <h4>Select Template</h4>
                    </div>
                    <div>
                      <FaSortDown />
                    </div>
                  </div>
                </div>
                {template && (
                  <div className="templateSetHolder">
                    <div>
                      {" "}
                      <input />
                    </div>
                    <div>
                      <button>Select</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="messageRead">
              <h3>Message:</h3>
              <textarea
                placeholder="  
    
Thanks,
Thanks
Santhosh Nelli
8374818142
SKN IT Solutions"
              ></textarea>
            </div>
            <div className="signature">
              <div class="checkbox-container">
                <div>
                  {" "}
                  <input type="checkbox" id="include-signature" />
                </div>
                <div>
                  {" "}
                  <label for="include-signature">Include Signature</label>
                </div>
                <div style={{ marginLeft: "5px", marginTop: "3px" }}>
                  <AiTwotoneQuestionCircle />
                </div>
              </div>
              <div class="button-container">
                <button>Send</button>
              </div>
            </div></div>}
           
            <div className="messageHeader">
<div className="headerHeading">
    <h3>Introduction - Mahesh Kumar and Naresh Kumar</h3>
</div>
<div className="hoverall">
<div className="MessageInDetail">
    <div className="messageDetails">
        <div className="mpicmname">
            <div className="mPic"><img src="https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9"/></div>
            <div className="mName"><h2>Mahesh Kumar</h2></div>
        </div>
        <div className="mdate">
            <h3>January, 22 2025 11:13 am</h3>
        </div>
    </div>
    <div className="messageData">
        <p>    Hi Santhosh</p><br/>
        <p>Thanks for referring Naresh to me </p><br/>
        <p>This is a great opportunity for both</p><br/>
        <p>Thanks<br/>
        Mahesh Kumar</p>
    </div>
</div></div>
<div className="hoverall">
<div className="MessageInDetail">
    <div className="messageDetails">
        <div className="mpicmname">
            <div className="mPic"><img src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"/></div>
            <div className="mName"><h2> S Kumar Nelli</h2></div>
        </div>
        <div className="mdate">
            <h3>January, 22 2025 10:47 am</h3>
        </div>
    </div>
    <div className="messageData">
        <p>    Hi [[member_first_name]] [[member_last_name]]</p><br/>
        <p>I want to introduce you to [[contact_first_name]] [[contact_last_name]] </p><br/>
        <p>[[contact_first_name]] [[contact_last_name]] is a Friend of mine and he needs a </p><br/>
       <p>Can one of you reply to schedule that 1:1? </p><br/>
        <p>S Kumar Nelli<br/>
        santhosh.nelli640@gmail.com</p>
    </div>
</div></div>
             </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default MessageDetails;
