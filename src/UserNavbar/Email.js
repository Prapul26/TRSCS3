import React from "react";
import "./Email.css";
import UserHeader from "../components/UserHeader";
const Email = () => {
  return (
    <div>
      <UserHeader />
      <div className="c-header">
        <div className="c-h1">
          <h3>Email Template</h3>
        </div>
        <div className="c-h2">
          <p>Home</p>
          <span>.</span>
          <p>Dashboard</p>
          <span>.</span>
          <p>email/ template</p>
        </div>
      </div>
      <div className="addTemplateButton">
        <button style={{ background: "green" }}> Add Template</button>
      </div>
      <div className="Email-container">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Subject</td>
              <td>Body</td>
              <td>Created On</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>Inroduction email template testing</p>
              </td>
              <td>
                <p>New Email template testing</p>
              </td>
              <td>
                <p>hi Hello</p>
                <p>........</p>
              </td>
              <td>
                <p>2024-11-28</p>
              </td>
              <td>
                <button style={{ backgroundColor: "green" }}>Edit</button>
                <button style={{ backgroundColor: "red" }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <p>Inroduction email template testing</p>
              </td>
              <td>
                <p>New Email template testing</p>
              </td>
              <td>
                <p>hi Hello</p>
                <p>........</p>
              </td>
              <td>
                <p>2024-11-28</p>
              </td>
              <td>
                <button style={{ backgroundColor: "green" }}>Edit</button>
                <button style={{ backgroundColor: "red" }}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <p>Inroduction email template testing</p>
              </td>
              <td>
                <p>New Email template testing</p>
              </td>
              <td>
                <p>hi Hello</p>
                <p>........</p>
              </td>
              <td>
                <p>2024-11-28</p>
              </td>
              <td>
                <button style={{ backgroundColor: "green" }}>Edit</button>
                <button style={{ backgroundColor: "red" }}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Email;
