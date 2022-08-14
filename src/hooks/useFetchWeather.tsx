import { useState, useEffect } from "react";
import { IWeatherData, WeatherData, CurrentLocation } from "../@types/weather";

const useFetchWeather = (location: CurrentLocation) => {
  const [weatherData, setWeatherData] = useState<WeatherData>(null);

  const formatData = (data: IWeatherData) => {
    const {
      location: { name, region, country },
      current: {
        last_updated,
        temp_f,
        temp_c,
        condition: { text, icon },
        wind_mph,
        wind_degree,
        wind_dir,
        precip_in,
        humidity,
        cloud,
      },
    } = data;

    return {
      location: {
        name,
        region,
        country,
      },
      current: {
        last_updated,
        temp_f,
        temp_c,
        condition: { text, icon },
        wind_mph,
        wind_degree,
        wind_dir,
        precip_in,
        humidity,
        cloud,
      },
    } as IWeatherData;
  };

  useEffect(() => {
    const API_KEY: string = import.meta.env.VITE_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

    if (location === "" || location === null) return;

    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("No Matching Location Found");
      })
      .then((data: IWeatherData) => setWeatherData(formatData(data)))
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  }, [location]);
  return { weatherData };
};

export default useFetchWeather;
