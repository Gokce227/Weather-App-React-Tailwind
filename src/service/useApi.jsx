import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useApi = () => {
     const [weather, setWeather] = useState(null);
     const [latitude, setLatitude] = useState(null);
     const [longitude, setLongitude] = useState(null);
     const [city, setCity] = useState("");  // Şehir ismini tutacak state

     // Konum verisini al
     useEffect(() => {
          if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(
                    (position) => {
                         console.log("Location Data:", position);  // Konum verisini konsola yazdır
                         setLatitude(position.coords.latitude);
                         setLongitude(position.coords.longitude);
                    },
                    (error) => {
                         console.error("Error getting geolocation:", error); // Konum alınamazsa hata
                    }
               );
          } else {
               console.error("Geolocation is not supported by this browser."); // Eğer geolocation desteklenmiyorsa
          }
     }, []);

     const getWeatherData = async (lat, lon, cityName) => {
          const key = import.meta.env.VITE_WEATHER_API;
          const lang = navigator.language.split("-")[0];

          let url = "";
          if (cityName) {
               // Eğer şehir ismi varsa, şehir adına göre sorgu yap
               url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&lang=${lang}&units=metric`;
          } else if (lat && lon) {
               // Konum verisi varsa, konumla sorgu yap
               url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`;
               
          }

          console.log("Requesting weather data with:", cityName || `${lat}, ${lon}`); // İstek yapılacak parametreyi konsola yazdır

          try {
               const { data } = await axios.get(url);
               console.log("Weather Data:", data);  // API'den alınan veriyi konsola yazdır
               setWeather(data);
              
          } catch (error) {
               console.error("Error fetching weather data:", error);  // Hata mesajı yazdır
          }
     };

     
     useEffect(() => {
          if (latitude && longitude && !city) {
               getWeatherData(latitude, longitude, "");
          } else if (city) {
               getWeatherData(null, null, city); // Şehir girildiğinde API çağrısı yap
          }
     }, [latitude, longitude, city]); 
     return { weather, setCity };  // SetCity'i dışarıya aktararak input ile şehir adını değiştirebiliriz
};

export default useApi;

