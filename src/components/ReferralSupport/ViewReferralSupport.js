import React, { useState } from 'react'
import "./ViewReferralSupport.css"
import MobileMenu from '../MobileMenu/MobileMenu';
import UserHeader from '../UserHeader';
import SideNav from '../../UserNavbar/SideNav';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import { IoIosInformationCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye } from 'react-icons/fa';
import { IoTrashBinSharp } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
const ViewReferralSupport = () => {
    const [showSidebar, setShowSidebar] = useState(false);
       const categories = ["Category1", "Category2", "Category3", "Category4", "Category5"];

    const [showDropDown, setDropDown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleDropDown = () => {
        setDropDown(true);
    }
    
    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // update selected category
        setDropDown(false);            // close dropdown
    };
    const showMobnav = () => {
        setShowSidebar(prev => !prev);

    };
    return (
        <div>
            <div className='mobMenuaa'>
                <div className='mobMenu33'>
                    {showSidebar && (<MobileMenu />)}
                </div>
                <div>
                    <UserHeader />

                    <div className="SPPP">
                        <div className="usernav">
                            <SideNav />
                        </div>
                        <div className="SPP"><MobileNavbar showMobnav={showMobnav} />
                            <div className='reffContainer'>
                                <div className='headerRef'>
                                    <div><h2>Referral Support</h2></div>

                                </div>
                                <div className='addrefbutton'><Link to="/createReferral"><button>Add Post</button></Link></div>
                                <div className='refHolder'>
                                    <div style={{ padding: "20px", borderRadius: "10px", marginTop: "30px", boxShadow: " 0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                                        <div className='catsearch'>
                                            <div className='catsearch0'>
                                                <div className='catsearch1' onClick={handleDropDown}>
                                                    <div className='categoryuu' style={{ marginTop: "-5px", marginLeft: "5px" }}>
                                                        <p>{selectedCategory || "Select Category"}</p>
                                                    </div>
                                                    <div style={{ marginTop: "8px" }}><RiArrowDropDownLine size={30} /></div>
                                                </div>
                                               {showDropDown && (
                                                    <div className='dropDownyy'>
                                                        {categories.map((cat, index) => (
                                                            <div 
                                                                key={index} 
                                                                onClick={() => handleCategorySelect(cat)} 
                                                                className="dropdownItem"
                                                            >
                                                                {cat}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className='catsearch2' ><input placeholder='What you are looking for ?' /></div>
                                            <div><button>GO</button></div>
                                        </div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Titile</td>
                                                    <td>Category</td>
                                                    <td>Author</td>
                                                    <td>Replies</td>
                                                    <td>Posted on</td>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default ViewReferralSupport


