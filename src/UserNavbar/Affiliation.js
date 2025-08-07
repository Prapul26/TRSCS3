import { React, useEffect, useState, useRef } from "react";
import "./Affiliation.css";
import UserHeader from "../components/UserHeader";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import { IoCopy } from "react-icons/io5";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";

const Affiliation = () => {
  const [basic, showBasic] = useState(false);
  const [standard, showStandard] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState("active");
  const [intro, showIntro] = useState(false);
  const [settings, showSettings] = useState(false);
  const [data, setData] = useState([]);
  const inputRef = useRef(null); // 🔑 Added input ref

  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };

  const handelStandard = () => {
    showStandard(!standard);
  };

  const handelBasic = () => {
    showBasic(!basic);
  };

  const handelSettings = () => {
    showSettings(!settings);
  };

  const handelIntro = () => {
    showIntro(!intro);
  };

  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => alert("Copied to clipboard!"))
        .catch((err) => console.error("Failed to copy: ", err));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("authToken");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/affiliation`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mobMenuaa">
      <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
      <div className="affili">
        <UserHeader />
        <div className="myAfflilationPage">
          <div className="usernav">
            <SideNav />
          </div>
          <div className="myAffiliationCOntainer">
            <div style={{ marginLeft: "-82px" }}>
              <MobileNavbar showMobnav={showMobnav} />
            </div>

            <div className="dd-holder2">
              <div style={{ display: "flex" }}>
                <div>
                  <h2 style={{marginLeft:"20px",marginTop:"23px"}}>Affiliation</h2>
                </div>
                <div className="status-toggle">
                  <span
                    className={`status-label ${
                      activeTab === "active" ? "active" : "inactive"
                    }`}
                    onClick={() =>
                      setActiveTab(activeTab === "active" ? "inactive" : "active")
                    }
                  >
                    {activeTab === "active" ? "Active" : "In Active"}
                  </span>
                </div>
              </div>
            </div>

            <div className="myAffiliation-holder">
              <h3>Commission : 20%</h3>
              <br />
              <h3>
                Affiliation <span style={{ color: "red" }}> *</span>
              </h3>
              <div className="affdiv">
                <div className="affdiv1">
                  <input
                    ref={inputRef}
                    value={data.link_exist?.affiliate_link || ""}
                    readOnly
                  />
                </div>
                <div className="affdiv2">
                  <button style={{ backgroundColor: "#28a745",marginTop:"5px" }} onClick={copyToClipboard}>
                    Copy text
                  </button>
                </div>
              </div>
            </div>

            {activeTab === "active" && (
              <div className="affTable">
                <table>
                  <thead>
                    <tr>
                      <td style={{ color: "black" ,fontSize:"medium"}}>Package name</td>
                      <td style={{ color: "black" ,fontSize:"medium"}}>Package Price</td>
                      <td style={{ color: "black",fontSize:"medium" }}>Commission Amount</td>
                      <td style={{ color: "black" ,fontSize:"medium"}}>Purchased By</td>
                      <td style={{ color: "black",fontSize:"medium" }}>Purchased On</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.data?.map((item, index) => (
                      <tr key={index}>
                        <td style={{fontSize:"18px",fontWeight:"500"}}>{item.package_name}</td>
                        <td style={{fontSize:"18px",fontWeight:"500"}}>${item.package_price}</td>
                        <td style={{fontSize:"18px",fontWeight:"500"}}>${item.commission_amount}</td>
                        <td style={{fontSize:"18px",fontWeight:"500"}}>{item.user?.name || "N/A"}</td>
                        <td style={{fontSize:"18px",fontWeight:"500"}}>{new Date(item.created_at).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;
