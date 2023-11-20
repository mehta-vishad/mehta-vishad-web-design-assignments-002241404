import React from 'react';
import './Intro.css'; // Ensure you have this CSS file

function Introduction() {
    return (
        <div className="introduction-container">
            <div className="introduction-text">
                <h1>Welcome to the Company Website</h1>
                <p>Discover our projects, team, and what makes us unique. Get a quote now! </p>
            </div>
            <div className="introduction-image">
                <img src="https://source.unsplash.com/random/300x200" alt="Random Unsplash" />
            </div>
        </div>
    );
}

export default Introduction;
