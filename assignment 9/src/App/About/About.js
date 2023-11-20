import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import './About.css'



// Sample data that I might fetch from an API
const cardData = [
    { title: "Our Mission", content: "Our mission is to..." },
    { title: "Our Team", content: "We have a diverse team of..." },
    {title:"Hello",content:"We do a lot of stuff..."}
];



function About() {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{margin:"60px"}}>
            <div className="aboutMe">
                <h1 style={{color: "#66FCF1;", marginBottom:"20px"}}>About Us</h1>
                <p style={{color: "black", marginTop: "20px;"}}>Meet our team of experienced professionals dedicated to delivering excellence and innovation in every project.</p>
            </div>
            </div>
            {cardData.map((item, index) => (
                <Card key={index} title={item.title} content={item.content} />
            ))} 
            <div className="featured-section">
                <h2>Our Services</h2>
                <div className="services">
                    <div className="service">
                        <h3>Innovative Design</h3>
                        <p>State-of-the-art designs that speak to your audience.</p>
                    </div>
                    <div className="service">
                        <h3>Expert Consulting</h3>
                        <p>Professional advice to take your business to the next level.</p>
                    </div>
                    <div className="service">
                        <h3>Custom Solutions</h3>
                        <p>Personalized services tailored to your unique needs.</p>
                    </div>  
                </div>
            </div>
          

        </div>
    );
}


export default About;