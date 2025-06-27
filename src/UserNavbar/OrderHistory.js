import React, { useEffect } from "react";
import "./OrderHistory.css";
import UserHeader from "../components/UserHeader";
import { Link, useParams } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

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
import { IoPerson } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
const OrderHistory = () => {
  const [intro, showIntro] = useState(false);
  const [settings, showSettings] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/order-history-details/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrder(response.data?.order || null);
      } catch (err) {
        setError("Failed to fetch order details.");
      }
    };

    fetchOrderDetails();
  }, [orderId]);
  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
  const handelSettings = () => {
    showSettings(!settings);
  };
  const handelIntro = () => {
    showIntro(!intro);
  };
  return (
    <div className="mobMenuaa">
      <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
      <div style={{ width: "100%" }}>
        <UserHeader />

        <div className="OMH">
          <div className="usernav">
            <SideNav />
          </div>
          <MobileNavbar showMobnav={showMobnav} />
          <div className="fz2">
            <div className="d-header">
              <h2>Order History</h2>
            </div>

            {order ? (
  <div className="orderHistoryTable">
    <table>
      <tbody>
        <tr>
          <td >Package Name</td>
          <td>{order.listing_package_id}</td>
        </tr>
        <tr>
          <td>Transition Id</td>
          <td>{order.transaction_id}</td>
        </tr>
        <tr>
          <td>Package Price</td>
          <td>{order.currency_icon}{order.amount_usd}</td>
        </tr>
        <tr>
          <td>Payment Method</td>
          <td>{order.payment_method}</td>
        </tr>
        <tr>
          <td>Payment Status</td>
          <td>{order.payment_status}</td>
        </tr>
        <tr>
          <td>Package Start Date</td>
          <td>{order.purchase_date}</td>
        </tr>
        <tr>
          <td>Package End Date</td>
          <td>{order.expired_date}</td>
        </tr>
      </tbody>
    </table>
  </div>
) : (
  <p style={{ padding: "20px" }}>{error || "Loading order details..."}</p>
)}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
