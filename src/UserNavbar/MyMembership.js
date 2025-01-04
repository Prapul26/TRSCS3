import React from 'react'
import './MyMembership.css'
import UserHeader from '../components/UserHeader'
const MyMembership = () => {
  return (
    <div>
      <UserHeader/>
      <div className='myMembership-button'>
        <button>Order History</button>
      </div>
      <div className='myMembership-container'>
<div className='membershipH1'><h1>Current Active Package</h1></div>
<div className='memtable'>
   <div className='t1'>
    <div className='m1t1'><p>Package Name</p></div>
    <div className='m1t2'><p>Price</p></div>
    <div className='m1t3'><p>Purchase Date</p></div>
    <div className='m1t4'><p>Extire Date</p></div>
   </div>
   <div className='t2'>
    <div className='m2t1'><p>Standard</p></div>
    <div className='m2t2'><p>$120</p></div>
    <div className='m2t3'><p>07 july,2024</p></div>
    <div className='m2t4'><p>07 july,2025</p></div>
   </div>
</div>
      </div>
    </div>
  )
}

export default MyMembership
