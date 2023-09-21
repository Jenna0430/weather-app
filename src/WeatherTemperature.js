import React from 'react'

function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celcius)}</span>
      <span className="unit">
        °C 
      </span>
    </div>
  );
}

export default WeatherTemperature
 




