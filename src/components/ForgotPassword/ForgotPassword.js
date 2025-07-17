import React from 'react'
import './ForgotPassword.css'
import Header from '../Heaader/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='forPassContainer'>
                <div className='fprPassHolder'>
                    <div className='reserPass'>
                        <p>Reset Password</p>
                    </div>
                    <div className='forInputContainer'>
                        <div style={{ display: "flex", height: "36px", border: "1px solid black", borderRadius: "5px", width: "80%", marginLeft: "10%" }}>
                            <div style={{ marginLeft: "5px", marginTop: "8px" }}><IoMail /></div>
                            <div style={{ width: "90%" }}><input placeholder='Email' /></div>
                        </div>
                    </div>
                    <div className='captacha'>
                        <div></div>
                        <div style={{height:"100%"}}></div>
                    </div>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
  <button>Send Mail</button>
</div>
                 <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>  <div style={{marginLeft:"20px",marginTop:"-20px"}}><p>Back to Login</p></div></Link> 
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ForgotPassword
