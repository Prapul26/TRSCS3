import {React,useEffect,useState} from "react";
import "./Affiliation.css";
import UserHeader from "../components/UserHeader";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import { IoCopy } from "react-icons/io5";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import axios from "axios";
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
  const[data,setData]=useState([])
     const handelSettings=()=>{
      showSettings(!settings);
     }
   const handelIntro=()=>{
     showIntro(!intro)
   }
   useEffect(()=>{
    const fetchData=async()=>{
      const token=localStorage.getItem("authToken");
      try{
        const response= await axios.get("https://tracsdev.apttechsol.com/api/affiliation",{
          headers:{
            Authorization:"Bearer 36|NUtJgD15eoKNZnQXYgYo5G3cbQdZe2PdeHD16Yy1"
          }
        });
        setData(response.data);
      }catch(err){
        console.log(err)
      }
    }
   fetchData()},[])
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
      <div  style={{display:'flex'}}>
        <div><h2>Affiliation</h2></div>
<div className="status-toggle">
  <span
  className={`status-label ${activeTab === "active" ? "active" : "inactive"}`}
  onClick={() => setActiveTab(activeTab === "active" ? "inactive" : "active")}
>
  {activeTab === "active" ? "Active" : "In Active"}
</span>
</div>

      </div>

    </div>
          
          <div className="myAffiliation-holder">
<h3>Commission : 20%</h3><br/>
<h3>Affiliation <span style={{color:"red"}}> *</span></h3>
<div className="affdiv" >
  <div className="affdiv1"><input value={data.link_exist?.affiliate_link || ""} readOnly /></div>
  <div className="affdiv2"><button style={{backgroundColor:"green"}}>Copy text</button></div>
</div>
          </div>
         {activeTab === "active" && (
  <div className="affTable">
    <table>
      <thead>
        <tr>
          <td style={{ color: "black" }}>Package name</td>
          <td style={{ color: "black" }}>Package Price</td>
          <td style={{ color: "black" }}>Commission Amount</td>
          <td style={{ color: "black" }}>Purchased By</td>
          <td style={{ color: "black" }}>Purchased On</td>
        </tr>
      </thead>
      <tbody>
        {data.data?.map((item, index) => (
          <tr key={index}>
            <td>{item.package_name}</td>
            <td>${item.package_price}</td>
            <td>${item.commission_amount}</td>
            <td>{item.user?.name || "N/A"}</td>
            <td>{new Date(item.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
   
  </div>
)}

        </div>
      </div>
    </div></div>
  );
};

export default Affiliation;
