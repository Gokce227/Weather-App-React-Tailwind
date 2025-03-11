import React from 'react';

import ClearDay from '../assets/images/Weather=Clear, Moment=Day.png';
import ClearNight from '../assets/images/Weather=Clear, Moment=Night.png';
import CloudyDay from '../assets/images/Weather=Few Clouds, Moment=Day.png';
import CloudyNight from '../assets/images/Weather=Cloudy, Moment=Night.png';
import RainDay from '../assets/images/Weather=Rain, Moment=Day.png';
import RainNight from '../assets/images/image.png';
import StormDay from '../assets/images/Weather=Storm, Moment=Day.png';
import StormNight from '../assets/images/image1.png';
//Iconlar
import ClearDayIcon from '../assets/images/Weather=Clear, Moment=Day.svg';
import ClearNightIcon from '../assets/images/Weather=Clear, Moment=Night.svg';
import CloudyDayIcon from '../assets/images/Weather=Few Clouds, Moment=Day.svg';
import CloudyNightIcon from '../assets/images/Weather=Cloudy, Moment=Night.svg';
import RainDayIcon from '../assets/images/Weather=Rain, Moment=Day.svg';
import RainNightIcon from '../assets/images/Weather=Rain, Moment=Night.svg';
import StormDayIcon from '../assets/images/Weather=Storm, Moment=Day.svg';
import StormNightIcon from '../assets/images/Weather=Storm, Moment=Night.svg';

function WeatherCity({ weather }) {
     const date = new Date();
     const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
     };

     const formatter = new Intl.DateTimeFormat('en-US', options);
     const formattedDate = formatter.format(date);

     // Arka plan görselini döndüren fonksiyon
     const getBackgroundImage = () => {
          const weatherCondition = weather.list[0].weather[0].main.toLowerCase();
          const hours = new Date().getHours();
          const dayTime = hours >= 6 && hours < 18;

          if (weatherCondition.includes('clouds')) {
               return dayTime ? CloudyDay : CloudyNight;
          } else if (weatherCondition.includes('clear')) {
               return dayTime ? ClearDay : ClearNight;
          } else if (weatherCondition.includes('rain')) {
               return dayTime ? RainDay : RainNight;
          } else if (weatherCondition.includes('storm')) {
               return dayTime ? StormDay : StormNight;
          }
          return ClearDay; // Varsayılan görsel
     };

     // İkonları döndüren fonksiyon
     const getIcon = () => {
          const weatherCondition = weather.list[0].weather[0].main.toLowerCase();
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
          <div
               className="flex flex-col items-center justify-center bg-[#16161F] rounded-[8px] h-[310px] p-[12px] bg-cover bg-center bg-no-repeat text-white gap-18 border-8 border-[#16161F] overflow-hidden"
               style={{ backgroundImage: `url(${getBackgroundImage()})`, borderRadius: '14px' }}>
               <div className='flex flex-col text-left w-full pt-5'>
                    <h2 className='text-start text-[#FAFAFA] text-[16px]'>
                         {weather.city.name}, {weather.city.country}
                    </h2>
                    <p className='text-start text-[12px] font-normal tracking-wide'>{formattedDate}</p>
               </div>
               <div className='flex items-end gap-14'>
                    <div className='pb-[10px]'>
                         <p className='text-[48px] font-extrabold font-[Nunito, font-serif]'>
                              {Math.round(weather.list[0].main.temp)}ºc
                         </p>
                         <p className='text-[16px] font-bold font-[Nunito, font-serif]'>
                              {Math.round(weather.list[0].main.temp_min)}ºc /{' '}
                              {Math.round(weather.list[0].main.temp_max)}ºc
                         </p>
                         <p className='text-[14px] font-normal font-[Nunito, font-serif]'>
                              {weather.list[0].weather[0].description}
                         </p>
                    </div>
                    <img src={getIcon()} alt="Weather Icon" className='size-[160px]' />
               </div>
          </div>
     );
}

export default WeatherCity;
