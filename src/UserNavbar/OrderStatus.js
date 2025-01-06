import React from "react";
import "./OrderStatus.css";
import { Link } from "react-router-dom";
import UserHeader from "../components/UserHeader";
const OrderStatus = () => {
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
     

    </div>
  );
};

export default OrderStatus;
