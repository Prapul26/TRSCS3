import React, { useEffect } from "react";
import "./Email.css";
import UserHeader from "../components/UserHeader";
import { FaFileSignature } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdOutlineCardMembership } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
const Email = () => {
    const[intro,showIntro]=useState(false)
    const [settings,showSettings]=useState(false);
     const [showSidebar, setShowSidebar] = useState(false);
     const [templates, setTemplates] = useState([]);
     const [error, setError] = useState("");
       const showMobnav = () => {
         setShowSidebar(prev => !prev);
     
       };
       const handelSettings=()=>{
        showSettings(!settings);
       }
    const handelIntro=()=>{
      showIntro(!intro)
    }

    useEffect(() => {
      let isCalled = false;
      const fetchTemplates = async () => {
        if (isCalled) return;
        isCalled = true;
    
        const token = localStorage.getItem("authToken");
        try {
          const response = await axios.get("https://tracsdev.apttechsol.com/api/view-template-list", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTemplates(response.data.templates.data);
        } catch (err) {
          setError(err.response?.data?.message || "Failed to fetch templates.");
        }
      };
      fetchTemplates();
    }, []);
    
    const handleDelete = (id) => {
      const updatedTemplates = templates.filter((template) => template.id !== id);
      setTemplates(updatedTemplates);
    };

  return (
    <div className='mobMenuaa'>
<div className='mobMenu33'>
{showSidebar && (<MobileMenu />)}
</div>
    <div> <UserHeader />
    
<div className="EMPPP">
  <div className="usernav">
                   <SideNav/>
                   </div>
    <div  className="EMPP">
     <MobileNavbar showMobnav={showMobnav}/>
      <div className="d-header">
      <h2>Email Template</h2>
      </div>
      <div className="addTemplateButton">
      <Link to="/addTemplate"><button style={{ background: "green" }}> Add Template</button></Link>  
      </div>
      <div className="Email-container">
        <table>
          <thead>
            <tr>
              <td style={{color:"black"}}>Name</td>
              <td style={{color:"black"}}>Category</td>
              <td style={{color:"black"}}>Subject</td>
              <td style={{color:"black"}} >Body</td>
              <td style={{color:"black"}}>Created On</td>
              <td style={{color:"black"}}>Action</td>
              <td style={{color:"black"}}>Status</td>
            </tr>
          </thead>
          <tbody>
          {templates.map((template) => (
                    <tr key={template.id}>
                      <td><p>{template.template_name}</p></td>
                      <td><p>{template.category_id}</p></td>
                      <td><p>{template.subject || "N/A"}</p></td>
                      <td dangerouslySetInnerHTML={{ __html: template.email_body }}></td>
                      <td><p>{new Date(template.created_at).toLocaleDateString()}</p></td>
                      <td>
                        <button style={{ backgroundColor: "green" }}>Edit</button>
                        <button style={{ backgroundColor: "red" }}  onClick={() => handleDelete(template.id)} >Delete</button>
                      </td>
                      <td>
                        <button>{template.status === "1" ? "Active" : "Inactive"}</button>
                      </td>
                    </tr>
                  ))}
                  {templates.length === 0 && (
                    <tr>
                      <td colSpan="6"><p>No templates available.</p></td>
                    </tr>
                  )}
            
          </tbody>
        </table>
      </div>
    </div></div></div></div>
  );
};

export default Email;
