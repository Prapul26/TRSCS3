import {React,useState} from "react";
import "./Affiliation.css";
import UserHeader from "../components/UserHeader";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import { IoCopy } from "react-icons/io5";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import MobileMenu from "../components/MobileMenu/MobileMenu";
const Affiliation = () => {
  const [basic,showBasic]=useState(false);
  const [standard,showStandard]=useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  
     const showMobnav = () => {
       setShowSidebar(prev => !prev);
   
     };
  const handelStandard=()=>{
showStandard(!standard)
  }
  const handelBasic=()=>{
showBasic(!basic)
  }
  const [activeTab, setActiveTab] = useState("active");
  const[intro,showIntro]=useState(false)
  const [settings,showSettings]=useState(false);
     const handelSettings=()=>{
      showSettings(!settings);
     }
   const handelIntro=()=>{
     showIntro(!intro)
   }
  return (
    <div className='mobMenuaa'>
<div className='mobMenu33'>
{showSidebar && (<MobileMenu />)}
</div>
    <div className="affili">
      <UserHeader />
     
      <div className="myAfflilationPage">
        <div className="usernav">
          <SideNav />
        </div>
        <div className="myAffiliationCOntainer"> <div style={{marginLeft:"-82px"}}><MobileNavbar  showMobnav={showMobnav} /></div>
    <div className="dd-holder">
<h2>Affiliation</h2>
    </div>
          
          <div className="myAffiliation-holder">
<h3>Commission : 20%</h3><br/>
<h3>Affiliation <span style={{color:"red"}}> *</span></h3>
<div className="affdiv" >
  <div className="affdiv1"><input  placeholder="https://tracsdev.apttechsol.com/user/pricing-plan/A-I22k4"/></div>
  <div className="affdiv2"><button style={{backgroundColor:"green"}}>Copy text</button></div>
</div>
          </div>
          <div className="affTable">
           <table>
            <thead >
              <tr>
                <td style={{color:"black"}}>Package name</td>
                <td style={{color:"black"}}>Package Price</td>
                <td style={{color:"black"}}>Commission Amount</td>
                <td style={{color:"black"}}>Purchased By</td>
                <td style={{color:"black"}}>Pusrchased On</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic</td>
                <td>$80</td>
                <td>$16</td>
                <td>Santhosh Kumar</td>
                <td>2025-02-27 06:58:02</td>
              </tr>
              <tr>
                <td>Standard</td>
                <td>$150</td>
                <td>$30</td>
                <td>Swaran Jeeth</td>
                <td>2025-02-27 07:40:14</td>
              </tr>
            </tbody>
           </table>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Affiliation;
