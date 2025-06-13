import React, { useEffect, useState } from 'react'
import './EditTemplate.css'
import UserHeader from '../components/UserHeader';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import SideNav from './SideNav';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const EditTemplate = () => {
      const [showSidebar, setShowSidebar] = useState(false);
    
      const showMobnav = () => {
        setShowSidebar((prev) => !prev);
      };
      const { id: base64Id } = useParams();
     
       const [templateTokens, showTemplateTokens] = useState(false);
        const [title, setTitle] = useState("");
        const [category, setCategory] = useState("");
        const [description, setDescription] = useState("");
          const handleClick = () => {
            showTemplateTokens(!templateTokens);
          };
          const cancleX = () => {
            showTemplateTokens(false);
          };
          const [message, setMessage] = useState("");
          useEffect(() => {
            let isCalled = false;
            const fetchTemplates = async () => {
              if (isCalled) return;
              isCalled = true;
          
              const token = localStorage.getItem("authToken");
              try {
                const response = await axios.get(`https://tracsdev.apttechsol.com/api/edit-template/${base64Id}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
          
                const data = response.data?.template;
                if (data) {
                  setTitle(data.template_name || '');
                  setCategory(data.category_id?.toString() || '');
                  setDescription(data.email_body || '');
                }
              } catch (err) {
                setMessage(err.response?.data?.message || "Failed to fetch template.");
              }
            };
            fetchTemplates();
          }, [base64Id]);
          const handleSubmit = async (e) => {
            e.preventDefault();
          
            const token = localStorage.getItem("authToken");
          
            try {
              const response = await axios.post(
                "https://tracsdev.apttechsol.com/api/store-template",
                {
                  title: title,
                  category_id: category,
                 description: description,
                 id: atob(base64Id),
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
                }
              );
          
              setMessage("Template updated successfully!");
            } catch (error) {
              setMessage(error.response?.data?.message || "Failed to update template.");
            }
          };
          
  return (
    <div>
    <div className="mobMenuaa">
      <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
      <div>
        {" "}
        <UserHeader/>
        <div className="EMPPP">
          <div className="usernav">
            <SideNav/>
          </div>
          <div className="EMPP">
            <MobileNavbar showMobnav={showMobnav} />
            <div className="d-header">
              <h2>Edit Template</h2>
            </div>
            <div style={{marginLeft:"20px",marginBottom:"20px"}}><Link to='/email'><button>Back</button></Link></div>
            <div className="templateContainer">
                <form onSubmit={handleSubmit}>
                  <div>
                    <lable>Title</lable>
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div>
                    <lable>Category</lable>
                    <span style={{ color: "red" }}>*</span>
                    <br />
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                  </div>
                  <div className="saveTempButton">
                    <button type="submit">SAVE</button>
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
  )
}

export default EditTemplate
