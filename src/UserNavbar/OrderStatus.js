import React from "react";
import "./OrderStatus.css";
import { Link } from "react-router-dom";
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
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
const OrderStatus = () => {
   const[intro,showIntro]=useState(false)
   const [settings,showSettings]=useState(false);
      const handelSettings=()=>{
       showSettings(!settings);
      }
        const handelIntro=()=>{
          showIntro(!intro)
        }
  return (
    <div > <UserHeader />
   
    <div className="OSP">
  <div className="usernav">
                   <SideNav/>
                    </div>
    <div className="Ordersp">
      <MobileNavbar/>
      <div className="c-header">
        <div className="c-h1">
          <h3>Order History</h3>
        </div>
        <div className="c-h2">
          <p>Home</p>
          <span>.</span>
          <p>Dashboard</p>
          <span>.</span>
          <p>Orders</p>
        </div>
      </div>
      <div className="orderBackButton">
        <Link
          to="/orderHistory"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button>Back</button>
        </Link>
      </div>
      <div className="orderStatusConntainer">
        <div className="ods">
          <div className="ods1">
            <img
              src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png"
              style={{ height: "30px" }}
            />
            <p>Santhosh Kumar</p>
            <p>n.santhoshkumar.com@gmail.com</p>
          </div>
          <div className="ods2">
            <p>Purchase Date: 07 July, 2024</p>
            <p>Expired Date: 07 July, 2025</p>
            <p>Payment Status: Success</p>
          </div>
        </div>
        <div className="odsTable">
            <table>
                        <thead>
                            <tr>
                                <td>Package</td>
                                <td>Purchase Date</td>
                                <td>Expired Date</td>
                                <td>Price</td>
                                <td>Payment Method</td>
                                <td>Transaction Id</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Standard<span style={{background:"green",color:"white",paddingLeft:"8px",paddingRight:"8px",borderRadius:"5px",paddingBottom:'3px',marginLeft:"2px"}}>Currently Active</span></td>
                                <td>2024-07-07</td>
                                <td>2025-07-07</td>
                                <td>$100</td>
                                <td></td>
                                <td></td>
                               
                            </tr>
                        </tbody>
                    </table>
        </div><div className="odsButton"><button style={{backgroundColor:"orange",marginTop:"40px"}}>PRINT</button></div>
      </div>
     

    </div></div></div>
  );
};

export default OrderStatus;
