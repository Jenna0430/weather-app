import React from 'react'
import Weather from "./Weather"
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
      <Weather defaultCity = "New York" /> 


      <footer>
      <p>Coded by Jenna Agbor, {" "}
      <a href='https://github.com/Jenna0430/weather-app' rel="noreferrer" target='_blank'>open source code</a> on github.
      </p>
      </footer>
      
    </div>
    </div>
  )
}

export default App