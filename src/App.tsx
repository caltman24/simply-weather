import { useEffect, useState } from "react";

import DetailsPanel from "./components/DeatilsPanel/DetailsPanel";
import TempPanel from "./components/TempPanel";
import useFetchWeather from "./hooks/useFetchWeather";
import { WeatherDataProvider } from "./WeatherDataContext";

import { WeatherDataContextType } from "./@types/weather";

const App = () => {
  const [currentLocation, setCurrentLocation] = useState("46815");
  const { weatherData } = useFetchWeather(currentLocation as string);

  useEffect(() => {
    if (weatherData?.error) {
      alert(weatherData.error.message);
    }
  }, [weatherData]);

  console.log(currentLocation);

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
