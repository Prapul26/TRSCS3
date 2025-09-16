import React, { useState } from 'react'
import "./ReferralSupport.css"
import MobileMenu from '../MobileMenu/MobileMenu';
import UserHeader from '../UserHeader';
import SideNav from '../../UserNavbar/SideNav';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import { IoIosInformationCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye } from 'react-icons/fa';
import { IoTrashBinSharp } from 'react-icons/io5';
const ReferralSupport = () => {
    const [showSidebar, setShowSidebar] = useState(false);

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
    <div className='sunhead' style={{display:"flex"}}>
        <div style={{marginTop:"32px",marginRight:"5px"}}><Link to="/home" style={{textDecoration:"none",color:"inherit"}}><a>Home</a></Link></div>
        <div><h1>.</h1></div>
        <div style={{marginLeft:"5px",marginTop:"32px",marginRight:"5px"}}><Link to="/myMembership"  style={{textDecoration:"none",color:"inherit"}}><a>Dashboard</a></Link></div>
         <div><h1>.</h1></div>
        <div style={{marginLeft:"5px",marginTop:"32px"}}><a>Refferal Support</a></div>
    </div>
</div>
<div className='addrefbutton'><Link to="/createReferral"><button>Add Post</button></Link></div>
<div className='refHolder'>
    <table>
        <thead>
            <tr>
                <td>Titile</td>
                <td>Category</td>
                <td>Created on</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><div style={{display:"flex"}}><button style={{background:"green"}}><FaEdit/></button><button style={{background:"green"}}>< FaEye/></button><button style={{background:"red"}}><IoTrashBinSharp /></button></div></td>
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
    )
}

export default ReferralSupport
