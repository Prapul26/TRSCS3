import React from "react";
import "./CreateBusinessProfile.css";
import UserHeader from "../components/UserHeader";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
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
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
const CreateBusinessProfile = () => {
  const [intro, showIntro] = useState(false);
  const [img, showImg] = useState(false);
  const [vid, showVid] = useState(false);
  const handelIntro = () => {
    showIntro(!intro);
  };
  const openNewImg = (e) => {
    showImg(!img);
  };
  const openNewVid = (e) => {
    showVid(!vid);
  };
  return (
    <div style={{ height: "fit-content" }}><form>
      {" "}
      <UserHeader />
      <div className="overbc">
        <div className="usernav">
          <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
            <div className="home-container">
              <FaHome size={25} style={{ marginRight: "6px" }} /> <h2>Home</h2>
            </div>
          </Link>
          <div className="navs">
            <Link
              to="/myMembership"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              <div className="membership">
                <div className="a2">
                  <MdOutlineCardMembership
                    size={20}
                    className="a1"
                    style={{
                      marginTop: "24px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  />
                </div>
                <h3>My Membership</h3>{" "}
              </div>
            </Link>
            <Link
              to="/accountSettings"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div className="accountSettings">
                <div className="a3">
                  <IoSettingsSharp
                    size={20}
                    style={{
                      marginTop: "22px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  />
                </div>
                <h3>Account Settings/Profile</h3>{" "}
              </div>
            </Link>
            <Link
              to="/businessProfile"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div className="businessProfile">
                <div className="a5">
                  <ImProfile
                    size={20}
                    style={{
                      marginTop: "22px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                  />
                </div>
                <h3>My Business Profile</h3>{" "}
              </div>
            </Link>
            <div className="intro1">
              <div className="introduction" onClick={handelIntro}>
                <h3>
                  <span style={{ marginTop: "5px" }}>
                    <FaBriefcase
                      size={20}
                      style={{
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    />
                  </span>
                  Introduction
                </h3>{" "}
                {intro ? (
                  <IoIosArrowDropup size={22} style={{ marginTop: "20px" }} />
                ) : (
                  <IoIosArrowDropdown size={22} style={{ marginTop: "20px" }} />
                )}
              </div>
              {intro && (
                <div className="intoNav">
                  <Link
                    to="/contacts"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <h3>
                      <RiContactsFill style={{ marginRight: "3px" }} />
                      Contacts
                    </h3>
                  </Link>
                  <Link
                    to="/inbox"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <h3>
                      <HiInboxArrowDown style={{ marginRight: "3px" }} />
                      Inbox
                    </h3>
                  </Link>
                  <Link
                    to="/makeIntro"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {" "}
                    <h3>
                      <IoBookOutline style={{ marginRight: "3px" }} />
                      Make Introduction
                    </h3>
                  </Link>
                  <Link
                    to="/email"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <h3>
                      <MdOutlineEmail style={{ marginRight: "3px" }} />
                      Email Templates
                    </h3>
                  </Link>
                  <Link
                    to="/signature"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <h3>
                      <FaFileSignature style={{ marginRight: "3px" }} />
                      Signature
                    </h3>
                  </Link>
                </div>
              )}
            </div>
            <div className="logout" style={{ display: "flex" }}>
              <div className="a4">
                <SlLogout
                  style={{
                    marginTop: "23px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                />
              </div>
              <h3>Logout</h3>{" "}
            </div>
          </div>
        </div>
        
        <div className="cbpbc">
          <div className="c-header">
            <div className="c-h1">
              <h3>Business Information</h3>
            </div>
            <div className="c-h2">
              <p>Home</p>
              <span>.</span>
              <p>Dashboard</p>
              <span>.</span>
              <p>Business Profile</p>
            </div>
          </div>
          <div className="businessProfileButton">
            <button>Back</button>
          </div>
          <div className="createBusinessProfileContainer">
            <div className="businessInformation">
              <h2>Business Information</h2>
            </div>
            <div className="businessInformation-holder">
              <form>
                <label>Business Title</label>
                <span>*</span>
                <br />
                <input className="titleInput" type="text" />
                <br />
                <label>Profile Identifier</label>
                <span>*</span>
                <br />
                <input className="profileInput" type="text" />
                <br />
                <div className="cp-holder">
                  <div className="category">
                    <label>Category</label>
                    <span>*</span>
                    <br />
                    <input className="categoryInput" type="text" />
                  </div>
                  <div className="Phone">
                    <label>Phone</label>
                    <span>*</span>
                    <br />
                    <div className="phone-Holder">
                      <select>
                        <option>US +1</option>
                        <option>India +91</option>
                      </select>
                      <input
                        style={{
                          marginTop: "0px",
                          height: "38px",
                          width: "90%",
                        }}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="EAHolder">
                  <div className="eMail">
                    <label>Email</label>
                    <span>*</span>
                    <br />
                    <input type="text" />
                  </div>
                  <div className="aDDress">
                    <label>Address</label>
                    <span>*</span>
                    <br />
                    <input type="text" />
                  </div>
                </div>
                <div className="scz">
                  <div className="StateHolder">
                    {" "}
                    <label>State</label>
                    <span>*</span>
                    <br />
                    <select>
                      <option>state</option>
                      <option>grey</option>
                      <option>erwee</option>
                      <option>awdad</option>
                    </select>
                  </div>
                  <div className="cityHolder">
                    {" "}
                    <label>City</label>
                    <span>*</span>
                    <br />
                    <select>
                      <option>city </option>
                      <option>grey</option>
                      <option>erwee</option>
                      <option>awdad</option>
                    </select>
                  </div>
                  <div className="ZipCodeHolder">
                    {" "}
                    <label>Zip code</label>
                    <span>*</span>
                    <br />
                    <input type="text" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="ListDetails">
            <div className="ldh">
              <h2>Listing Details Information</h2>
            </div>
            <div className="ldiAbout">
              <label>About Us</label>
              <span>*</span>
              <br />
              <textarea />
            </div>
            <div className="ldiReferral">
              <label>Referral Reward</label>

              <br />
              <input type="text" />
            </div>
            <div className="ldiProducts">
              <label>Products </label>

              <br />
              <textarea />
            </div>
            <div className="ldiServices">
              <label>Services</label>

              <br />
              <textarea />
            </div>
          </div>
          <div className="iav">
            <div className="iavh2">
              <h2>Images and Videos</h2>
            </div>
            <div className="TBholder">
              <div className="thubnail">
                <label>Thubnail</label>
                <span>*</span>
                <br />
                <input type="file" />
              </div>
              <div className="banner">
                <label>Banner</label>
                <span>*</span>
                <br />
                <input type="file" />
              </div>
            </div>
            <div className="AVholder">
              <div className="aiHolder">
                <label>Additional Image</label>
                <br />
                <input type="file" />
                <br />
                {img && (
                  <div>
                    {" "}
                    <input type="file" />
                    <br />
                  </div>
                )}
                <button onClick={openNewImg}>Add Image</button>
              </div>
              <div className="VideoHolder">
                <label>Additional Image</label>
                <br />
                <input type="file" />
                <br />
                {vid && (
                  <div>
                    {" "}
                    <input type="file" />
                    <br />
                  </div>
                )}
                <button onClick={openNewVid}>Add Video</button>
              </div>
            </div>
          </div>
          <div className="slHolder">
            <div className="slh2">
              <h2>Social Link</h2>
              <label>Please enter complete URL</label>
            </div>
            <div className="Ft-container">
              <div className="faceHolder">
                <label>Facebook</label>
                <br />
                <input type="text" />
              </div>
              <div className="twitHolder">
                <label>Twitter</label>
                <br />
                <input type="text" />
              </div>
            </div>
            <div className="lb-container">
              <div className="faceHolder">
                <label>LinkedIn</label>
                <br />
                <input type="text" />
              </div>
              <div className="twitHolder">
                <label>BBB</label>
                <br />
                <input type="text" />
              </div>
            </div>
            <div className="yy-container">
              <div className="faceHolder">
                <label>Yelp</label>
                <br />
                <input type="text" />
              </div>
              <div className="twitHolder">
                <label>YouTube</label>
                <br />
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="AFHolder">
            <label>Allow Feature</label><br/>
            <select>
              <option>No</option>
              <option>Yes</option>
            </select><br/>
            <label>Seo Title</label><br/>
            <input type="text" /><br/>
            <label>Seo Description</label><br/>
            <textarea />
          </div>
          <div className="SaveForm"><button type="submit">SAVE</button></div>
        </div>
      </div></form>
    </div>
  );
};

export default CreateBusinessProfile;
