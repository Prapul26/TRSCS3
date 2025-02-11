import React from "react";
import "./Signature.css";
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
const Signature = () => {
  const [intro, showIntro] = useState(false);
  const [settings,showSettings]=useState(false);
     const handelSettings=()=>{
      showSettings(!settings);
     }
  const handelIntro = () => {
    showIntro(!intro);
  };
  return (
    <div>
      <UserHeader />
      
      <div className="SPPP">
       <div className="usernav">
                     <SideNav/>
                        </div>
        <div className="SPP"><MobileNavbar />
          <div className="signature-holder">
            <form>
              <label>
                <h2>Signature</h2>
              </label>
              <br />
              <textarea
                placeholder=" Name:
        Identity Name:
        Email:
        Calender:"
              />
              <br />
              <button>SAVE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signature;
