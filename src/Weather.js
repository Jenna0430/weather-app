import React, { useState } from 'react'
import "./weather.css"
import axios from "axios"
import WeatherInfo from "./WeatherInfo"


const Weather = (props) => {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherdata] = useState({});
  function handleResponse(response){
    setWeatherdata({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconurl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });  
      setReady(true);
  }

  function search(){
    const apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  
  }

  function handleSubmit(event){
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  if(ready){
    return (
      <div className='weather'>
  
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-9'>
            <input type='search' placeholder='Enter city' className='form-control' autoFocus="on"
            onChange={handleCityChange}/>
            </div>
            <div className='col-3'>
            <input type='submit' value="search" className='btn btn-primary w-100'/>
            </div>
          </div>
        </form>

        <WeatherInfo info = {weatherData}/>
  
      </div>
    );
  } else {  
    search();
  return "loading...";
}
}

export default Weather