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

const App = () => {
  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>(null);

  const [appSettings, setAppSettings] = useState<AppSettings>({
    tempUnit: "ferinheit",
    speedUnit: "mph",
  });

  const { weatherData } = useFetchWeather(currentLocation);
  const conditionText: ConditionText = weatherData?.current.condition.text;

  // FIXME: Uncomment the photo fetching code when ready to deploy. This is a temporary fix to prevent uneeded API calls for rate limiting.
  // const photo = useFetchPhoto(conditionText, weatherData);

  // Everytime the photo changes then update the background image
  // photo change useEffect
  // useEffect(() => {
  //   if (photo) {
  //     document.body.style.backgroundImage = `url(${photo})`;
  //   }
  // }, [photo]);

  // Geolocation UseEffect
  useEffect(() => {
    // Ask for permission to use geolocation and set current location state to
    // the given latitude and longitude
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation(`${latitude}, ${longitude}`);
      },
      () => {
        setCurrentLocation("Indianapolis");
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
