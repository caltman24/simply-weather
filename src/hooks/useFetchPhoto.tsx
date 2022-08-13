import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { WeatherData, ConditionText } from "../@types/weather";

type PhotoURL = string | null;

const useFetchPhoto = (
  conditionText: ConditionText,
  weatherData: WeatherData
) => {
  const [photo, setPhoto] = useState<PhotoURL>(null);

  // unsplash api
  const unsplashAPI = createApi({
    apiUrl: "https://api.unsplash.com/",
    accessKey: import.meta.env.VITE_UNSPLASH_KEY,
    headers: {
      "content-type": "application/json",
      accecpt: "application/json",
    },
  });

  const getRandomPhoto = async (keyword: ConditionText) => {
    const response = await unsplashAPI.photos.getRandom({
      query: keyword,
    });
    return response;
  };

  useEffect(() => {
    if (weatherData && conditionText) {
      // TODO: tinker with photo query params
      getRandomPhoto(conditionText as string)
        .then((result) => {
          if (result.errors) return;
          const photo = result.response as any;
          const url = photo.urls.raw + "&dpr=1&fit=crop&w=1920&h=1080";
          setPhoto(url);
        })
        .catch((err) => {
            console.error(err);
            console.log(err.response)
        });
    }
  }, [conditionText, weatherData]);
  return photo;
};

export default useFetchPhoto;
