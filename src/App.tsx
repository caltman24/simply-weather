import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

import DetailsPanel from "./components/DeatilsPanel/DetailsPanel";
import TempPanel from "./components/TempPanel";
import useFetchWeather from "./hooks/useFetchWeather";
import { WeatherDataProvider } from "./WeatherDataContext";

import { WeatherDataContextType } from "./@types/weather";

// TODO: Finish Forecast Panel

const App = () => {
  const [currentLocation, setCurrentLocation] = useState("Indianapolis");
  const { weatherData } = useFetchWeather(currentLocation as string);
  const conditionText = weatherData?.current.condition.text;

  // unsplash api
  const unsplashAPI = createApi({
    apiUrl: "https://api.unsplash.com/",
    accessKey: import.meta.env.VITE_UNSPLASH_KEY,
    headers: {
      "content-type": "application/json",
      accecpt: "application/json",
    },
  });

  const getRandomPhoto = async (keyword: string) => {
    const response = await unsplashAPI.photos.getRandom({
      query: keyword,
    });
    console.log(response);
    return response;
  };

  const providerValue: WeatherDataContextType = {
    weatherData,
    setCurrentLocation,
  };

  useEffect(() => {
    // Ask for permission to use geolocation and set current location state to
    // the given latitude and longitude
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation(`${latitude}, ${longitude}`);
    });
    if (weatherData) {
      // TODO: tinker with photo query params
      getRandomPhoto(conditionText as string)
        .then((result) => {
          if (result.errors) return;
          const photo = result.response as any;
          const url = photo.urls.raw + "&dpr=1&fit=crop&w=1920&h=1080";
          document.body.style.backgroundImage = `url(${url})`;
        })
        .catch((err) => console.error(err));
    }
  }, [conditionText]);

  return (
    <div className="App">
      <main>
        <TempPanel weatherData={weatherData} />
        <WeatherDataProvider value={providerValue}>
          <DetailsPanel />
        </WeatherDataProvider>
      </main>
    </div>
  );
};

export default App;
