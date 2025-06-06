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
import MemberDetails from "./components/MemberDetails/MemberDetails";
import Affiliation from "./UserNavbar/Affiliation";
import MyAffiliation from "./UserNavbar/MyAffiliation";
import Payment from "./components/Payment/Payment";
import Reply from "./UserNavbar/Reply";
import New from "./components/New";
import Password from "./UserNavbar/Password";
import MyProfile from "./components/MyProfile/MyProfile";
import MessageDetails from "./UserNavbar/MessageDetails";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import ProfileData from "./components/API/ProfileData";
import AddTemplate from "./UserNavbar/AddTemplate";
import EditTemplate from "./UserNavbar/EditTemplate";
import EditContact from "./UserNavbar/EditContact";
import OrderDetails from "./UserNavbar/OrderDetails";
import ReplyMessage from "./UserNavbar/ReplyMessage";
import BumpMessage from "./UserNavbar/BumpMessage";


const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    
    <Router>
      <div>
       
        <Routes><Route path='/login' element={isLogin ? <Login switchToRegister={() => setIsLogin(false)} /> : <Register switchToLogin={() => setIsLogin(true)} />} />
          <Route path="/register" element={<Register/>}/>
         <Route path="/about_us" element={<About_us/>}/>
         <Route path="/memberDetails" element={<MemberDetails/>}/>
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
          <Route path="/orderHistory/:orderId" element={<OrderHistory/>}/>
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
          <Route path="/affiliation" element={<Affiliation/>}/>
          <Route path="/myAffiliation" element={<MyAffiliation/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/reply" element={<Reply/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/myProfile" element={<MyProfile/>}/>
          <Route path='/passwordChange' element={<Password/>}/>
          <Route path="/messageDetails" element={<MessageDetails/>}/>
          <Route path="/contactDetails" element={<ContactDetails />}/>
          <Route path="/mobileMenu" element={<MobileMenu />}/>
          <Route path='/profileData' element={<ProfileData />}/>
          <Route path="/addTemplate" element={<AddTemplate />}/>
          <Route path="/editTemplate/:id" element={<EditTemplate/>}/>
          <Route path="/editContact/:id" element={<EditContact/>}/>
          <Route path="/orderDetails/:orderId" element={<OrderDetails/>}/>
        <Route path="/replyMessage/:subject/:user_id/:replies_code" element={<ReplyMessage />} />
<Route path="/bumpMessage/:subject/:user_id/:replies_code/:is_bump" element={<BumpMessage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
