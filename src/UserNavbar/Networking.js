import React, { useState } from 'react'
import './Networking.css';

import { IoIosInformationCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye } from 'react-icons/fa';
import { IoTrashBinSharp } from 'react-icons/io5';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import UserHeader from '../components/UserHeader';
import SideNav from './SideNav';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';
const Networking = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const showMobnav = () => {
    setShowSidebar(prev => !prev);
  }
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
             <div className='netwoking101Container'>
               <iframe src="https://tracsdev.apttechsol.com/proxynetwork" style={{width:'100%',height:"100%"}}></iframe>

             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Networking
