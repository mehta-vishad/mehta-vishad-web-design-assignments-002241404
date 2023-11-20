import React, { useState } from 'react'; // Import useState here
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './App/Home/Home';
import About from './App/About/About';
import './App/Home/Home.css';
import Contact from './App/Contact us/Contact';
import Jobs from './App/Job/Job';
  
// import Jobs from './Jobs';
// import Contact from './Contact';
import {Login} from './App/Login/Login'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            {isAuthenticated}
            
            <Routes>
                <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
                {/* //element={<Login setAuth={setIsAuthenticated} />} */}

                <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
                
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/jobs" element={<Jobs />} />
            </Routes>
        </Router>
    );
}

export default App;
