import React from 'react'
import './Payment.css'
import Header from '../Heaader/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { CiCreditCard1 } from "react-icons/ci";
import { useState } from 'react';

const Payment = () => {
    const [selectedOption, setSelectedOption] = useState(false) 
    const addDropdown=()=>{
    
        setSelectedOption(!selectedOption)
      }
    return (
        <div className='paymentContainer'>
       <Header/>
       <Navbar/>
            <div className='payh'> <div className='ph41'></div><h1 style={{ color: 'white' }}> Payment Page</h1></div>
            <div className='payment-holder'>
                <div className='sh'><h1>Stripe</h1></div>
                <div className='payn'>
                    <div className='firstn'>
                        <label>Name</label>
                        <input type='text' />
                    </div>
                    <div className='lastn'>
                        <label>Last Name</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='address'>
                    <div className='emailn'>
                        <label>Email</label>
                        <input type='email' />
                    </div>
                    <div className='street'>
                        <label> Street Address</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='city'>
                    <div className='cityn'>
                        <label>city</label>
                        <input type='text' />
                    </div>
                    <div className='state'>
                        <label> Street Address</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='code'>
                <div className='pin'>
                        <label>Postal Code</label>
                        <input type='text' />
                    </div>
                    <div className='Mobile'>
                        <label> Mobile Number</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='cardp'>
                    <label>Card Number</label>
                    <div className='card'>
                    <CiCreditCard1 size={30}/>
                        <div className='cardn'><input type='text' placeholder='card number'/></div>
                        <div className='cardy'><input type='text' placeholder='YY'/></div>
                        <div  className='cardm'><input type='text'placeholder='MM'/></div>
                        <div  className='cardd'><input type='text' placeholder='DD'/></div>
                    </div>
                </div>
                
                <div className="memberDrop">
            <p>How did you Know About US ?</p>
            <select onChange={addDropdown}>
              <option >nan</option>
              <option value="H7Member">H7 Menmber</option>
            </select>
            {selectedOption && (
            <div className="addDrop"> 
              <p>Select your H7 Member</p>
              <select>
                <option value="">Select</option>
                <option value="Referral 1">Referral 1</option>
                <option value="Referral 2">Referral 2</option>
                <option value="Referral 3">Referral 3</option>
                <option value="Referral 4">Referral 4</option>
              </select>
            </div>
          )}
          </div>
                <div className='stripe'>
                    <button>Pay With Stripe</button>
                </div>
            </div>
         <Footer/>
        </div>
    )
}
export default Payment;