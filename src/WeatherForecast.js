import React from 'react'
import "./weatherForecast.css"
import WeatherIcon from "./WeatherIcon";
import axios from 'axios';

const WeatherForecast = (props) => {
  function handleResponse(response){

  }
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let lon = props.data.lon;
  let lat = props.data.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className='weatherForecast'>
      <div className='row'>
        <div className='col'>
          <div className='weatherForecst-day'>Thurs</div>
          <WeatherIcon code="01d" size={36} />
          <div className='weatherForecast-temperatures'>
            <span className='weatherForecast-temp-max'>19°</span>
            <span className='weatherForecast-temp-min'>16°</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherForecast