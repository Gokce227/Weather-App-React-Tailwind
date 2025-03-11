import React from 'react';
import WeatherImage from '../assets/images/Weather=Clear, Moment=Night.png';
import WeatherCity from './WeatherCity';
import WeatherData from './WeatherData';
import WeatherDay from './WeatherDay';


function WeatherDetails({ weather }) {

     if (!weather) {
          return <p className="text-red-500">Weather data is loading...</p>;
     }

     return (
     <div>
          {weather && <WeatherCity weather={weather}/>}
          {weather && <WeatherData weather={weather}/>}
          {weather && <WeatherDay weather={weather}/>}
                   
     </div>
     );
}

export default WeatherDetails;
