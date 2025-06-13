import React, { useState } from "react";
import "./EditTemplate.css";
import UserHeader from "../components/UserHeader";
import { Link, useParams } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import axios from "axios";
const EditContact = () => {
    const {id}=useParams();
  const[firstName ,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[groupName,setGroupName]=useState("")
  const[message,setMessage]=useState("")
const handleSubmit =async (e)=>{
e.preventDefault();
const token=localStorage.getItem("authToken")
if (!firstName || !lastName || !email || !groupName) {
  setMessage("Please fill in all required fields.");
  return;
}
try{
  const response =await axios.post(`https://tracsdev.apttechsol.com/api/contact_edit_form/${id}`,
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
      <UserHeader />
      <div style={{marginLeft:"20px"}}> <button style={{ borderRadius: "30px", border: "transparent" }}><span><Link to='/contacts'><TiArrowBackOutline color='white' size={35} /></Link></span> </button></div>

      <div className="EditContact-container">
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
          <button type="submit">SAVE</button></div>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default EditContact;
