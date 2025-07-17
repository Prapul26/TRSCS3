import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Header from '../Heaader/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Login = ({ switchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://tracsdev.apttechsol.com/api/storeLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setMessage('Login successful!');
                // Store token in localStorage or sessionStorage
                localStorage.setItem('authToken', data.token);
                
                navigate('/home'); // Redirect after successful login
            }
             else {
                setMessage(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

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
                   
                    <input
                        type='email'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br />

                 
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br />
<div style={{display:"flex",justifyContent:"space-between"}}>
    <div style={{display:"flex"}}><div><input type='checkbox'/></div><div className='forpassd'><p>Keep me Log In</p></div></div>
  <Link to='/forgotPassword' style={{textDecoration:"none"}}> <div  className='forpass'><p>Forgot Password ?</p></div></Link> 
</div>
                    <button type='submit'>Login</button>
                   
                 <Link to="/register" style={{textDecoration:"none"}}><div className='regP'><p >Register</p></div></Link>   
                     <p>{message}</p>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
