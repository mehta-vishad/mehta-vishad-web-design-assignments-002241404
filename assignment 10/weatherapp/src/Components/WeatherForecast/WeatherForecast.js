import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cloudy from "../assets/images/cloudy.jpg";
import rainy from "../assets/images/rainy.jpg";
import snowy from '../assets/images/snowy.jpg';
import clear from '../assets/images/clear.jpg';
import './WeatherForecast.css';

const WeatherForecast = () => {
    const [forecast, setForecast] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Boston&units=metric&APPID=50b750b529d0c0c9f392674addf9409a');
            setForecast(response.data);

            // Fetch current weather
            const currentWeatherResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Boston&units=metric&APPID=50b750b529d0c0c9f392674addf9409a');
            setCurrentWeather(currentWeatherResponse.data);
        };

        fetchWeather();
    }, []);

    const iconToImg = {
        'Rain': rainy,
        'Clear': clear,
        'Clouds': cloudy,
        'Snow': snowy
    };

    const img = (weatherCondition) => {
        const imageUrl = iconToImg[weatherCondition];
        return imageUrl ? <img src={imageUrl} alt={`Weather icon for ${weatherCondition}`} /> : null;
    };

    const groupedByDate = forecast?.list?.reduce((acc, item) => {
        const date = item.dt_txt.split(' ')[0];
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item);
        return acc;
    }, {}) || {};

    const next5Days = Object.keys(groupedByDate).slice(0, 5);

    const handleDayClick = (date) => {
        navigate(`/${date}`);
    };

    return (
        <div>
            <div className="current-weather">
                <h2>Current Weather in Boston</h2>
                {currentWeather && (
                    <div>
                        <p>Temperature: {currentWeather.main.temp}°C</p>
                        <p>Weather: {currentWeather.weather[0].description}</p>
                        {img(currentWeather.weather[0].main)}
                    </div>
                )}
            </div>

            <div className='mainCon'>
                {next5Days.map((date) => (
                    <div key={date} onClick={() => handleDayClick(date)}>
                        <h3>Weather for {date}</h3>
                        <p>High: {Math.round(Math.max(...groupedByDate[date].map(f => f.main.temp_max)))}°C</p>
                        <p>Low: {Math.round(Math.min(...groupedByDate[date].map(f => f.main.temp_min)))}°C</p>
                        <p>Weather: {groupedByDate[date][0].weather[0].description}</p>
                        {img(groupedByDate[date][0].weather[0].main)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;
