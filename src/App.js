import React from "react";
import UserHeader from "./components/UserHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./UserNavbar/Contacts";
import Inbox from "./UserNavbar/Inbox";
import Email from "./UserNavbar/Email";
import Intro from "./UserNavbar/Intro";
import AddContacts from "./UserNavbar/AddContacts";
import MyMembership from "./UserNavbar/MyMembership";
import OrderHistory from "./UserNavbar/OrderHistory";
import OrderStatus from "./UserNavbar/OrderStatus";
import AccountSettings from "./UserNavbar/AccountSettings";

const App = () => {
  return (
    <Router>
      <div>
       
        <Routes>
         
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/inbox" element={<Inbox/>}/>
          <Route path="/email" element={<Email/>}/>
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/addContacts" element={<AddContacts/>}/>
          <Route path="/" element={<MyMembership/>} />
          <Route path="/orderHistory" element={<OrderHistory/>}/>
          < Route path="/orderStatus" element={<OrderStatus/>}/>
          <Route path="/accountSettings" element={<AccountSettings/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
