import React, { useState, useEffect } from 'react';
import Background from '../assets/images/Background.png';
import Logo from '../assets/images/Logo.svg';
import useApi from '../service/useApi'; // Hava durumu API hook'u
import axios from 'axios';
import Icons from '../assets/images/Icons.png';
import WeatherDetails from './WeatherDetails'; // WeatherDetails bileşenini import ediyoruz
import { FaSleigh } from 'react-icons/fa';

function Weather() {
     const { weather, setCity } = useApi(); // Hava durumu verilerini almak ve setCity fonksiyonunu kullanmak için useApi
     const [inputCity, setInputCity] = useState(''); // Kullanıcının girdiği şehir adı
     const [suggestions, setSuggestions] = useState([]); // Şehir önerileri
     const [isLoading, setIsLoading] = useState(false); // Yükleniyor durumu
     const [showInput, setShowInput] = useState(true); 

     const API_KEY = import.meta.env.VITE_WEATHER_API; // API anahtarı

    
     
     // Kullanıcı input'a yazdıkça önerileri getir
     useEffect(() => {
          if (weather && weather.city.name) {
               setInputCity(weather.city.name);  // Eğer weather.name varsa inputCity'yi güncelle
          }

          if (inputCity.length > 2) {
               fetchSuggestions(inputCity);  // Şehir adı 3 karakteri geçerse önerileri getir
          } else {
               setSuggestions([]);  // Önerileri temizle
          }
     }, [inputCity, weather]);  // inp

     // Şehir önerilerini almak için API çağrısı
     const fetchSuggestions = async (query) => {
          try {
               const response = await axios.get(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
               );
               setSuggestions(response.data); // API'den gelen veriyi suggestions state'ine aktar
          } catch (error) {
               console.error('Error fetching city suggestions:', error);
               setSuggestions([]); // Hata olursa önerileri sıfırla
          }
     };

     // Kullanıcı bir şehri seçtiğinde
     const handleSuggestionClick = (cityName) => {
          setInputCity(''); // Input değerini sıfırla
          setCity(cityName); // Seçilen şehri setCity ile API'ye gönder
          setSuggestions([]); // Önerileri temizle
          setShowInput(false); 
     };

     const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
               setIsLoading(true); // Yükleniyor simgesini göster
               setTimeout(() => {
                    setIsLoading(false); // Yükleniyor simgesini gizle
                    setCity(inputCity); // Şehri API'ye gönder
               }, 2000); // 2 saniye sonra yönlendir
          }
          
     };


     return (
          <div className="flex items-center justify-center bg-[#1E1E29] h-screen ">
               <div className="relative w-full min-h-screen max-w-[375px] bg-cover bg-center bg-no-repeat flex justify-center content-between p-[12px]"
                    style={{ backgroundImage: `url(${Background})` }} >

                    { showInput ? (
                    <>
                              <div className="absolute top-[48px] left-[96px] flex justify-center">
                                   <img src={Logo} alt="Logo" className="w-32 h-[50px]" />
                              </div>


                              <div className="flex flex-col justify-center w-full max-w-[320px] mx-auto">
                                   <div className="mb-[20px] text-center">
                                        <h1 className="text-[#FAFAFA] text-[20px]">
                                             Welcome to <span className="text-[#8FB2F5]">TypeWeather</span>
                                        </h1>
                                        <p className="text-[#BFBFD4] text-[14px]">
                                             Choose a location to see weather forecast
                                        </p>
                                   </div>

                                   <input
                                        type="text"
                                        placeholder="Search location"
                                        spellCheck="false"
                                        style={{ paddingLeft: '15px' }}
                                        value={inputCity} // Input'un değeri, inputCity state'ine bağlı
                                        onChange={(e) => setInputCity(e.target.value)} // Kullanıcı yazdıkça state güncellenir
                                        onKeyDown={handleKeyDown}
                                        className="bg-[#1E1E29] w-full rounded-[8px] text-[#FAFAFA] box-border h-[45px] placeholder:text-[#7F7F98] focus:outline-0 focus:text-[16px] focus:font-normal transition duration-300 ease"
                                   />

                                   {isLoading && (
                                        <img
                                             style={{
                                                  position: 'absolute',
                                                  right: '40px',
                                                  top: '50%',
                                                  transform: 'translateY(50%)',
                                             }}
                                             src={Icons}
                                             alt="loading"
                                        />
                                   )}

                                   {/* Öneriler Listesi */}
                                   {suggestions.length > 0 && (
                                        <ul className="mt-2 w-full bg-[#3B3B54] rounded-[8px] text-[#FAFAFA]">
                                             {suggestions.map((city, index) => (
                                                  <li
                                                       key={index}
                                                       onClick={() => {
                                                            handleSuggestionClick(`${city.name}, ${city.country}`);
                                                            setShowInput(false); // Şehir seçildiğinde Weather.js'yi gizleyip WeatherDetails'i gösteriyoruz
                                                       }}

                                                       style={{ gap: '5px' }}
                                                       className="px-3 py-2 cursor-pointer rounded-[8px] hover:bg-[#4A4A64] transition duration-200 border-b-[2px] border-b-[#1E1E29] last:border-b-0"
                                                  >
                                                       {city.name}, {city.country}
                                                  </li>
                                             ))}
                                        </ul>
                                   )}
                              </div>
                         </> 
                    ) 
                    : (
                         <WeatherDetails weather={weather}/>
                    )}
                   
               </div>

          </div>
     );
}

export default Weather;
 