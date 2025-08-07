import React, { useState } from "react";
import "./AddContacts.css";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";
import SideNav from "./SideNav";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import MobileMenu from "../components/MobileMenu/MobileMenu";
const AddContacts = () => {
  const[firstName ,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[groupName,setGroupName]=useState("")
  const[message,setMessage]=useState("");
   const [showSidebar, setShowSidebar] = useState(false);
  
   const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
const handleSubmit =async (e)=>{
e.preventDefault();
const token=sessionStorage.getItem("authToken")
if (!firstName || !lastName || !email || !groupName) {
  setMessage("Please fill in all required fields.");
  return;
}
try{
  const response =await axios.post(`${process.env.REACT_APP_API_BASE_URL}/contact_store_form`,
    {
first_name : firstName,
last_name : lastName,
email : email,
group_name : groupName

    },{
      headers :{
       Authorization: `Bearer ${token}`
      }
    }
  );
  setMessage("Contact added successfully!");
}
catch (error){
setMessage(error.response?.data?.message || "Error adding the Contact")
}
}
  return (
    <div className="addcon">
      <UserHeader />{showSidebar && <MobileMenu />}
    <div className="usernav">
            <SideNav />
          </div>
      <div className="addconHolder">
          <MobileNavbar  showMobnav={showMobnav}  />
        <div className="d-header">
                <h2>Add Contacts</h2>
              </div>
      <div style={{marginLeft:"20px"}}> <button style={{ borderRadius: "30px", border: "transparent" }}><span><Link to='/contacts'><TiArrowBackOutline color='white' size={35} /></Link></span> </button></div>

      <div className="addContacts-container">
        <form onSubmit={handleSubmit}>
          <label>
            First Name<span style={{color:"red"}}>*</span>
          </label><br/>

          <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/><br/>
          <label>
            Last Name<span  style={{color:"red"}}>*</span>
          </label><br/>

          <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/><br/>
          <label>
            Group Name<span  style={{color:"red"}}>*</span>
          </label><br/>

          <input type="text" value={groupName} onChange={(e)=>setGroupName(e.target.value)}/><br/>
          <label>
            Email<span  style={{color:"red"}}>*</span>
          </label><br/>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <div className="saveContactsButton">
          <div><button type="submit" style={{background:"#eeba2b",color:"black",marginRight:"40px"}}>SAVE</button></div><div><Link to='/contacts'><button>cancel</button></Link></div></div>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
      </div>
    </div>
  );
};

export default AddContacts;
