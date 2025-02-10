import React, { useState } from "react";
import "./MyAffiliation.css";
import UserHeader from "../components/UserHeader";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import Data3 from "../components/Data/Data3";
const MyAffiliation = () => {
    

  return (
    <div>
      <UserHeader />
      <MobileNavbar />
      <div className="myAfflilationPage">
        <div className="usernav">
          <SideNav />
        </div>
        <div className="myAffiliationCOntainer">
         <div className="e1-header">
                 <div className="c-h1">
                   <h3>My Affiliation</h3>
                 </div>
                 <div className="c-h2">
                  <Link to='/home'><p>Home</p></Link> 
                   <span>.</span>
                 <Link to='/myMembership'> <p>Dashboard</p></Link> 
                   <span>.</span>
                 <Link to='/myAffiliation'> <p>my affiliation</p></Link> 
                 </div>
               </div>
          <div className="myAffiliation-holder">
<h2>My Affiliation</h2>
<div className="affliliationTable-holder">
<div className="affiliationDate">
   
    <input type="date"  placeholder="date"/>
    <button>Search</button>
</div>
<table>
    <thead>
        <td>Serial</td>
        <td>Member Name</td>
        <td>Package Name</td>
        <td>Date of Purchase</td>
        <td>Package Price</td>
        <td>Commission</td>
        <td>Amount</td>
    </thead>
    { Data3.map((item,index)=>(
         <tbody>
        <tr key={index}>
            <td>{item.serial} </td>
            <td>{item.member}</td>
            <td>{item.package}</td>
            <td>{item.date}</td>
            <td>{item.price}</td>
            <td>{item.commision}</td>
            <td>{item.amount}</td>
            <td></td>
        </tr>
    </tbody>
    ))}
   
</table>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAffiliation;
