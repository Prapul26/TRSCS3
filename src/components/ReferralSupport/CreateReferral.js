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

const CreateReferral = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();

    const [dropdown, setDropdown] = useState(false);
    const [categories] = useState([
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5"
    ]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [description, setDescription] = useState(""); // <-- TinyMCE state
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

    return (
        <div>
            <div className='mobMenuaa'>
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
                                    <div className='sunhead' style={{ display: "flex" }}>
                                        <div style={{ marginTop: "32px", marginRight: "5px" }}>
                                            <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
                                        </div>
                                        <div><h1>.</h1></div>
                                        <div style={{ marginLeft: "5px", marginTop: "32px", marginRight: "5px" }}>
                                            <Link to="/myMembership" style={{ textDecoration: "none", color: "inherit" }}>Dashboard</Link>
                                        </div>
                                        <div><h1>.</h1></div>
                                        <div style={{ marginLeft: "5px", marginTop: "32px" }}>Referral Support</div>
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
                                        <h2>Basic Informations</h2>
                                    </div>
                                    <div className='createInfoHolder'>
                                        <label>Title<span style={{ color: "red" }}> *</span></label><br />
                                        <div className='titleHolder'>
                                            <div style={{ marginTop: "2px" }}><FaEdit /></div>
                                            <div style={{ width: "97%" }}><input /></div>
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

                                            <div className='catinfohold2'>
                                                <label>Image</label><br />
                                                <div className='catinput'><input type='file' /></div>
                                            </div>
                                        </div><br />

                                        <label>Description <span style={{ color: "red" }}> *</span></label><br />
                                        <div>
                                            <Editor
                                                apiKey="um41ycg3nnml2svuefabmr62enrlukoncxy0g0hi0ugo9dqd" // you can get a free key from TinyMCE site
                                                value={description}
                                                onEditorChange={(newValue) => setDescription(newValue)}
                                                init={{
                                                    height: 200,
                                                    menubar: false,
                                                    plugins: [
                                                        "advlist autolink lists link image",
                                                        "charmap print preview anchor",
                                                        "searchreplace visualblocks code",
                                                        "insertdatetime media table paste help wordcount"
                                                    ],
                                                    toolbar:
                                                        "undo redo | formatselect | bold italic | \
                                                       alignleft aligncenter alignright | bullist numlist outdent indent | help",
                                                }}
                                            />

                                        </div>
                                        <div className='saveconbutton'><button>SAVE</button></div>
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
