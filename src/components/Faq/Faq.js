import React from 'react'
import './Faq.css';
import Header from '../Heaader/Header';
import Navbar from '../Navbar/Navbar';

import Footer from '../Footer/Footer';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Faq = () => {
  return (
  <div className="homeHolder">
      <Header />
      <Navbar />
      <div className="ph1">
          <div className="p1h1">
            <h1 style={{fontSize:'35px'}}>Frequently Asked Questions</h1>
          </div>
        </div>    
        <div className='faqContainer'>
          
            </div> 
      <Footer />
    </div>
  );
};

export default Faq
