import React from 'react'
import './Signature.css'
import UserHeader from '../components/UserHeader'
const Signature = () => {
  return (
    <div>
      <UserHeader/>
      <div className='signature-holder'>
        <form>
            <label><h2>Signature</h2></label><br/>
            <textarea placeholder=" Name:
        Identity Name:
        Email:
        Calender:"/><br/>
            <button>SAVE</button>
        </form>
      </div>
    </div>
  )
}

export default Signature
