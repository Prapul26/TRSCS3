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
import Header from "./components/Heaader/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MakeIntroduction from "./UserNavbar/MakeIntroduction";
import BusinessProfile from "./UserNavbar/BusinessProfile";

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
          <Route path="/header" element={<Header/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/makeIntro" element={<MakeIntroduction />}/>
          <Route path="/businessProfile" element={<BusinessProfile/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
