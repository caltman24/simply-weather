import "./assets/scss/main.scss";
import TempPanel from "./components/TempPanel";
import DetailsPanel from "./components/DeatilsPanel/DetailsPanel";
import { WeatherDataProvider } from "./WeatherDataContext";
import { useState, useEffect } from "react";
import {
  ISearchData,
  WeatherDataContextType,
  IWeatherData,
} from "./@types/weather";
import useFetchWeather from "./hooks/useFetchWeather";

/*
  List of data needed from the API:
    {
      "location": {
        name,
        region,
        country,
      },
      "current": {
        temp_f,
        condition : {all},
        wind_mph,
        wind_degree,
        wind_dir,
        precip_in,
        humidity,
        cloud
      }
    }

*/

// TODO: fetch data from API with current location. Format the data and store it in the state.
// TODO: change "any" type to the correct type for data returned from the API.
// TODO: Create an interface for the formated data.

const App = () => {
  const [searchData, setSearchData] = useState<ISearchData[]>([]);
  const [currentLocation, setCurrentLocation] = useState("London");
  const [weatherData, setWeatherData] = useState<any>({});
  const { data } = useFetchWeather(currentLocation);

  useEffect(() => {
    setWeatherData(data);
  }, [data, currentLocation]);

  const providerValue: WeatherDataContextType = {
    searchData,
    weatherData,
    setSearchData,
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
