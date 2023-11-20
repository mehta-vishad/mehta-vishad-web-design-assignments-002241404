// Login.js
import './Login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function Login({setAuth}) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
    
        // Basic Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
    
        // Basic Password Validation
        if (!password || password.length === 0) {
            setPasswordError('Please enter your password');
            return;
        }
        
        // If validation passes, proceed with the fetch request
        try {
            const response = await fetch('http://localhost:3001/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                setAuth(true);
                navigate('/');

                // Handle successful login here (e.g., redirect to another page)
            } else {
                alert('Either your email or password is wrong');
                console.error('Login failed:', data.error);
                // Handle login failure here (e.g., show error message)
            }
        } catch (error) {
            console.error('There was an error:', error);
        }
    };
    
    

    

    return (
        <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            {emailError && <div className="error-message">{emailError}</div>}

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            {passwordError && <div className="error-message">{passwordError}</div>}

            <button type="submit">Login</button>
        </form>

    </div>
    
    );
}


