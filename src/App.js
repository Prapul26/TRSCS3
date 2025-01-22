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
import CreateBusinessProfile from "./UserNavbar/CreateBusinessProfile";
import Signature from "./UserNavbar/Signature";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import Home from "./components/Home/Home";
import Pricing from "./components/PRICING/Pricing";
import About_us from "./components/ABOUT_US/About_us";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useState } from "react";
import Network from "./components/Network/Network";
import Contact from "./components/Contact/Contact";
import Partner from "./components/Partner/Partner";
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    
    <Router>
      <div>
       
        <Routes><Route path='/login' element={isLogin ? <Login switchToRegister={() => setIsLogin(false)} /> : <Register switchToLogin={() => setIsLogin(true)} />} />
          <Route path="/register" element={<Register/>}/>
         <Route path="/about_us" element={<About_us/>}/>
         <Route path="/network" element={<Network/>}/>
         <Route path="/" element={<Home/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/inbox" element={<Inbox/>}/>
          <Route path="/email" element={<Email/>}/>
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/addContacts" element={<AddContacts/>}/>
          <Route path="/myMembership" element={<MyMembership/>} />
          <Route path="/orderHistory" element={<OrderHistory/>}/>
          < Route path="/orderStatus" element={<OrderStatus/>}/>
          <Route path="/accountSettings" element={<AccountSettings/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/partner" element={<Partner/>}/>
          <Route path="/makeIntro" element={<MakeIntroduction />}/>
          <Route path="/businessProfile" element={<BusinessProfile/>}/>
<Route path="/signature" element={<Signature/>}/>
          <Route path="/createBusinessProfile" element={<CreateBusinessProfile/>} />
          <Route path="/mobileNavbar" element={<MobileNavbar/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
