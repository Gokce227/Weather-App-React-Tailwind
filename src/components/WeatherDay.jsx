import React from 'react';
import ClearDayIcon from '../assets/images/Weather=Clear, Moment=Day.svg';
import ClearNightIcon from '../assets/images/Weather=Clear, Moment=Night.svg';
import CloudyDayIcon from '../assets/images/Weather=Few Clouds, Moment=Day.svg';
import CloudyNightIcon from '../assets/images/Weather=Cloudy, Moment=Night.svg';
import RainDayIcon from '../assets/images/Weather=Rain, Moment=Day.svg';
import RainNightIcon from '../assets/images/Weather=Rain, Moment=Night.svg';
import StormDayIcon from '../assets/images/Weather=Storm, Moment=Day.svg';
import StormNightIcon from '../assets/images/Weather=Storm, Moment=Night.svg';

function WeatherDay({ weather }) {
     const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
     const dayInAWeek = new Date().getDay();
     const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

     // İkonları döndüren fonksiyon
     const getIcon = (weatherCondition) => {
          const hours = new Date().getHours();
          const dayTime = hours >= 6 && hours < 18;

          if (weatherCondition.includes('clouds')) {
               return dayTime ? CloudyDayIcon : CloudyNightIcon;
          } else if (weatherCondition.includes('clear')) {
               return dayTime ? ClearDayIcon : ClearNightIcon;
          } else if (weatherCondition.includes('rain')) {
               return dayTime ? RainDayIcon : RainNightIcon;
          } else if (weatherCondition.includes('storm')) {
               return dayTime ? StormDayIcon : StormNightIcon;
          }
          return ClearDayIcon; // Varsayılan ikon
     };

     return (
          <div className='bg-[#16161F] flex gap-x-2 rounded-[12px] mt-2 px-[16px] py-[24px] w-[359px]'>
               {weather.list.slice(0, 5).map((item, index) => (
                    <div className='text-center' key={index}>
                         <p className='text-[#BFBFD4] text-[14px] font-bold'>{forecastDays[index].slice(0, 3)}</p>
                         <img
                              src={getIcon(item.weather[0].main.toLowerCase())}
                              alt="Weather Icon"
                              className='size-[56px]'
                         />
                         <p className='text-[#FAFAFA] text-[14px]'>{Math.round(item.main.temp_max)}°C</p>
                         <p className='text-[#7F7F98]'>{Math.round(item.main.temp_min)}°C</p>
                    </div>
               ))}
          </div>
     );
}

export default WeatherDay;
