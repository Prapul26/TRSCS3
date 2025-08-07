import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './MyMembership.css'
import UserHeader from '../components/UserHeader'



import { useState } from "react";
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';
import { faL } from '@fortawesome/free-solid-svg-icons';
import SideNav from './SideNav';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import axios from 'axios';
const MyMembership = () => {
  const [intro, showIntro] = useState(false)
  const [settings, showSettings] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("")
  const showMobnav = () => {
    setShowSidebar(prev => !prev);

  };
  const handelSettings = () => {
    showSettings(!settings);
  }
  const handelIntro = () => {
    showIntro(!intro)
  }
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/dashboard`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data.orders.data);
      } catch (error) {
        setMsg("Failed to fetch data.");
      }
    };

    fetchData();
  }, []);
  return (
    <div className='mobMenuaa'>
      <div className='mobMenu33'>
        {showSidebar && (<MobileMenu />)}
      </div>
      <div style={{ width: "100%" }}><UserHeader />

        <div className='OMH'>

          <div className="usernav">
            <SideNav />
          </div>
          <MobileNavbar showMobnav={showMobnav} />
          <div className='fz2'>

            <div className="d-header" >
              <h2>My Membership</h2>

            </div>

            <div className='table-container'>
              <table >
                <thead >
                  <td style={{ fontSize: "17px" }}>Package</td>
                  <td style={{ fontSize: "17px" }}>Purchase Date</td>
                  <td style={{ fontSize: "17px" }}>Expired Date</td>
                  <td style={{ fontSize: "17px" }}>Price</td>
                  <td style={{ fontSize: "17px" }}>Payment Date</td>
                  <td style={{ fontSize: "17px" }}>Status</td>
                </thead>
                <tbody>
                  {
                    data.map((order, index) => (
                      <tr key={order.id || index}>
                      <td style={{ fontSize: "15px" }}>
  {order.listing_package_id === "2"
    ? "Basic"
    : order.listing_package_id === "3"
    ? "Standard"
    : "Unknown"}
</td>
             <td style={{ fontSize: "15px" }}>{order.purchase_date}</td>
                        <td style={{ fontSize: "15px" }}>{order.expired_date}</td>
                        <td style={{ fontSize: "15px" }}>${order.amount_usd}</td>
                        <td style={{ fontSize: "15px" }}>{order.payment_method}</td>
                        <td>
                          <Link to={`/orderDetails/${order.id}`}> <button className='invoiceButton'>Invoice</button></Link>
                          <Link to={`/orderHistory/${order.id}`}><button>History Details</button></Link>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

            </div>
          </div> </div>
      </div></div>
  )
}

export default MyMembership
