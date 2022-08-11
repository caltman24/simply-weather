import { useState, useEffect } from "react";

const useFetchWeather = (location: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const API_KEY: string = import.meta.env.VITE_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, [location]);
  return { data } as any;
};

export default useFetchWeather;
