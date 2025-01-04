import React from "react";
import "./Inbox.css";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import UserHeader from "../components/UserHeader";
const Inbox = () => {
  return (
    <div>
      <UserHeader />
      <div className="c-header">
        <div className="c-h1">
          <h3>Inbox</h3>
        </div>
        <div className="c-h2">
          <p>Home</p>
          <span>.</span>
          <p>Dashboard</p>
          <span>.</span>
          <p>Inbox</p>
        </div>
      </div>
      <div className="inbox-container">
        <p>Filter for Bump Emails</p>
        <p>Filter:</p>
        <select>
          <option value='allReplies'>All Replies</option>
          <option value='noReplies'>No Replies(Bump)</option>
        </select>
        <div className="inbox-holder">
<table>
  <thead>
    <tr>
      <td>Subject</td>
      <td>Action</td>
      <td>To</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><h3>Introduction</h3>
      <p>januray,03 2023 09:18 am</p>
      <h4>Mahesh kumar</h4></td>
    
    <td>
      <button style={{background:"green"}}>Reply</button>
      <button style={{background:"pink"}}>Bump</button>
    </td>
    <td>
      <p><IoMdPerson />Santhosh Kumar (Replies:0)</p>
      <p><IoMdPerson />Skumar nelli(Replies:0)</p>
      <p><RiContactsBook3Line />narendhar Kumar</p>
    </td>
    </tr>
    <tr>
      <td><h3>Introduction</h3>
      <p>januray,03 2023 09:18 am</p>
      <h4>Mahesh kumar</h4></td>
    
    <td>
      <button style={{background:"green"}}>Reply</button>
      <button style={{background:"pink"}}>Bump</button>
    </td>
    <td>
      <p><IoMdPerson />Santhosh Kumar (Replies:0)</p>
      <p><IoMdPerson />Skumar nelli(Replies:0)</p>
      <p><RiContactsBook3Line />narendhar Kumar</p>
    </td>
    </tr>
    <tr>
      <td><h3>Introduction</h3>
      <p>januray,03 2023 09:18 am</p>
      <h4>Mahesh kumar</h4></td>
    
    <td>
      <button style={{background:"green"}}>Reply</button>
      <button style={{background:"pink"}}>Bump</button>
    </td>
    <td>
      <p><IoMdPerson />Santhosh Kumar (Replies:0)</p>
      <p><IoMdPerson />Skumar nelli(Replies:0)</p>
      <p><RiContactsBook3Line />narendhar Kumar</p>
    </td>
    </tr>
    <tr>
      <td><h3>Introduction</h3>
      <p>januray,03 2023 09:18 am</p>
      <h4>Mahesh kumar</h4></td>
    
    <td>
      <button style={{background:"green"}}>Reply</button>
      <button style={{background:"pink"}}>Bump</button>
    </td>
    <td>
      <p><IoMdPerson />Santhosh Kumar (Replies:0)</p>
      <p><IoMdPerson />Skumar nelli(Replies:0)</p>
      <p><RiContactsBook3Line />narendhar Kumar</p>
    </td>
    </tr>
    <tr>
      <td><h3>Introduction</h3>
      <p>januray,03 2023 09:18 am</p>
      <h4>Mahesh kumar</h4></td>
    
    <td>
      <button style={{background:"green"}}>Reply</button>
      <button style={{background:"pink"}}>Bump</button>
    </td>
    <td>
      <p><IoMdPerson />Santhosh Kumar (Replies:0)</p>
      <p><IoMdPerson />Skumar nelli(Replies:0)</p>
      <p><RiContactsBook3Line />narendhar Kumar</p>
    </td>
    </tr>
    <tr>
      <td><h3>Introduction</h3>
      <p>januray,03 2023 09:18 am</p>
      <h4>Mahesh kumar</h4></td>
    
    <td>
      <button style={{background:"green"}}>Reply</button>
      <button style={{background:"pink"}}>Bump</button>
    </td>
    <td>
      <p><IoMdPerson />Santhosh Kumar (Replies:0)</p>
      <p><IoMdPerson />Skumar nelli(Replies:0)</p>
      <p><RiContactsBook3Line />narendhar Kumar</p>
    </td>
    </tr>
    
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
