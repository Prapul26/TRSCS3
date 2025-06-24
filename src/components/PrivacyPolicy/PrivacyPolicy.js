import React from 'react'
import './PrivacyPolicy.css'
import Header from '../Heaader/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const PrivacyPolicy = () => {
  return (
    <div className="homeHolder">
      <Header />
      <Navbar />
      <div>
       <div className="ph1">
          <div className="p1h1">
            <h1 style={{fontSize:'35px'}}>Privacy Policy</h1>
          </div>
        </div>
        <div className='privacyContainer'>
            <h2>Privacy Policy</h2>
            <p>Introduction :</p>
            <p>The mission of TRACS Network is to connect the world’s local businesses and organizations to enable them to be more productive and successful. To achieve our Mission, we make services available through our website, mobile applications, and developer platform, to help you, your connections, and your community meet, exchange ideas, learn, make deals, or find opportunities and make decisions in a network of trusted relationships and groups.</p>
            <p>Being part of TRACS Network means sharing information about yourself with other individuals and businesses, communicating with them, as well as working privately on your own. By default, your account is set up to share the information that we have found the vast majority of our Users are interested in sharing. But the amount and type of information you decide to share, and with whom you share it, is up to you.</p>
            <p>Here are the three main types of information on TRACS Network:</p>
            <p>Information about yourself that you share. This is the information that your connections, other businesses, and organizations see about you. This includes your profile and your contributions to discussions on TRACS Network Groups, Answers, or other community features TRACS Network may offer such as “Profile Stats” which, if you choose to opt-in, can show you who viewed your profile (and will show others when you visited their profiles). You have control over what you share, and you can update information at any time.</p>
            <p>Communication. We help you communicate with connections and other businesses and organizations. Some of this is one-to-one, some of it is in groups, and some of it is public discussion. You decide how much or how little you wish to communicate to individuals or groups.</p>
            <p>Private activity. We also provide tools that you can use privately on TRACS Network (for example, searching, or adding notes to your connections information.) These actions and information are private and we don't share or distribute them to others on the website.</p>
            <p>Of course, maintaining your trust is our top concern, so we adhere to the following principles to protect your privacy:</p>
            <p>We do not rent, sell, or otherwise provide your personally identifiable information to third parties without your consent, except as described in this policy or as required by law</p>
            <p>We do not share any information you have not chosen to display on your TRACS Network profile to other parties, unless compelled by law, or as necessary to enforce our User Agreement or protect the rights, property, or personal safety of TRACS Network, its Users, and the public.</p>
            <p>All information that you provide will be protected with industry standard protocols and technology.</p>

        </div>
        </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
