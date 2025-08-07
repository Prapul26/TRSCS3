import React, { useEffect, useRef, useState } from "react";
import "./OrderDetails.css";
import axios from "axios";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import UserHeader from "../components/UserHeader";
import SideNav from "./SideNav";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [settings, showSettings] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [order, setOrder] = useState(null);
  const [msg, setMsg] = useState("");
  const printRef = useRef();

  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };

  const handelSettings = () => {
    showSettings(!settings);
  };

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Invoice</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table, th, td { border: 1px solid black; border-collapse: collapse; padding: 8px; }
            table { width: 100%; margin-top: 20px; }
            .details1 { display: flex; justify-content: space-between; margin-bottom: 20px; }
            .division1, .division2 { width: 45%; }
            img { max-width: 150px; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tracsdev.apttechsol.com/api/order-details/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrder(response.data?.order || null);
        setMsg("");
      } catch (err) {
        setMsg("Failed to fetch order details.");
      }
    };
    fetchData();
  }, [orderId]);

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
              <h2>My Invoice</h2>
            </div>

            {order && (
              <div className="orderDetails-container" ref={printRef}>
                <div className="details1">
                  <div className="division1">
                    <img
                      src="https://tracsdev.apttechsol.com/public/uploads/website-images/logo-2024-09-05-10-18-08-4078.png"
                      alt="Company Logo"
                    />
                    <p>S Kumar Nelli</p>
                    <p>santhosh.nelli640@gmail.com</p>
                    <p>+1 8374818142</p>
                  </div>
                  <div className="division2">
                    <p>Purchase Date: {order.purchase_date}</p>
                    <p>Expire Date: {order.expired_date}</p>
                    <p>Payment Status: {order.payment_status}</p>
                  </div>
                </div>

                <div className="details2">
                  <table>
                    <thead>
                      <tr>
                        <th>Package</th>
                        <th>Purchase Date</th>
                        <th>Expired Date</th>
                        <th>Price</th>
                        <th>Payment Method</th>
                        <th>Transaction ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{order.package}</td>
                        <td>{order.purchase_date}</td>
                        <td>{order.expired_date}</td>
                        <td>{order.amount_usd}</td>
                        <td>{order.payment_method}</td>
                        <td>{order.transaction_id}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {msg && <p style={{ color: "red" }}>{msg}</p>}

            <div>
              <button
                style={{
                  backgroundColor: "orange",
                  marginTop: "30px",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={handlePrint}
              >
                PRINT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
