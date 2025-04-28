import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                    <h1>Welcome To Login</h1>

                    <div className='no1'>
                        <div className='oneb'><h1>1</h1></div>
                        <div className='oneContent'>
                            <h4>H7 Member does not need to register and can login using the registered email.</h4>
                            <p>If you are logging in for the first time, click on the "Forgot Password" link to create a password. Also, check your spam folder if you don’t receive the email.</p>
                        </div>
                    </div>

                    <div className='no2'>
                        <div className='twob'><h1>2</h1></div>
                        <div className='twoContent'>
                            <h4>TRACS Member can login using the registered email.</h4>
                        </div>
                    </div>
                </div>

                <form className='LoginContainer' onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <label>User Mail</label><br />
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br />

                    <label>Password</label><br />
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br />

                    <button type='submit'>Login</button>
                    <p>{message}</p>
                    <p onClick={switchToRegister} className='switch'>Don't have an account? Register here.</p>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
