import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherForecast from './Components/WeatherForecast/WeatherForecast';
import HourlyForecast from './Components/HourlyForecast/HourlyForecast';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<WeatherForecast />} />
                <Route path="/:date" element={<HourlyForecast />} />
            </Routes>
        </Router>
    );
};

export default App;