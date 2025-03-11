import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import './App.css'
import Weather from './components/Weather'
import Api from './service/useApi'
import WeatherDetails from './components/WeatherDetails'

function App() {
  

  return (
  
    <div>
     <Weather/>
    </div>
  );

}

export default App
