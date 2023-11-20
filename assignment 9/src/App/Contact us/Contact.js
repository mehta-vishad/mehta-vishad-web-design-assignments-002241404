import React, { useState } from 'react';
import './Contact.css'; // Make sure to create and link the corresponding CSS file
import Navbar from '../Navbar/Navbar';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., sending data to a server
        console.log({ name, email, message });
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="contact-container">
            
            <h2 style={{marginBottom:"20px"}}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
        </div>
    );
}

export default Contact;
