import { useState, useEffect } from "react";
import { IWeatherData } from "../@types/weather";

const useFetchWeather = (location: string) => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  const formatData = (data: IWeatherData) => {
    if (data.error) {
      return {
        ...data,
      };
    }
    const {
      location: { name, region, country },
      current: {
        temp_f,
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
        temp_f,
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

    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("No Matching Location Found");
      })
      .then((data: IWeatherData) => setWeatherData(formatData(data)))
      .catch((err) => console.error(err));
  }, [location]);
  return { weatherData };
};

export default useFetchWeather;