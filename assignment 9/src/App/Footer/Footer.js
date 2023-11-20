import React from 'react';
import './Footer.css'; // Make sure to create and link the corresponding CSS file

function Footer() {
    const currentYear = new Date().getFullYear(); // Gets the current year

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
