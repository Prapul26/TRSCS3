import React, { useState } from 'react'
import { BsFilterSquareFill } from "react-icons/bs";
import "./Trail.css"
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'

const Trail = () => {
  const [showNav, setNav] = useState(false)
const[drop1,setDrop1]=useState(false);
const[showReplies,setReplies]=useState(false);
const[showMessages,setMessages]=useState(false);
const handleReplies=()=>{
  setReplies((prev)=>!prev);
}
const handleMessages=()=>{
  setMessages((prev)=>!prev)
;}
const handelDrop1=()=>{
    setDrop1((prev)=>!prev)
}
  const handleNav = () => {
    setNav((prev) => !prev)
  }

  return (
    <div className="DIV1">
      <div className={`onehold ${showNav ? "in" : ""}`}>
       <div style={{display:"flex"}}><h1>TRACS</h1>
       <div className='mobileArrow'></div></div> 
        <div className='sideenavs'>
           <div><div className='sideenavs1'onClick={handelDrop1} ><h2>Account Settings</h2> <IoIosArrowDown className={`arrowDown1 ${drop1 ? 'rotate':""}`}/></div>
           {drop1 && (
            <div className='drop1One'>
             <div className='drop1One1'> <h2>My Membership</h2></div>
             <div className='drop1One1'> <h2>My Profile</h2></div>
             <div className='drop1One1'> <h2>Change Password</h2></div>
             <div className='drop1One1'> <h2>Affiliation</h2></div>
            </div>
           )}</div> 
            <div className='sideenavs1'><h2>Introductions</h2></div>
            <div className='sideenavs1'><h2>Referral Support</h2></div>
            <div className='sideenavs1'><h2>Resources</h2></div>
        </div>
      </div>

      <div className="twohold">
        <IoIosArrowForward
          size={40}
          className={`arrowIcon ${showNav ? "rotate" : ""}`}
          onClick={handleNav}
        />
        <h1>Messages</h1>
        <div className='messageCONTAINER'>
            <div className='filters'>
              <div className='nonFilter'><button>Make a Introduction</button></div>
              <div className='filterr1'><button onClick={handleReplies}> <div><BsFilterSquareFill /></div>Filter for Replies<div><IoIosArrowDown /></div></button>
              {
                showReplies && (
                  <div className='showReplies'>
                    <div className='showReplies1'><p>All Replies</p></div>
                    <div className='showReplies1'><p>No Replies</p></div>
                    <div className='showReplies1'><p>Closed</p></div>
                  </div>
                )
              }
               </div>
              <div className='filterr2'><button onClick={handleMessages}> <div><BsFilterSquareFill /></div>Filter for Messages <div><IoIosArrowDown /></div></button>
              {showMessages &&
                <div className='showMessages'>
                   <div className='showReplies1'><p>All </p></div>
                    <div className='showReplies1'> <p>Intros Received</p></div>
                    <div className='showReplies1'><p>Intros Sent</p></div>
                </div>
              }</div>
            </div>
            <div className='messageCard'>
              <div className='cardIntroo'><h2>Introduction</h2></div>
              <div className='cardDetailsContainer'>
                <div className='cardImagee'><img src={`https://tse4.mm.bing.net/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?pid=Api&P=0&h=180 `}/></div>
                <div className='cardDetailss'><p>Name</p>
                <p>Time</p></div>
              </div>
              <div className='card-subject'>
                <div className='cardSubject'><strong>awdadadawdikawhduiawihduawbdawbnbduawhd</strong></div>
                <div><IoIosArrowDown /></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Trail
