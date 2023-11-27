import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cloudy from "../assets/images/cloudy.jpg";
import rainy from "../assets/images/rainy.jpg";
import snowy from '../assets/images/snowy.jpg';
import clear from '../assets/images/clear.jpg';
import './HourlyForecast.css';

const HourlyForecast = () => {
    const { date } = useParams();
    const [dailyData, setDailyData] = useState([]);
    const [dayOfWeek, setDayOfWeek] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=boston&units=metric&appid=767ca9c391439e1addd64f3fcbbf1033`);
                const data = response.data.list.filter(item => item.dt_txt.startsWith(date));
                setDailyData(data);

                // Parse the date and get the day of the week
                const day = new Date(data[0].dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
                setDayOfWeek(day);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, [date]);

    const iconToImg = {
        'Rain': rainy,
        'Clear': clear,
        'Clouds': cloudy,
        'Snow': snowy
    };

    return (
        <div className="container">
            <h2>Hourly Forecast for {dayOfWeek}</h2>
            {dailyData.map((forecast, index) => (
                <div key={index} className="forecast-card">
                    <div className="time-slot">
                        <div className="time-text">
                            <p>Time: {forecast.dt_txt.split(' ')[1]}</p>
                            <p>Temperature: {forecast.main.temp}°C</p>
                            <p>Weather: {forecast.weather[0].description}</p>
                        </div>
                        <div className="weather-details">
                            <img src={iconToImg[forecast.weather[0].main]} alt={forecast.weather[0].main} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HourlyForecast;
