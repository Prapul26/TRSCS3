import React, { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import "./AccountSettings.css";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaFileSignature,
  FaHome,
  FaPhoneAlt,
  FaWindowMinimize,
} from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import {
  MdBusiness,
  MdLink,
  MdLocationCity,
  MdOutlineCardMembership,
  MdOutlineFormatTextdirectionRToL,
  MdOutlineMailOutline,
  MdPerson,
} from "react-icons/md";
import { FaBriefcase, FaLock } from "react-icons/fa6";
import {
  IoSettingsSharp,
  IoLocationSharp,
  IoBookOutline,
  IoPerson,
  IoGlobe,
  IoLogoLinkedin,
} from "react-icons/io5";
import { ImCross, ImProfile } from "react-icons/im";
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosInformationCircle } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { HiInboxArrowDown } from "react-icons/hi2";
import { data, Link } from "react-router-dom";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
import axiosRetry from "axios-retry";

import '../GlobalStyles/GlobalStyles.css'
import { LuExternalLink } from "react-icons/lu";
const AccountSettings = () => {
  const [intro, showIntro] = useState(false);
  const [settings, showSettings] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [states, setStates] = useState([]);
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessDiscription, setBusinessDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [addImg, setAddImg] = useState([])
  const [memberType, setMemberType] = useState("");


  const [files, setFiles] = useState([null]); // start with one file input
  const [previews, setPreviews] = useState([null]); // previews for selected files
  const [images, setImages] = useState([

  ]);
  const [showpage, setShowPage] = useState(false);
  const urlClick = () => {
    setShowPage(!showpage)
  }
  const closeURlCLick = () => {
    setShowPage(false)
  }

  const maxPhotos = 5;

  const handleAddField = () => {
    if (files.length + images.length < maxPhotos) {
      setFiles([...files, null]);
      setPreviews([...previews, null]);
    }
  };

  const handleRemoveField = (index) => {
    const updatedFiles = [...files];
    const updatedPreviews = [...previews];
    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Only JPG or JPEG images are allowed.");
      return;
    }
    const updatedFiles = [...files];
    const updatedPreviews = [...previews];

    updatedFiles[index] = file;
    updatedPreviews[index] = file ? URL.createObjectURL(file) : null;

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
  };
  const handleDeleteImage = async (id) => {
    try {
      const token = sessionStorage.getItem("authToken");

      let url = "";
      if (memberType == 1) {
        url = `https://tracsdev.apttechsol.com/api/delete-listing-image/${id}`;
      } else if (memberType == 2) {
        url = `https://tracsdev.apttechsol.com/api/delete_additional_image/${id}`;
      } else {
        alert("Invalid member type");
        return;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        // Update state to remove deleted image
        setImages((prev) => prev.filter((img) => img.id !== id));
        setTotalPhotos((prev) => prev.filter((img) => img.id !== id));
        setMessage("Image deleted successfully!");
      } else {
        setMessage("Failed to delete image.");
      }
    } catch (error) {
      console.error("Delete image error:", error.response?.data || error.message);
      setMessage("An error occurred while deleting the image.");
    }
  };



  const showMobnav = () => {
    setShowSidebar((prev) => !prev);
  };
  const handleImageChange = (e) => {
    const file = e.target?.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }
    const validTypes = ["image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Only JPG or JPEG images are allowed.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setImagePreview(base64String);       // For preview
      setSelectedFile(file);       // For submission
      console.log("Base64 Image:", file); // Debugging
    };
    reader.onerror = () => {
      console.error("Failed to read file", reader.error);
      alert("Failed to preview image.");
    };
    reader.readAsDataURL(file); // This converts image to base64
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };
  const handelSettings = () => {
    showSettings(!settings);
  };

  const handelIntro = () => {
    showIntro(!intro);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fetchProfile = async () => {
        try {
          const token = sessionStorage.getItem("authToken");
          const response = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/my-profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = response.data;
          const newImage = data.user?.image;
          if (newImage) {
            setImagePreview(`https://tracsdev.apttechsol.com/public/${newImage}`);
          }

          const fullName = data.user.name || "";
          const [first, ...rest] = fullName.trim().split(" ");
          const last = rest.join(" ");

          setFirstName(first || "");
          setLastName(last || "");
          setEmail(data.user.email || "");
          setPhone(data.user.phone || "");
          setAbout(data.user.about || "");
          setCity(data.user.city || "");
          setState(data.user.state || "");
          setCountry(data.user.country || "");
          setAddress(data.user.address || "");
          setBusinessName(data.user.business_name || "");
          setBusinessDescription(data.user.business_description || "");
          setWebsite(data.user.website || "");
          setLinkedIn(data.user.linkedin || "");
          setStates(data.states || []);
          setMemberType(data.user.member_type || "")

          // 👇 Fix: Set additional image URLs
          const additional = data.total_photos || [];
          const fullImageUrls = additional
            .slice(0, 5)
            .map((img) => ({
              id: img.id,
              url: `https://tracsdev.apttechsol.com/public/${img.image}`,
            }));

          setImages(fullImageUrls);

          setTotalPhotos(data.total_photos || []);
          console.log("eff:", JSON.stringify(fullImageUrls));


        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };

      fetchProfile();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const handleProfileUpdate = async () => {
    if (isUpdating) return;
    setIsUpdating(true);

    try {
      const token = sessionStorage.getItem("authToken");

      // Prepare FormData for file uploads
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("about", about);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("country", country);
      formData.append("address", address);
      formData.append("linkedin", linkedIn);
      formData.append("business_name", businessName);
      formData.append("business_description", businessDiscription);
      formData.append("website", website);

      // Main profile image
      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      // Append additional images
      files.forEach((file, index) => {
        if (file) {
          formData.append("photo_list[]", file);
        }
      });

      const response = await axios.post(
        "https://tracsdev.apttechsol.com/api/update-profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      setMessage("Failed to update profile. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };


  const [totalPhotos, setTotalPhotos] = useState([]);
  console.log("memberType =" + memberType)
  return (
    <div>
      {
        showpage && (
          <div className="pageURLContainer">
            <div className="pageURLHolder" >
              <div className="pageURLHeader">
                <div><h4 style={{ color: "white" }}>Display your personal details</h4></div>

                <div onClick={closeURlCLick} style={{ marginTop: "9px" }}> <ImCross /></div>
              </div>
              <div className="pageiframeContainer">
                <div className="pageIframe"><iframe src="https://tracsdev.apttechsol.com/helpsection-descriptionnew/15" /></div>

              </div>
            </div>
          </div>
        )
      }
      <div className="mobMenuaa">
        <div className="mobMenu33">{showSidebar && <MobileMenu />}</div>
        <div>
          <UserHeader />
          <div className="overH">
            <div className="usernav">
              <SideNav />
            </div>
            <div className="fz1">
              <div>
                <MobileNavbar showMobnav={showMobnav} />
              </div>
              <div className="alfa">
                <div className="contacts-container">
                  <div
                    className="d-header"
                    style={{
                      background: "white",
                      paddingTop: "0px",
                      width: "96.2%",
                      paddingBottom: "0px",

                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <div>  <h2>Edit Profile</h2></div>
                      <div><Link to="/myProfile">
                        <button
                          style={{
                            background: "#eeba2b",
                            paddingLeft: "30px",
                            paddingRight: "30px",
                            color: "black",
                            marginLeft: "25px",
                            marginTop: "15px",
                          }}
                        >
                          VIEW PROFILE
                        </button>
                      </Link></div>
                    </div>
                    <div style={{ display: "flex", marginTop: "14px" }} className="urlPage" onClick={urlClick}><div><p>Displays your personal details</p></div>
                      <div style={{ marginTop: "-18px", marginLeft: "5px" }}><IoIosInformationCircle size={15} /></div>
                    </div>

                  </div>

                </div>
                <div className="prc1">
                  <div className="profileContainer1">
                    <div className="proPic">
                      <div className="ppfof">
                        <img
                          src={imagePreview}
                          alt="Profile Preview"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        /> </div>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60px" }}>
                        <button
                          style={{ background: "#eeba2b", color: "black", fontWeight: "300 !important" }}
                          onClick={triggerFileInput}
                        >
                          UPLOAD IMAGE
                        </button>
                        <input
                          type="file"
                          id="fileInput"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                        // onChange={console.log("file")}
                        />
                      </div>
                    </div>
                    <div className="pc11">
                      <div className="pgpgg">
                        <div className="fr1">
                          <label>
                            First Name
                            <span style={{ color: "red", fontWeight: "600" }}>*</span>
                          </label>
                          <div className="nameInput" style={{ marginTop: '10px' }} >
                            <div style={{ marginTop: "5px", marginLeft: "9px" }}>
                              <MdPerson size={20} />
                            </div>
                            <input
                              type="text"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="fr2" >
                          <label>
                            Last Name
                            <span style={{ color: "red", fontWeight: "600" }}>*</span>
                          </label>
                          <div className="nameInput" style={{ marginTop: '10px' }}>
                            <div style={{ marginTop: "5px", marginLeft: "9px" }}>
                              <MdPerson size={20} />
                            </div>
                            <input
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <label>
                        Email
                        <span style={{ color: "red", fontWeight: "600" }}>*</span>
                      </label>
                      <div className="nameInput" style={{ marginTop: '10px' }}>
                        <div style={{ marginTop: "5px", marginLeft: "9px" }}>
                          <MdOutlineMailOutline size={20} />
                        </div>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />{" "}
                      </div>
                      <div className="pc111">
                        <div className="phone">
                          <label>
                            Phone
                            <span style={{ color: "red", fontWeight: "600" }}>
                              *
                            </span>
                          </label>
                          <div className="phoneInput">
                            <div style={{ marginTop: "6px", marginLeft: "10px" }}>
                              <FaPhoneAlt size={15} />
                            </div>
                            <input
                              type="text"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="email">
                          <label>
                            Country
                            <span style={{ color: "red", fontWeight: "600" }}>
                              *
                            </span>
                          </label>
                          <div className="emailInput">
                            <select
                              value={country}
                              style={{ height: "32px", width: "100%", border: "transparent" }}
                              onChange={(e) => setCountry(e.target.value)}
                            >
                              <option value="">Select Country</option>
                              <option value="USA">USA</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <label>Business Name</label>
                      <div className="nameInput" style={{ marginTop: '10px' }}>
                        <div style={{ marginTop: "5px", marginLeft: "9px" }}>
                          <MdBusiness size={20} />
                        </div>
                        <input
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                        />
                      </div>
                      <div>

                      </div>
                      <label>Business Description/About</label>
                      <textarea
                        className="textArea"
                        value={stripHtmlTags(about)}
                        onChange={(e) => setAbout(e.target.value)}
                      />
                      <div className="socialInputWrapper"> <div className="fr3">
                        <label>Website</label>
                        <div className="nameInput" style={{ marginTop: '10px' }}>
                          <div style={{ marginTop: "5px", marginLeft: "9px" }}>
                            <IoGlobe size={20} />
                          </div>
                          <input
                            type="text"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                          />
                        </div>
                      </div>
                        <div className="fr4" style={{ marginTop: '10px' }}>
                          <label>Linkedin</label>
                          <div className="nameInput">
                            <div style={{ marginTop: "5px", marginLeft: "9px" }}>
                              <IoLogoLinkedin size={20} />
                            </div>
                            <input
                              type="text"
                              value={linkedIn}
                              onChange={(e) => setLinkedIn(e.target.value)}
                            />
                          </div>
                        </div>


                      </div>
                      <label>Address</label>
                      <div className="addressInput">
                        <div style={{ marginTop: "5px", marginLeft: "10px" }}>
                          <IoLocationSharp size={18} />
                        </div>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="pc111">

                        <div className="email">
                          <label>City</label>
                          <div className="emailInput">
                            <div
                              style={{ marginTop: "5px", marginLeft: "10px" }}
                            >
                              <MdLocationCity size={18} />
                            </div>
                            <input
                              type="text"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="phone">
                          <label>State</label>
                          <div className="phoneInput">
                            <div style={{ marginTop: "6px", marginLeft: "10px" }}>
                              <IoLocationSharp size={18} />
                            </div>
                            <select
                              value={state}
                              style={{ height: "34px", outline: "transparent", border: "transparent", width: "100%" }}
                              onChange={(e) => setState(e.target.value)}
                            >
                              <option value="">Select State</option>
                              {states.map((s) => (
                                <option key={s.id} value={s.code}>
                                  {s.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>



                    </div>

                  </div>
                  <div className="additionalImages-holder">
                    <div style={{ padding: '20px' }}>
                      <h3>Additional Images</h3>

                      <div className="addmobview" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: "25px" }}>
                        {images.map((img) => (
                          <div key={img.id}>
                            <img src={img.url} alt="uploaded" width={150} height={100} />
                            <div>
                              <button
                                style={{ backgroundColor: 'crimson', color: 'white', marginTop: '5px' }}
                                onClick={() => handleDeleteImage(img.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}


                        {/* Previews of new selected files only if a file is selected */}
                        {previews.map((preview, index) => (
                          preview && (
                            <div key={preview.id}>
                              <img
                                src={preview}
                                alt={`preview-${index}`}
                                width={150}
                                height={100}
                              />
                            </div>
                          )
                        ))}
                      </div>

                      <h4 style={{ marginTop: '20px' }}>Photos (Allowed = {maxPhotos})</h4>
                      {files.map((file, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, index)}
                          />
                        </div>
                      ))}

                      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                        {images.length + files.length < maxPhotos && (
                          <button
                            style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px' }}
                            onClick={handleAddField}
                          >
                            ➕
                          </button>
                        )}
                        {files.length >= 1 && (
                          <button
                            style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px' }}
                            onClick={() => handleRemoveField(files.length - 1)}
                          >
                            🗑️
                          </button>
                        )}
                      </div>


                    </div>
                  </div>
                  <div className="update1">
                    <button
                      style={{ background: "#eeba2b" }}
                      onClick={handleProfileUpdate}
                      disabled={isUpdating}
                    >
                      {isUpdating ? "Updating..." : "Update"}
                    </button>{" "}
                    {message && (
                      <p
                        style={{
                          marginTop: "10px",
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        {message}
                      </p>
                    )}

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div></div>
  );
};

export default AccountSettings;
