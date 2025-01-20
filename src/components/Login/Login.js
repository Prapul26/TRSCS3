import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import './Login.css'
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
            const response = await fetch(`${process.env.REACT_APP_LOGIN_PAGE}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   email,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.success) {
                setMessage('Login successful');
                // Save the token or handle successful login logic here
                navigate('/home'); // Redirect to Member Details page
            } else {
                setMessage(data.error_msg || 'Login failed');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setMessage('Login failed. Please try again.');
        }
    };
    return (
        <div> <Header />
         <Navbar />
        <div className='LoginPage' onSubmit={handleLogin}>
        <div className='abd'>
            <h1>Welcome To Login</h1>
            <div className='no1'>
                <div className='oneb'><h1>1</h1></div>
                <div className='oneContent'>
                    <h4>H7 Member does not need to register and can login using the registered email.</h4>
                    <p>If you are logging in first time, click on Forgot Password link to create a password. It will send you an email to your registered email. Please also check your SPAM email folder.</p>
                </div>
            </div>
            <div className='no2'>
                <div className='twob'><h1>2</h1></div>
                <div className='twoContent'>
                    <h4>TRACS Member can login using the registered email.</h4>
                    
                </div>
            </div>
        </div>
            <form className='LoginContainer'>
                <h1>Login</h1>
                <label>User Mail</label><br />
                <input type='mail' id='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Password</label><br />
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type='submit' >Login</button>
                <p>{message}</p>
                <p onClick={switchToRegister} className='switch'>Don't have an account? Register here.</p>
            </form>
        </div>
        <Footer />
        </div>
    )
}
export default Login;