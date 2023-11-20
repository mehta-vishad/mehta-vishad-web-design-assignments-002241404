import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import Introduction from '../Intro/Intro'
import Footer from '../Footer/Footer';


function Home() {
    return (
        <div>
            <Navbar></Navbar>
            
            <Introduction></Introduction>
            
            <div style={{margin:"50px"}}>
            <Card 
                title="Innovative Solutions" 
                content="Discover cutting-edge solutions tailored to meet your unique business needs and drive growth." 
            />

            <Card 
                title="Expert Team" 
                content="Meet our team of experienced professionals dedicated to delivering excellence and innovation in every project." 
            />

            <Card 
                title="Global Impact" 
                content="Join us on our mission to make a global impact with sustainable practices and community-focused initiatives." 
            />
            
            </div>
        
        </div>
    
        
       
    );
}

export default Home;
