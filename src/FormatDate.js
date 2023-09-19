import React from 'react'

const FormatDate = (props) => {

  let days = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <p>{day}, {hours}:{minutes}</p>
    </div>
  )
}

export default FormatDate