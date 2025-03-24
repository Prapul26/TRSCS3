import React from "react";
import "./AddContacts.css";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
const AddContacts = () => {
  return (
    <div className="addcon">
      <UserHeader />
      <div style={{marginLeft:"20px"}}> <button style={{ borderRadius: "30px", border: "transparent" }}><span><Link to='/contacts'><TiArrowBackOutline color='white' size={35} /></Link></span> </button></div>

      <div className="addContacts-container">
        <form>
          <label>
            First Name<span style={{color:"red"}}>*</span>
          </label><br/>

          <input type="text" /><br/>
          <label>
            Last Name<span  style={{color:"red"}}>*</span>
          </label><br/>

          <input type="text" /><br/>
          <label>
            Email<span  style={{color:"red"}}>*</span>
          </label><br/>
          <input type="text" />
          <div className="saveContactsButton">
          <button type="submit">SAVE</button></div>
        </form>
      </div>
    </div>
  );
};

export default AddContacts;
