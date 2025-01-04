import React from "react";
import "./AddContacts.css";
import UserHeader from "../components/UserHeader";
const AddContacts = () => {
  return (
    <div>
      <UserHeader />
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
