import React from "react";
import "./Inbox.css";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import UserHeader from "../components/UserHeader";
import { FaFileSignature } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { MdOutlineCardMembership } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
import SideNav from "./SideNav";
const Inbox = () => {
  const [intro, showIntro] = useState(false);
  const [settings, showSettings] = useState(false);
  const handelSettings = () => {
    showSettings(!settings);
  };
  const handelIntro = () => {
    showIntro(!intro);
  };
  return (
    <div>
      {" "}
      <UserHeader />
     
      <div className="IBPPP">
        <div className="usernav">
          <SideNav />
        </div>
        <div className="IBPP"> <MobileNavbar />
          <div className="c-header">
            <div className="c-h1">
              <h3>Inbox</h3>
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
              <Link to="/inbox">
                {" "}
                <p>inbox</p>
              </Link>
            </div>
          </div>
          <div className="inbox-container">
            <div className="messageInbox">
            <div className="mI1">
              <p>Filter:</p>
              <select>
                <option value="allReplies">All Replies</option>
                <option value="noReplies">No Replies(Bump)</option>
              </select>
            </div>
            <div className="mI2">
              <p>Filter:</p>
              <select>
                <option value="allReplies">All </option>
                <option value="noReplies">Inbox</option>
                <option value="noReplies">Sent</option>
              </select>
            </div>
          
             <div className="mI3"><Link to='/makeIntro'><button>Make Introduction</button></Link> </div></div>
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
                    <td>
                      <h3>Introduction</h3>
                      <p>januray,03 2023 09:18 am</p>
                      <h4>Mahesh kumar</h4>
                    </td>

                    <td>
                    <Link to='/reply'><button style={{ background: "green" }}>Reply</button></Link> 
                      <button style={{ background: "pink" }}>Bump</button>
                    </td>
                    <td>
                      <p>
                        <IoMdPerson />
                        Santhosh Kumar (Replies:0)
                      </p>
                      <p>
                        <IoMdPerson />
                        Skumar nelli(Replies:0)
                      </p>
                      <p>
                        <RiContactsBook3Line />
                        narendhar Kumar
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Introduction</h3>
                      <p>januray,03 2023 09:18 am</p>
                      <h4>Mahesh kumar</h4>
                    </td>

                    <td>
                    <Link to='/reply'> <button style={{ background: "green" }}>Reply</button></Link>
                      <button style={{ background: "pink" }}>Bump</button>
                    </td>
                    <td>
                      <p>
                        <IoMdPerson />
                        Santhosh Kumar (Replies:0)
                      </p>
                      <p>
                        <IoMdPerson />
                        Skumar nelli(Replies:0)
                      </p>
                      <p>
                        <RiContactsBook3Line />
                        narendhar Kumar
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Introduction</h3>
                      <p>januray,03 2023 09:18 am</p>
                      <h4>Mahesh kumar</h4>
                    </td>

                    <td>
                    <Link to='/reply'><button style={{ background: "green" }}>Reply</button></Link> 
                      <button style={{ background: "pink" }}>Bump</button>
                    </td>
                    <td>
                      <p>
                        <IoMdPerson />
                        Santhosh Kumar (Replies:0)
                      </p>
                      <p>
                        <IoMdPerson />
                        Skumar nelli(Replies:0)
                      </p>
                      <p>
                        <RiContactsBook3Line />
                        narendhar Kumar
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Introduction</h3>
                      <p>januray,03 2023 09:18 am</p>
                      <h4>Mahesh kumar</h4>
                    </td>

                    <td>
                    <Link to='/reply'> <button style={{ background: "green" }}>Reply</button></Link>
                      <button style={{ background: "pink" }}>Bump</button>
                    </td>
                    <td>
                      <p>
                        <IoMdPerson />
                        Santhosh Kumar (Replies:0)
                      </p>
                      <p>
                        <IoMdPerson />
                        Skumar nelli(Replies:0)
                      </p>
                      <p>
                        <RiContactsBook3Line />
                        narendhar Kumar
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Introduction</h3>
                      <p>januray,03 2023 09:18 am</p>
                      <h4>Mahesh kumar</h4>
                    </td>

                    <td>
                    <Link to='/reply'>   <button style={{ background: "green" }}>Reply</button></Link>
                      <button style={{ background: "pink" }}>Bump</button>
                    </td>
                    <td>
                      <p>
                        <IoMdPerson />
                        Santhosh Kumar (Replies:0)
                      </p>
                      <p>
                        <IoMdPerson />
                        Skumar nelli(Replies:0)
                      </p>
                      <p>
                        <RiContactsBook3Line />
                        narendhar Kumar
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Introduction</h3>
                      <p>januray,03 2023 09:18 am</p>
                      <h4>Mahesh kumar</h4>
                    </td>

                    <td>
                     <Link to='/reply'><button style={{ background: "green" }}>Reply</button></Link> 
                      <button style={{ background: "pink" }}>Bump</button>
                    </td>
                    <td>
                      <p>
                        <IoMdPerson />
                        Santhosh Kumar (Replies:0)
                      </p>
                      <p>
                        <IoMdPerson />
                        Skumar nelli(Replies:0)
                      </p>
                      <p>
                        <RiContactsBook3Line />
                        narendhar Kumar
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
