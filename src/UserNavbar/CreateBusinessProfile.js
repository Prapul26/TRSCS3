import React from 'react'
import './CreateBusinessProfile.css'
import UserHeader from '../components/UserHeader'
const CreateBusinessProfile = () => {
  return (
    <div className='cbpbc'>
      <UserHeader/>
      <div className="c-header">
          <div className="c-h1">
            <h3>Business Information</h3>
          </div>
          <div className="c-h2">
            <p>Home</p>
            <span>.</span>
            <p>Dashboard</p>
            <span>.</span>
            <p>Business Profile</p>
          </div>
        </div>
        <div className='businessProfileButton'><button>Back</button></div>
        <div className='createBusinessProfileContainer'>
            <div className='businessInformation'><h2>Business Information</h2></div>
            <div className='businessInformation-holder'>
                <form>
                    <label>Business Title</label><span>*</span><br/>
                    <input className='titleInput' type='text'  /><br/>
                    <label>Profile Identifier</label><span>*</span><br/>
                    <input className='profileInput' type='text'/><br/>
                    <div className='cp-holder'>
                        <div className='category'>
                            <label>Category</label><span>*</span><br/>
                            <input className='categoryInput' type='text'/>
                        </div>
                        <div className='Phone'>
                            <label>Phone</label><span>*</span><br/>
                            <div className='phone-Holder'></div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateBusinessProfile
