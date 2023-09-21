import React, { useState, useEffect } from 'react'
import "./weatherForecast.css"
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

const WeatherForecast = (props) => {
  let [loaded, setLoaded] = useState(false);
  let [forecastdata, setforecastdata] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data])

  function handleResponse(response){
      setforecastdata(response.data.daily);
      setLoaded(true);
  }
  
  if(loaded){
    return (
      <div className='weatherForecast'>
        <div className='row'>
          {forecastdata.map(function(dailyforecast, index){
            if(index < 5){
            return(
              <div className='col' key={index}>
              <WeatherForecastDay data={dailyforecast}/>
            </div>
            );
          }
          return null;
          })}
         
        </div>
      </div>
    )  
  }
  else
  {
    let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    let lon = props.data.lon;
    let lat = props.data.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  } 
}

export default WeatherForecast