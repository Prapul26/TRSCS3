import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Heaader/Header';

const Register = ({ switchToLogin }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [referredBy, setReferredBy] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [message, setMessage] = useState('');
    const [csrfToken, setCsrfToken] = useState('');

    // 🟢 Fetch CSRF Token on Component Mount


    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        // Basic validation
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        const payload = {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            password,
            confirm_password: confirmPassword,
            referred_by: referredBy || null,
            business_name: businessName || null,
        };

        try {
            const response = await axios.post(' https://tracsdev.apttechsol.com/api/storeRegister', payload,{
                headers: {
                    // Replace YOUR_TOKEN_HERE with the actual token
                    Authorization: 'XSRF-TOKEN=eyJpdiI6Iit2dGdoUFJsNktvcnBEY2lCV0FFYUE9PSIsInZhbHVlIjoicjZ1c2RZbmNnVmc2RUlVNExQd3dIRFI3UkdIc2srNnlXcFdYeGUxVVdNT3F1REY2NllyZ0MrTXY2bWVROXZHZ1haeStLZ2tOVE5FSEltK1dVUVNwOVdVQTY1dE1tWXh6NWFqZE9oNjFXNFNkclZxZmdXSU40aEllTTBPci9VRFEiLCJtYWMiOiI1OGMyNmNkZjcyZmYxY2ZiYWM2ZDBmMjZiNWFkMmNmMjc4YzFkYjRhM2UyNGE2ZjkwMDM3NjEyYjM4NjY5OGI1IiwidGFnIjoiIn0%3D; _session=eyJpdiI6ImpQbWpRNDhDQWJmaFJHK0sydUxUSEE9PSIsInZhbHVlIjoiVWluVjVmM3d1RlIxVThxcFJRMEVCY2pVWll1dlMvZlhXMmdtR1d3UE1NVG8vNW5DTWtWT2l4MjYwelJDZERQS2M0TE00WXRaYitEQ0lQdjEwYzMyQWJyNDdwOVRDS2p4V3lNcnExYUNSaUxxbjZLaWhjVU43WTRVdS9uN2V4SXAiLCJtYWMiOiI0MDA5ZGU1OTdjZWJlYTk2MDAxNDEwYTljZGYxNThjYzFlYzQyZTY5Njg1Yzc2MTI0MTdjYzU4ZjkwZmYwYjJjIiwidGFnIjoiIn0%3D',
                    Accept: 'application/json',
                },
            }
);

            if (response.status === 201) {
                setMessage(response.data.message || 'Registration successful. Please verify your email.');
                console.log('User registered:', response.data.user);
            }
        } catch (error) {
            if (error.response) {
                const errorMsg = error.response.data.errors
                    ? Object.values(error.response.data.errors).flat().join(' ')
                    : error.response.data.message || 'Registration failed. Please try again.';
                setMessage(errorMsg);
            } else {
                setMessage('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className='registerPage'>
                <form className='registerForm' onSubmit={handleRegister}>
                    <h1>Register here ...</h1>

                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type='text'
                        id='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type='text'
                        id='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor='phone'>Phone</label>
                    <input
                        type='text'
                        id='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />

                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input
                        type='password'
                        id='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <label htmlFor='referredBy'>Referred By</label>
                    <input
                        type='text'
                        id='referredBy'
                        value={referredBy}
                        onChange={(e) => setReferredBy(e.target.value)}
                    />

                    <label htmlFor='businessName'>Business Name</label>
                    <input
                        type='text'
                        id='businessName'
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                    />

                    <button type='submit'>Register</button>
                    {message && <p className="message">{message}</p>}

                    <p onClick={switchToLogin} className='switch'>
                        Already have an account? Login here.
                    </p>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
