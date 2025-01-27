import React from 'react'
import './MakeIntroduction.css'
import { useState } from 'react'
import { IoMail } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";

import Header from '../components/Heaader/Header'
import Navbar from '../components/Navbar/Navbar'
import { ImCross } from "react-icons/im";
import Footer from '../components/Footer/Footer'

const MakeIntroduction = () => {
    const [users] = useState([
        { network:"H7 Media Network",name: 'Dan Beckman', email: 'dan@vibrantfloorsbydan.com' ,photo:"https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBiZWluZ3xlbnwwfHwwfHx8MA%3D%3D"},
        {network:"H7 Media Network", name: 'Youssef Tawfik', email: 'youssef@revi.agency' ,photo:"https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg"},
        { network:"H7 Media Network",name: 'Daniel Earl', email: 'danielearl93@gmail.com',photo:"https://static.vecteezy.com/system/resources/previews/007/209/020/non_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg" },
        { network:"H7 Media Network",name: 'Daniel Curry', email: 'daniel@indysitedepartment.com',photo:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww" },
        {network:"H7 Media Network", name: 'Daniel Rubenstein', email: 'daniel@allinentry.com',photo:"https://static.vecteezy.com/system/resources/previews/010/359/290/non_2x/headshot-of-young-lovely-woman-keeps-hands-on-neck-has-european-appearance-happy-to-hear-pleasant-words-wears-casual-sweater-isolated-over-blue-background-human-face-expressions-concept-free-photo.JPG" },
        {network:"H7 Media Network", name: "Dan O'Malia", email: 'daniel.omalia@northwest.com' ,photo:"https://thumbs.dreamstime.com/b/beautiful-young-woman-clean-fresh-skin-look-camera-girl-beauty-face-care-facial-treatment-cosmetology-beauty-spa-118355246.jpg"},
        {network:"H7 Media Network", name: 'Dan Hackett', email: 'dan@theprofitarchitect.com' ,photo:"https://www.shutterstock.com/image-photo/happy-young-man-portrait-handsome-260nw-262734242.jpg"},
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
       <h1 style={{color:'white'}}>Make Introduction</h1>
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
              <span className='spandiv'><div><img src={user.photo}/></div><div style={{marginTop:"-8px"}}><h3>{user.network}</h3> <h4> <IoMdPerson style={{marginRight:"10px"}} size={15}/>{user.name} <br/><IoMail color='black'style={{marginRight:"10px"}} size={15}/>{user.email}</h4></div></span>
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
