import React from "react";
import "./Contacts.css";
import UserHeader from "../components/UserHeader";
import { Link } from "react-router-dom";
const Contacts = () => {
  return (
    <div >
      <UserHeader />
      <div className="contacts-container">
        <div className="c-header">
          <div className="c-h1">
            <h3>Contacts Management Template</h3>
          </div>
          <div className="c-h2">
            <p>Home</p>
            <span>.</span>
            <p>Dashboard</p>
            <span>.</span>
            <p>contacts management template</p>
          </div>
        </div>
        <div className="contacts-buttons">
          <div className="import">
            <div>
              <input type="file" />
            </div>
            <div className="importB">
              <button>Import</button>
            </div>
          </div>
          <div className="add">
            <div className="downloadB">
              <button>Download Sample</button>
            </div>
            <div className="addB">
             <Link to='/addContacts' style={{textDecoration:"none",color:"inherit"}}> <button>Add Contacts</button></Link> 
            </div>
          </div>
        </div>
        <div className="contacts-table">
            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Created On</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>dawda</td>
                        <td>awdad</td>
                        <td>awdad</td>
                        <td>awdad</td>
                        <td ><button style={{background:"green"}}>edit</button><button style={{background:"red"}}>delete</button></td>
                    </tr>
                    <tr>
                        <td>dawda</td>
                        <td>awdad</td>
                        <td>awdad</td>
                        <td>awdad</td>
                        <td ><button style={{background:"green"}}>edit</button><button style={{background:"red"}}>delete</button></td>
                    </tr>
                    <tr>
                        <td>dawda</td>
                        <td>awdad</td>
                        <td>awdad</td>
                        <td>awdad</td>
                        <td ><button style={{background:"green"}}>edit</button><button style={{background:"red"}}>delete</button></td>
                    </tr>
                    <tr>
                        <td>dawda</td>
                        <td>awdad</td>
                        <td>awdad</td>
                        <td>awdad</td>
                        <td ><button style={{background:"green"}}>edit</button><button style={{background:"red"}}>delete</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
      </div>
    </div>
  );
};

export default Contacts;
