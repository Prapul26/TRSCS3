import React, { useState } from 'react';
import './Register.css';
import Header from '../Heaader/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Register = ({switchToLogin}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [referredBy, setReferredBy] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_REGISTER_PAGE}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                    confirm_password: confirmPassword,
                    phone,
                    referred_by: referredBy,
                    business_name: businessName,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Registration successful. Please verify your email.');
                console.log(response)
            } else {
                if (data.error_msg) {
                    setMessage(Object.values(data.error_msg).join(' '));
                } else {
                    setMessage('Registration failed. Please try again.');
                }
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setMessage('Registration failed. Please try again.');
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
                />
                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    id='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    type='password'
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor='phone'>Phone</label>
                <input
                    type='text'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                <p>{message}</p>
                <p onClick={switchToLogin} className='switch'>Already have an account? Login here.</p>
            </form>
           
        </div>  <Footer /> </div>
    );
};

export default Register;
