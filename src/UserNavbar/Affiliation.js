import {React,useState} from "react";
import "./Affiliation.css";
import UserHeader from "../components/UserHeader";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import { IoCopy } from "react-icons/io5";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
const Affiliation = () => {
  const [basic,showBasic]=useState(false);
  const [standard,showStandard]=useState(false);
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
    <div>
      <UserHeader />
     
      <div className="myAfflilationPage">
        <div className="usernav">
          <SideNav />
        </div>
        <div className="myAffiliationCOntainer"> <div style={{marginLeft:"-79px"}}><MobileNavbar /></div>
          <div className="e1-header">
            <div className="c-h1">
              <h3>Affiliation</h3>
            </div>
            <div className="c-h2">
              <Link to="/home">
                <p>Home</p>
              </Link>
              <span>.</span>
              <Link to="/myMembership">
                {" "}
                <p>Dashboard</p>
              </Link>
              <span>.</span>
              <Link to="/affiliation">
                {" "}
                <p>affiliation</p>
              </Link>
            </div>
          </div>
          <div className="myAffiliation-holder">
<h1>Affiliation commision for H7 Members is 20%</h1>
<div className="basicPack">
  <div className="bpackage">
    <div><h3>Basic Package : <span style={{color:"green"}}>80$</span></h3></div>
    <div><button  onClick={handelBasic}>Generate Link</button></div>
  </div>
  {
    basic && <div className='bpack'>
       <div style={{width:"60%"}}><input placeholder="basic/packae/Id"/></div>
       <div style={{marginLeft:'20px'}}><IoCopy  size={25} /></div>
      </div>
  }
</div>
<div className="standardPack">
<div className="spackage">
    <div><h3>Standard Package : <span style={{color:"green"}}>150$</span></h3></div>
    <div ><button onClick={handelStandard}>Generate Link</button></div>
  </div>
  { standard && <div className='spack'>
   <div style={{width:"60%"}}> <input  placeholder="Stanard/packae/Id"/></div>
    <div style={{marginLeft:'20px'}}><IoCopy size={25}/>
    </div>
    </div>}
</div>
<div className="activeStatus">
        <div className="activeStatus-holder">
          <div
            className={`active ${activeTab === "active" ? "selected" : ""}`}
            onClick={() => setActiveTab("active")}
          >
            <h3>Active</h3>
            <span
              style={{
                height: "26px",
                borderRadius: "50%",
                background: "green",
                width: "26px",
                marginLeft: "6px",
                textAlign: "center",
                color: "white",
                lineHeight: "26px",
              }}
            >
              0
            </span>
          </div>
          <div
            className={`inactive ${activeTab === "inactive" ? "selected" : ""}`}
            onClick={() => setActiveTab("inactive")}
          >
            <h3>Inactive</h3>
            <span
              style={{
                height: "26px",
                borderRadius: "50%",
                background: "red",
                width: "26px",
                marginLeft: "6px",
                textAlign: "center",
                color: "white",
                lineHeight: "26px",
              }}
            >
              0
            </span>
          </div>
        </div>
        {activeTab === "active" ? (
          <div className="result">
            <h1>No Active Results Found</h1>
          </div>
        ) : (
          <div className="result">
            <h1>No Inactive Results Found</h1>
          </div>
        )}
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;
