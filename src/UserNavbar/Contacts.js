import React from "react";
import "./Contacts.css";
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
const Contacts = () => {
  const[intro,showIntro]=useState(false)
  const [settings,showSettings]=useState(false);
     const handelSettings=()=>{
      showSettings(!settings);
     }
    const handelIntro=()=>{
      showIntro(!intro)
    }
  return (
    <div><UserHeader />
    <MobileNavbar/>
      <div className="CPPPPP">
         <div className="usernav">
                       <SideNav/>
                          </div>
    <div  className="CPP">
      
      <div className="contacts-container">
        <div className="c-header">
          <div className="c-h1">
            <h3>Contacts Management Template</h3>
          </div>
          <div className="c-h2">
            <p>Home</p>
            <span>.</span>
            <p>Dashboard</p>
            <span>.</span>
            <p>contacts management template</p>
          </div>
        </div>
        <div className="contacts-buttons">
          <div className="import">
            <div>
              <input type="file" />
            </div>
            <div className="importB">
              <button>Import</button>
            </div>
          </div>
          <div className="add">
            <div className="downloadB">
              <button>Download Template</button>
            </div>
            <div className="addB">
             <Link to='/addContacts' style={{textDecoration:"none",color:"inherit"}}> <button>Add Contacts</button></Link> 
            </div>
          </div>
        </div>
        <div className="contacts-table">
            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Group name</td>
                        <td>Email</td>
                        <td>Created On</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>dawda</td>
                        <td>awdad</td>
                        <td>H7 member</td>
                        <td>awdad</td>
                        <td>awdad</td>
                        <td ><button style={{background:"green"}}>edit</button><button style={{background:"red"}}>delete</button></td>
                    </tr>
                    <tr>
                        <td>dawda</td>
                        <td>awdad</td>
                        <td>TRACS member</td>

                        <td>awdad</td>
                        <td>awdad</td>
                        <td ><button style={{background:"green"}}>edit</button><button style={{background:"red"}}>delete</button></td>
                    </tr>
                    <tr>
                        <td>dawda</td>
                        <td>awdad</td>
                        <td>H7 member</td>

                        <td>awdad</td>
                        <td>awdad</td>
                        <td ><button style={{background:"green"}}>edit</button><button style={{background:"red"}}>delete</button></td>
                    </tr>
                    <tr>
                        <td>dawda</td>
                        <td>awdad</td>
                        <td>Tracs member</td>

                        <td>awdad</td>
                        <td>awdad</td>
                        <td ><button style={{background:"green"}}>edit</button><button style={{background:"red"}}>delete</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
      </div>
    </div></div>
    </div>
  );
};

export default Contacts;
