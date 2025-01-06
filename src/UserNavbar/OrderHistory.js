import React from "react";
import "./OrderHistory.css";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
const OrderHistory = () => {
  return (
    <div>
      <UserHeader />
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
      <div className="orderBackButton"><Link to='/' style={{textDecoration:"none",color:"inherit"}}><button>Back</button></Link></div>
      <div className="orderHistoryTable">
        <table>
            <thead>
                <tr>
                    <td>Package</td>
                    <td>Purchase Date</td>
                    <td>Expired Date</td>
                    <td>Price</td>
                    <td>Payment Method</td>
                    <td>Transaction Id</td>
                    <td>Status</td>
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
                    <td className="rgb" style={{justifyContent:"center",alignItems:"center"}}><Link to='/orderStatus'style={{textDecoration:"none",color:"inherit"}}><button className="rgb" style={{backgroundColor:"green"}}><IoMdEye /></button></Link></td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
