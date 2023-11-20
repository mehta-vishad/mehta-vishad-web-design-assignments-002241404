import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
            <NavLink to="/jobs" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Jobs</NavLink>

            
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact Us</NavLink>
            
        </nav>
    );
}

export default Navbar;
