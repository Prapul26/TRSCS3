import React from 'react'
import './MakeIntroduction.css'
import { useState } from 'react'
import Header from '../components/Heaader/Header'
import Navbar from '../components/Navbar/Navbar'
import { ImCross } from "react-icons/im";
import Footer from '../components/Footer/Footer'
import { IoMdPerson } from "react-icons/io";
const MakeIntroduction = () => {
    const [users] = useState([
        { name: 'Dan Beckman', email: 'dan@vibrantfloorsbydan.com' },
        { name: 'Youssef Tawfik', email: 'youssef@revi.agency' },
        { name: 'Daniel Earl', email: 'danielearl93@gmail.com' },
        { name: 'Daniel Curry', email: 'daniel@indysitedepartment.com' },
        { name: 'Daniel Rubenstein', email: 'daniel@allinentry.com' },
        { name: "Dan O'Malia", email: 'daniel.omalia@northwest.com' },
        { name: 'Dan Hackett', email: 'dan@theprofitarchitect.com' },
      ]);
    
      const [selectedEmails, setSelectedEmails] = useState([]);
      const [searchText, setSearchText] = useState('');
    
      const handleToggle = (email) => {
        setSelectedEmails((prevSelected) =>
          prevSelected.includes(email)
            ? prevSelected.filter((item) => item !== email)
            : [...prevSelected, email]
        );
      };
    
      const handleRemove = (email) => {
        setSelectedEmails((prevSelected) =>
          prevSelected.filter((item) => item !== email)
        );
      };
    
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
    
  return (
    <div className='make'>
      <Header/>
      <Navbar/>
      <div className='crub'>
       <h1>Make Introduction</h1>
      </div>
      <div className='info-holder'> 
      <div className="form-group">
        <label >To</label><br/>
        <select className='toSelect'>
          <option>H7 Members</option>
          <option>TRACS Members</option>
          <option>My Contact</option>
        
        </select>
      </div>

      <div className="form-group">
        <label>Who would you like to send email to</label> <br/>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
         className='searchInput'/>
        <div className="checkbox-list">
          {filteredUsers.map((user) => (
            <div key={user.email} className="checkbox-item">
              <input
                type="checkbox"
                checked={selectedEmails.includes(user.email)}
                onChange={() => handleToggle(user.email)}
              />
              <span>{`${user.name} (${user.email})`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="selected-emails">
        <h4>Selected Emails</h4>
        {selectedEmails.map((email) => (
          <div key={email} className="email-item">
            <IoMdPerson size={25} />
            <span>{email}</span>
            <ImCross size={20} color='red'   onClick={() => handleRemove(email)}/>
          </div>
        ))}
      </div>
     <label>Select Template</label><br/>
     <select className='templateSelect'>
        <option>Select Template</option>
        <option>Introduce Emial Template Testing</option>
        <option>Introduce to COI</option>
        <option>Tesing Admin Template</option>
     </select><br/>
     <label>Subject</label><br/>
     <input type='text' className='subjectInput'/><br/>
     <label>Message</label><br/>
     <textarea className='messageText'/><br/>
     <div className='formButtons'>
        <button style={{background:"red"}}>Cancel</button>
<button style={{marginLeft:"10px",background:"green"}}>send</button>
     </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default MakeIntroduction
