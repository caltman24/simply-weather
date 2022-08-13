import { useEffect, useState } from "react";

import DetailsPanel from "./components/DeatilsPanel/DetailsPanel";
import TempPanel from "./components/TempPanel";
import useFetchPhoto from "./hooks/useFetchPhoto";
import useFetchWeather from "./hooks/useFetchWeather";
import { WeatherDataProvider } from "./WeatherDataContext";
import { WeatherDataContextType, ConditionText } from "./@types/weather";

// TODO: Finish Forecast Panel

const App = () => {
  const [currentLocation, setCurrentLocation] = useState("Indianapolis");
  const { weatherData } = useFetchWeather(currentLocation);
  const conditionText: ConditionText = weatherData?.current.condition.text;
  const photo = useFetchPhoto(conditionText, weatherData);

  // By default, the current location is Indianapolis. We then ask the user for their location. If it is provided we update the current location to the lat / long. If not, we use the default location. Then we fetch the weather data using the current location. After that, we fetch the photo using the condition text given by the weather data and set the background image to the photo url returned.

  // Everytime the photo changes then update the background image
  useEffect(() => {
    if (photo) {
      document.body.style.backgroundImage = `url(${photo})`;
    }
  }, [photo]);

  useEffect(() => {
    // Ask for permission to use geolocation and set current location state to
    // the given latitude and longitude
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation(`${latitude}, ${longitude}`);
    });
  }, []);

  const providerValue: WeatherDataContextType = {
    weatherData,
    setCurrentLocation,
  };

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
