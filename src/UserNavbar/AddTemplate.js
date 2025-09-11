import React, { useState } from "react";
import "./AddTemplate.css";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import UserHeader from "../components/UserHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const AddTemplate = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
  const [templateTokens, showTemplateTokens] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate=useNavigate();

  const handleClick = () => {
    showTemplateTokens(!templateTokens);
  };
  const cancleX = () => {
    showTemplateTokens(false);
  };
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !description) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category_id", category);
    formData.append("description", description);

    const token = sessionStorage.getItem("authToken");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/store-template`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message || "Template created successfully!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding the Template");
    }
  };
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page in history
  };
  return (
    <div>
      <div className="mobMenuaa">
        <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
        <div>
          {" "}
          <UserHeader />
          <div className="EMPPP">
            <div className="usernav">
              <SideNav />
            </div>
            <div className="EMPP">
              <MobileNavbar showMobnav={showMobnav} />
              <div className="d-header">
                <h2>Add Template</h2>
              </div>
              <div style={{ marginLeft: "20px" ,marginBottom:"20px"}}>
                        {" "}
                        <button style={{ borderRadius: "30px", border: "transparent", background: "#163b6d" }} onClick={handleGoBack}>
                          <span>
              
                            <TiArrowBack color="white" size={35} style={{ background: "#163b6d" }} />
              
                          </span>{" "}
                        </button>
                      </div>
              <div className="templateContainer">
                <form onSubmit={handleSubmit}>
                  <div>
                    <lable>Title</lable>
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <lable>Category</lable>
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select a category</option>
                      <option value="1">Introduction-Email</option>
                      <option value="2">Bump</option>
                      <option value="3">Follow Up</option>
                      <option value="4">Member-Email</option>
                      <option value="5">Reply-Email</option>
                    </select>
                  </div>
                  <div>
                    <lable>Email body</lable>
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="saveTempButton">
                    <button type="submit" style={{background:"#eeba2b",color:'black'}}>SAVE</button>
                  </div>
                  {message && <div className="message">{message}</div>}
                </form>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <button onClick={handleClick}>Template Token</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {templateTokens && (
          <div className="templateTokensContainer">
            <div className="templateTokenHolder">
              <div className="tokenXross">
                <div style={{ marginBottom: "15px", marginTop: "10px" }}>
                  Template Tokens
                </div>
                <div
                  style={{
                    marginBottom: "15px",
                    marginTop: "10px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                  onClick={cancleX}
                >
                  X
                </div>
              </div>
              <div className="tokenP">
                <div>
                  <div>
                    <h2>Tokens for Members</h2>
                  </div>
                  <p>I) [[member_first_name]]</p>
                  <p>II) [[member_last_name]]</p>
                  <p>III) [[member_company_name]]</p>
                  <p>IV) [[member_email]]</p>
                  <p>V) [[member_phone]]</p>
                  <div>
                    <h2>Tokens for Logged-in Member</h2>
                  </div>
                  <p>VI) [[login_user_first_name]]</p>
                  <p>VII) [[login_user_last_name]]</p>
                  <p>VIII) [[login_user_email]]</p>
                  <p>IX) [[login_user_phone]]</p>
                  <div>
                    <h2>Tokens for Contact</h2>
                  </div>
                  <p>X) [[contact_first_name]]</p>
                  <p>XI) [[contact_last_name]]</p>
                  <p>XII) [[contact_email]]</p>
                  <p>XIII) [[contact_phone]]</p>
                </div>
              </div>
            </div>
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default AddTemplate;
