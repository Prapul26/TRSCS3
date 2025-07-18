import React, { useState } from 'react'
import './ViewTemplate.css'
import MobileMenu from '../components/MobileMenu/MobileMenu';
import UserHeader from '../components/UserHeader';
import SideNav from './SideNav';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';
import { Link, useLocation } from 'react-router-dom';
const ViewTemplate = () => {
 const [showSidebar, setShowSidebar] = useState(false);
     const location=useLocation();
     const{emailBody}=location.state || {};
       const showMobnav = () => {
         setShowSidebar(prev => !prev);
     
       };

  return (
    <div className='mobMenuaa'>
<div className='mobMenu33'>
{showSidebar && (<MobileMenu />)}
</div>
    <div> <UserHeader />
    
<div className="EMPPP">
  <div className="usernav">
                   <SideNav/>
                   </div>
    <div  className="EMPP">
     <MobileNavbar showMobnav={showMobnav}/>
      <div className="d-header">
      <h2>View Template</h2>
      </div>
      
<div style={{marginLeft:"2%",marginBottom:"40px"}}><Link to="/email"><button>Back</button></Link></div>
     
      <div className="Email-container"> <div style={{padding:"10px",background:'white'}}>
        <div style={{marginLeft:"12px",marginTop:"15px"}}><h3>Email Body</h3></div>
       <div style={{ whiteSpace: "pre-wrap", background: "#ffffffff", padding: "15px", borderRadius: "8px" }}>
        {emailBody ? (
          <div dangerouslySetInnerHTML={{ __html: emailBody }} />
        ) : (
          <p>No email body provided.</p>
        )}
      </div>
      </div>
      </div>
    </div></div></div></div>
  );
};


export default ViewTemplate
