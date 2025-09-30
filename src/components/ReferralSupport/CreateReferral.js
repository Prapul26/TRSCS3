import React, { useState } from 'react'
import "./CreateReferral.css"
import MobileMenu from '../MobileMenu/MobileMenu';
import UserHeader from '../UserHeader';
import SideNav from '../../UserNavbar/SideNav';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Editor } from "@tinymce/tinymce-react";
import axios from 'axios';

const CreateReferral = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // "success" | "error"
    const [dropdown, setDropdown] = useState(false);
    const [categories] = useState([
        "Category1",
        "Category2",
        "Category3",
        "Category4",
        "Category5"
    ]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const handleDropdown = () => {
        setDropdown((prev) => !prev);
    };

    const handleSelect = (cat) => {
        setSelectedCategory(cat);
        setDropdown(false); // close dropdown after selecting
    };

    const filteredCategories = categories.filter((cat) =>
        cat.toLowerCase().includes(search.toLowerCase())
    );

    const showMobnav = () => {
        setShowSidebar((prev) => !prev);
    };
    const handleSave = async () => {
        if (!title || !selectedCategory || !description) {
            alert("Please fill all required fields.");
            return;
        }

        const token = sessionStorage.getItem("authToken");

        const formData = new FormData();
        formData.append("title", title);
        formData.append("category", selectedCategory);
        formData.append("description", description);
        if (image) {
            formData.append("banner_image", image);
        }

        try {
            const response = await axios.post(
                "https://tracsdev.apttechsol.com/api/store-referral",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                      
                    },
                }
            );
            console.log("Success:", response.data);
            setMessage(response.data.message || "Saved successfully!");
             console.log("formData:"+formData)
            setMessageType("success");
            setTimeout(() => {
                navigate("/viewReferralSupport");
            }, 2000);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
         setMessage("Referral not Saved !");
         setMessageType("error");
         setTimeout(()=>{
            setMessage("");
         },2000)
        }
    };
    const handleCancel=()=>{
         setTitle("");
  setDescription("");
  setSelectedCategory("");
  setSearch("");
  setImage(null);
    }

    return (
        <div>
            <div className='mobMenuaa'>
                {<div className="errmsg" style={{ backgroundColor: messageType === "success" ? "green" : "red" }}><p>{message}</p></div>}

                <div className='mobMenu33'>
                    {showSidebar && <MobileMenu />}
                </div>
                <div>
                    <UserHeader />

                    <div className="SPPP">
                        <div className="usernav">
                            <SideNav />
                        </div>
                        <div className="SPP">
                            <MobileNavbar showMobnav={showMobnav} />
                            <div className='reffContainer'>
                                <div className='headerRef'>
                                    <div><h2>Create Referral Support</h2></div>
                                    <div className='sunhead' style={{ display: "flex",marginTop:"-45px" }}>
                                        <div style={{ marginTop: "32px", marginRight: "5px" }}>
                                            <Link to="/home" style={{ textDecoration: "none", color: "inherit",fontSize:"13px" }}>Home</Link>
                                        </div>
                                        <div><h1>.</h1></div>
                                        <div style={{ marginLeft: "5px", marginTop: "32px", marginRight: "5px" }}>
                                            <Link to="/myMembership" style={{ textDecoration: "none", color: "inherit",fontSize:"13px"  }}>Dashboard</Link>
                                        </div>
                                        <div><h1>.</h1></div>
                                        <div style={{ marginLeft: "5px", marginTop: "34px",fontSize:"13px"  }}>Referral Support</div>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        style={{ marginTop: "20px", background: " #163b6d" }}
                                        onClick={() => navigate(-1)}
                                    >
                                        Back
                                    </button>
                                </div>

                                <div className='creatredHolder'>
                                    <div style={{ paddingTop: "5px", paddingLeft: "20px", borderBottom: "1px solid black" }}>
                                      
                                    </div>
                                    <div className='createInfoHolder'>
                                        <label>Subject<span style={{ color: "red" }}> *</span></label><br />
                                        <div className='titleHolder'>
                                            <div style={{ marginTop: "2px" }}><FaEdit /></div>
                                            <div style={{ width: "97%" }}><input value={title}
                                                onChange={(e) => setTitle(e.target.value)} /></div>
                                        </div><br />

                                        <div className='catinfohold'>
                                            <div className='catinfohold1'>
                                                <label>Category<span style={{ color: "red" }}>*</span></label><br />
                                                <div className='catdrophold' onClick={handleDropdown}>
                                                    <div className='ijnhy'>
                                                        <p>{selectedCategory || "Select Category"}</p>
                                                    </div>
                                                    <div><RiArrowDropDownLine size={20} /></div>
                                                </div>

                                                {dropdown && (
                                                    <div className='dropdowncatinfo'>
                                                        <div>
                                                            <input
                                                                placeholder="Search category..."
                                                                value={search}
                                                                onChange={(e) => setSearch(e.target.value)}
                                                            />
                                                        </div>

                                                        {filteredCategories.length > 0 ? (
                                                            filteredCategories.map((cat, index) => (

                                                                <div className='categoryTypes' key={index} onClick={() => handleSelect(cat)}><p>{cat}</p></div>
                                                            ))
                                                        ) : (
                                                            <li style={{ color: "gray" }}>No categories found</li>
                                                        )}

                                                    </div>
                                                )}
                                            </div>

                                        
                                        </div><br />

                                        <label>Description <span style={{ color: "red" }}> *</span></label><br />
                                        <div className='desarea'> 
                                          
<textarea value={description} onChange={(e)=>setDescription(e.target.value)}/>
                                        </div>
                                        <div className='saveconbutton'>
                                            <div><button onClick={handleSave}>SAVE</button></div>
                                            <div className='cancel1'><button onClick={handleCancel}>Cancel</button></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateReferral
