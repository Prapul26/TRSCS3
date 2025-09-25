import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import { ImCross } from 'react-icons/im';
const ViewReferralSupport = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const categories = ["Category1", "Category2", "Category3", "Category4", "Category5"];

    const [showDropDown, setDropDown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
      const [showpage, setShowPage] = useState(false);
        const urlClick = () => {
          setShowPage(!showpage)
        }
          const closeURlCLick = () => {
      setShowPage(false)
    }
    const handleDropDown = () => {
        setDropDown(prev => !prev);
    }

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // update selected category
        setDropDown(false);            // close dropdown
    };
    const showMobnav = () => {
        setShowSidebar(prev => !prev);

    };
    useEffect(() => {
        const fetchData = async () => {


            try {
                const token = sessionStorage.getItem("authToken");
                const response = await axios.get("https://tracsdev.apttechsol.com/api/view-referral-list", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data.blogs.data);
                setFilteredData(response.data.blogs.data);
            } catch (err) {
                console.log(err)
            }

        }; fetchData()

    }, []);
const handleSearch = () => {
    let filtered = data;

if (selectedCategory) {
    const normalizedCategory = selectedCategory.toLowerCase().trim().replace(/\s+/g, " ");
    filtered = filtered.filter(item => {
        const normalizedItemCategory = item.category.toLowerCase().trim().replace(/\s+/g, " ");
        return normalizedItemCategory === normalizedCategory;
    });
}

if (searchTerm.trim() !== "") {
    const normalizedSearch = searchTerm.toLowerCase().trim().replace(/\s+/g, " ");
    filtered = filtered.filter(item => {
        const normalizedTitle = item.blog_title?.toLowerCase().trim().replace(/\s+/g, " ") || "";
        const normalizedAuthor = item.posted_by?.name?.toLowerCase().trim().replace(/\s+/g, " ") || "";

        return (
            normalizedTitle.includes(normalizedSearch) ||
            normalizedAuthor.includes(normalizedSearch)
        );
    });
}


    setFilteredData(filtered);
};


    return (
        <div>
              {
                                      showpage && (
                                        <div className="pageURLContainer">
                                          <div className="pageURLHolder" >
                                            <div className="pageURLHeader">
                                              <div><h4 style={{ color: "white" }}>Referral Support is designed to help members get the guidance and connections they need from our network of directors.</h4></div>
                                              
                                              <div onClick={closeURlCLick} style={{ marginTop: "9px" }}> <ImCross /></div>
                                            </div>
                                            <div className="pageiframeContainer">
                                              <div className="pageIframe"><iframe src="https://tracsdev.apttechsol.com/helpsection-descriptionnew/18" /></div>
                              
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    }
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
                                   <div style={{ display: "flex", marginTop: "14px" }} className="urlPage" onClick={urlClick}><div><p>Referral Support is designed to help members get the guidance and connections they need from our network of directors.</p></div>
                                                                                            <div style={{ marginTop: "-15px", marginLeft: "5px" }}><IoIosInformationCircle size={15} /></div>
                                                                                          </div>

                                </div>
                                <div className='refHolder'>
                                    <div style={{ padding: "20px", borderRadius: "10px", marginTop: "30px", boxShadow: " 0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                                        <div className='flexer'>
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
                                            <div className='catsearch2' ><input placeholder='What you are looking for ?' value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)} /></div>
                                            <div><button onClick={handleSearch}>GO</button></div>
                                         </div>
                                                                         <div className='addrefbutton'><Link to="/createReferral"><button>Create</button></Link></div>

                                        </div>
                                        <div className='refTabg'>
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
                                                    {filteredData.length > 0 ? (
                                                        filteredData.map((item) => (
                                                            <tr key={item.id}>
                                                                <td><Link to={`/viewReferral/${btoa(item.id)}`}  style={{textDecoration:"none",color:"inherit"}}>{item.blog_title}</Link></td>
                                                                <td>{item.category}</td>
                                                                <td>{item.posted_by?.name}</td>
                                                                <td>{item.referral_chat.length}</td>
                                                                <td>{new Date(item.created_at).toLocaleDateString()}</td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="5" style={{ textAlign: "center" }}>No results found</td>
                                                        </tr>
                                                    )}
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
        </div>
    )
}

export default ViewReferralSupport


