import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { WeatherData, ConditionText } from "../@types/weather";

type PhotoURL = string | null;

const useFetchPhoto = (
  conditionText: ConditionText,
  weatherData: WeatherData
) => {
  const [photo, setPhoto] = useState<PhotoURL>(null);

  useEffect(() => {
    if (!conditionText || !weatherData) return;
    fetch(`/api/photos/keyword&=${conditionText}`)
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data.url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [conditionText, weatherData]);
  return photo;
};

export default useFetchPhoto;
