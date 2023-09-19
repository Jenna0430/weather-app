import React, { useState } from 'react'
import "./weather.css"
import axios from "axios"

const Weather = () => {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherdata] = useState({});
  function handleResponse(response){
    setWeatherdata({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconurl:"",
      date: "wednesday, 07:09",
    });
      
      setReady(true);
  }

  if(ready){
    return (
      <div className='weather'>
  
        <form>
          <div className='row'>
            <div className='col-9'>
            <input type='search' placeholder='Enter city' className='form-control' autoFocus="on"/>
            </div>
            <div className='col-3'>
            <input type='submit' value="search" className='btn btn-primary w-100'/>
            </div>
          </div>
        </form>
  
       <h1>{weatherData.city}</h1>
       <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
       </ul>
  
       <div className='row mt-3'>
          <div className='col-6'>
            <div className='clearfix'>
            <img src={weatherData.iconurl} alt={weatherData.description} className='float-left'/>
  
             <span className='temperature'>{Math.round(weatherData.temperature)}</span>
             <span className='unit'>°C</span>
            </div>
          </div>
  
          <div className='col-6'>
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
          </div>
       </div>
  
  
      </div>
    );
  } else {

  const apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "loading...";

}
}

export default Weather