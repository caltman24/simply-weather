import { useEffect, useState } from "react";

import { AppSettings } from "./@types/settings";
import {
  ConditionText,
  CurrentLocation,
  WeatherDataContextType,
} from "./@types/weather";
import DetailsPanel from "./components/DeatilsPanel/DetailsPanel";
import TempPanel from "./components/TempPanel";
import useFetchWeather from "./hooks/useFetchWeather";
import useFetchPhoto from "./hooks/useFetchPhoto";
import { WeatherDataProvider } from "./WeatherDataContext";

// -----------------------------------------------------------------------------
// TODO: 1. Implement netlify functions for api calls
// TODO: 2. Implement a service worker for offline support
// -----------------------------------------------------------------------------

const App = () => {
  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>(null);

  const [appSettings, setAppSettings] = useState<AppSettings>({
    tempUnit: "ferinheit",
    speedUnit: "mph",
  });

  const { weatherData } = useFetchWeather(currentLocation);
  // Grab the condition text from the weather data to use to get the photo from unsplash
  const conditionText: ConditionText = weatherData?.current.condition.text;
  const photo = useFetchPhoto(conditionText, weatherData);

  // Everytime the photo changes then update the background image
  // photo change useEffect
  useEffect(() => {
    if (!photo) return;
    document.body.style.backgroundImage = `url(${photo})`;
  }, [photo]);

  // Geolocation UseEffect
  useEffect(() => {
    // Ask for permission to use geolocation and set current location state to
    // the given latitude and longitude
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // user allowed geolocation
        const { latitude, longitude } = position.coords;
        setCurrentLocation(`${latitude}, ${longitude}`);
      },
      () => {
        // user denied geolocation
        setCurrentLocation("Middelfart, Denmark");
      }
    );

    // Check local storage for appSettings
    if (localStorage.getItem("appSettings")) {
      const storedSettings: AppSettings = JSON.parse(
        localStorage.getItem("appSettings") || "{}"
      );
      setAppSettings(storedSettings);
    }
  }, []);

  const providerValue: WeatherDataContextType = {
    weatherData,
    setCurrentLocation,
    appSettings,
    setAppSettings,
  };

  return (
    <div className="App">
      <main>
        <WeatherDataProvider value={providerValue}>
          <TempPanel />
          <DetailsPanel />
        </WeatherDataProvider>
      </main>
    </div>
  );
};

export default App;
