import React from 'react'
import Weather from './Weather'

function WeatherData({weather}) {
  return (
       <div className='bg-[#16161F] rounded-[8px] mt-2 px-[20px] py-[8px]'>
            <div className='flex justify-between py-[16px] border-b-[#3B3B54] border-b-[0.1px]'>
                 <div className='flex gap-3'>
                      <img src="/src/assets/images/Icons.svg" />
                      <p className='text-[14px] text-[#BFBFD4] font-bold font-[Nunito, font-serif]'>Thermal sensation</p>
                 </div>
                 <p className='text-[#FAFAFA] text-[16px]'>{Math.round(weather.list[0].main.feels_like) + "ºc"}</p>
            </div>
            <div className='flex justify-between py-[16px] border-b-[#3B3B54] border-b-[0.1px]'>
                 <div className='flex gap-3'>
                      <img src="/src/assets/images/Icons-1.svg" alt="" />
                      <p className='text-[14px] text-[#BFBFD4] font-bold font-[Nunito, font-serif]'>Probability of rain</p>
                 </div>
                 <p className='text-[#FAFAFA] text-[16px]'>{weather.list[0].rain && weather.list[0].rain['1h'] !== undefined ? Math.round(weather.list[0].rain['1h']) + "%" : "0 %"}</p>
            </div>
            <div className='flex justify-between py-[16px] border-b-[#3B3B54] border-b-[0.1px]'>
                 <div className='flex gap-3'>
                      <img src="/src/assets/images/Icons-2.svg" alt="" />
                      <p className='text-[14px] text-[#BFBFD4] font-bold font-[Nunito, font-serif]'>Wind speed</p>
                 </div>
                 <p className='text-[#FAFAFA] text-[16px]'>{Math.round(weather.list[0].wind.speed)+ " km/h"}</p>
            </div>
            <div className='flex justify-between py-[16px] border-b-[#3B3B54] border-b-[0.1px]'>
                 <div className='flex gap-3'>
                      <img src="/src/assets/images/Icons-3.svg" alt="" />
                      <p className='text-[14px] text-[#BFBFD4] font-bold font-[Nunito, font-serif]'>Air Humidity</p>
                 </div>
                 <p className='text-[#FAFAFA] text-[16px]'>{weather.list[0].main.humidity + "%"}</p>
            </div>
            <div className='flex justify-between py-[16px]'>
                 <div className='flex gap-3'>
                      <img src="/src/assets/images/Icons-4.svg" alt="" />
                      <p className='text-[14px] text-[#BFBFD4] font-bold font-[Nunito, font-serif]'>UV Index</p>
                 </div>
                 <p className='text-[#FAFAFA] text-[16px]'>5</p>
            </div>
       </div>
  )
}

export default WeatherData
