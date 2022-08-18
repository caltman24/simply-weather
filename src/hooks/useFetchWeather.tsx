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
        wind_kph,
        wind_degree,
        wind_dir,
        precip_in,
        humidity,
        cloud,
        uv,
      },
      forecast: { forecastday },
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
        wind_kph,
        wind_degree,
        wind_dir,
        precip_in,
        humidity,
        cloud,
        uv,
      },
      forecast: {
        forecastday,
      },
    } as IWeatherData;
  };

  useEffect(() => {
    if (location === "" || location === null) return;

    fetch(`/api/weather?location=${location}`)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("No Matching Location Found");
      })
      .then((data: IWeatherData) => {
        setWeatherData(formatData(data));
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  }, [location]);
  return { weatherData };
};

export default useFetchWeather;
