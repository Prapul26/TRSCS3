import React, { useEffect } from "react";
import "./Email.css";
import UserHeader from "../components/UserHeader";
import { FaCircle, FaFileSignature } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdModeEdit, MdOutlineCardMembership } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { RiContactsFill, RiDeleteBin6Line } from "react-icons/ri";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
const Email = ( ) => {
  const navigate=useNavigate();
  const handleEdit = (id) => {
    const base64Id = btoa(id.toString()); // Encode ID to Base64
    navigate(`/editTemplate/${base64Id}`);
  };
    const[intro,showIntro]=useState(false)
    const [settings,showSettings]=useState(false);
     const [showSidebar, setShowSidebar] = useState(false);
     const [templates, setTemplates] = useState([]);
     const [error, setError] = useState("");
      const [isActive, setIsActive] = useState(false);
      
   const handleToggle = () => {
    setIsActive(!isActive);
    alert("Status successfully updated");
  };
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
          const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/view-template-list`, {
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
    
   const handleDelete = async (id) => {
  const token = localStorage.getItem("authToken");

  try {
    await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/destroy-template/${id}`,
      
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  const updatedTemplates = templates.filter((template) => template.id !== id);
      setTemplates(updatedTemplates);
  } catch (err) {
    console.error("Delete failed:", err);
    setError("Failed to delete the contact.");
  }
};
  const stripHtmlTags = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
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
      <h2>Templates</h2>
      </div>
      <div className="addTemplateButton">
      <Link to="/addTemplate"><button style={{     backgroundColor:" #163b6d !important"
 }}> Add Template</button></Link>  
      </div>

     
      <div className="Email-container"> <div style={{padding:"10px",background:'white',overflowX:"auto"}}>

        <table>
          <thead>
            <tr>
              <td style={{color:"black" ,fontSize:"16px"}}>Name</td>
              <td style={{color:"black",fontSize:"16px"}}>Category</td>
              <td style={{color:"black",fontSize:"16px"}}>Subject</td>
              <td style={{color:"black",fontSize:"16px"}} >Body</td>
              <td style={{color:"black",fontSize:"16px"}}>Created On</td>
              <td style={{color:"black",fontSize:"16px"}}>Action</td>
              <td style={{color:"black",fontSize:"16px"}}>Status</td>
            </tr>
          </thead>
          <tbody>
          {templates.map((template) => (
                    <tr key={template.id}>
                      <td><p>{template.template_name}</p></td>
                      <td><p>{template.category_id === "6" ?"Reply-Email":template.category_id === "2" ?"Introduction-Email":template.category_id === "3" ?"Bump":template.category_id === "4" ?"Follow-up":template.category_id === "5" ?"Member-Email":template.category_id?.toString()}</p></td>
                      <td><p>{template.subject || "N/A"}</p></td>
<td
  onClick={() =>
    navigate("/viewTemplate", {
      state: { emailBody: template.email_body },
    })
  }
  style={{
    width: "400px",
    maxWidth: "400px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    cursor: "pointer",
  
  }}
>
  <p style={{ margin: 0 }}>{stripHtmlTags(template.email_body)}</p>
</td>        
<td>
  <p>{new Date(template.created_at).toISOString().split("T")[0]}</p>
</td>            <td>
                        <button style={{ backgroundColor: "green" }}  onClick={() => handleEdit(template.id)}><MdModeEdit />
</button>
                        <button style={{ backgroundColor: "red" }}  onClick={() => handleDelete(template.id)} ><RiDeleteBin6Line />
</button>
                      </td>
                      <td>
                      <div
      className={`statusbar ${isActive ? "active" : ""}`}
      onClick={handleToggle}
    >
      <FaCircle color="white" />
    </div>
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
      </div>
    </div></div></div></div>
  );
};

export default Email;
