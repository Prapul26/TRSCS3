import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Header from '../Heaader/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { IoLockClosed, IoPerson } from 'react-icons/io5';
import { IoIosInformationCircle } from 'react-icons/io';
import { AiTwotoneQuestionCircle } from 'react-icons/ai';
import axios from 'axios';
import { FaCircleQuestion } from 'react-icons/fa6';

const Login = ({ switchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const[popUp,setPopUp]=useState(false);
    const[popupMessage,setPopupMessage]=useState([])
    const showPopUp=()=>{
        setPopUp(true);
    }
    const navigate = useNavigate();
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch("https://tracsdev.apttechsol.com/api/storeLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      setMessage("Login successful!");
      sessionStorage.setItem("authToken", data.token);
      navigate("/home");
    } else {
      setMessage(data.message || "Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    setMessage("An error occurred. Please try again later.");
  }
};

   
useEffect(()=>{
  const fetchData=async()=>{
        try{
const response=await axios.get("https://tracsdev.apttechsol.com/api/login");
setPopupMessage(response.data.keyfields.find(item=>item.id === 10)?.description || "")
        }catch(err){
console.log(err)
        }
    };

fetchData();},[]);
const adjustInternalHtml=(html)=>{
    const container =document.createElement("div");
    container.innerHTML=html;
    return container.innerHTML;
}

    return (
        <div>
            <Header />
            <Navbar />
            <div className='LoginPage'>
                <div className='abd'>
                    <h1>Sign up or log in to your account</h1>

                    <div className='no1'>
                        <div className='oneb'><h1>1</h1></div>
                        <div className='oneContent'>
                            <h4>Current H7 Members do not need to Sign Up. They only need to Sign In.</h4>
                            <p>If you are logging in first time, click on Forgot Password link to create a password. It will send you an email to your registered email. Please also check your SPAM email folder.</p>
                        </div>
                    </div>

                    <div className='no2'>
                        <div className='twob'><h1>2</h1></div>
                        <div className='twoContent'>
                            <h4>NEW TRACS Users need to Sign Up first unless they are a current H7 Member. H7 Members need to follow up Step 1.</h4>
                        </div>
                    </div>
                </div>

                <form className='LoginContainer' onSubmit={handleLogin}>
                    <h1>Sign In</h1>
<div className='loginInputsDiv'>
    <div style={{marginTop:"5px"}}><IoPerson /></div>
    <div style={{width:"90%"}}><input
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /></div>
</div>

                    <br />
<div className='loginInputsDiv'>
    <div style={{marginTop:"5px"}}><IoLockClosed /></div>
    <div style={{width:"90%"}}>  <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /></div>
</div>

                  <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex" }}><div><input type='checkbox' /></div><div className='forpassd'><p>Keep me Log In</p></div></div>
                        <Link to='/forgotPassword' style={{ textDecoration: "none" }}> <div className='forpass'><p>Forgot Password ?</p></div></Link>
                    </div>
                    <button type='submit'>Login</button>
{
    popUp && (<div className='popShow' dangerouslySetInnerHTML={{ __html: adjustInternalHtml(popupMessage) }} onMouseLeave={()=>setPopUp(false)} ></div>)
}
                  <div className='registerKey'>  <div className='regP'><Link to="/register" style={{ textDecoration: "none" }}><p >Register</p></Link></div>
                  <div style={{marginTop:"15px",marginLeft:"4px"}} onMouseEnter={()=>setPopUp(true)}><FaCircleQuestion  color='black'/></div></div>
                    <p>{message}</p>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
