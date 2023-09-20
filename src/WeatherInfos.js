import React from 'react'
import FormatDate from "./FormatDate"
import WeatherTemperature from "./WeatherTemperature"


const WeatherInfos = (props) => {
  return (
    <div className='weatherInfo'>
      <h1>{props.info.city}</h1>
     
       <ul>
        <li>
          <FormatDate date = {props.info.date}/>
        </li>
        <li className="text-capitalize">{props.info.description}</li>
       </ul>
  
       <div className='row mt-3'>
          <div className='col-6'>
            <div className='clearfix'>
              <div className='row'>
              <div className='col-3'>
            <img src={props.info.iconurl} alt={props.info.description} className='float-left'/>
            </div>
            <div className='col-9'>
            <WeatherTemperature celcius={props.info.temperature} />
            </div>
            </div>
             </div>
          </div>
  
          <div className='col-6'>
              <ul>
                <li>Humidity: {props.info.humidity}%</li>
                <li>Wind: {props.info.wind}km/h</li>
              </ul>
          </div>
       </div>
    </div>
  )
}

export default WeatherInfos