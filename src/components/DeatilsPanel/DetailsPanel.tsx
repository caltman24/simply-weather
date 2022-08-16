import { useState, useContext } from "react";
import { WeatherDataContextType } from "../../@types/weather";
import WeatherDataContext from "../../WeatherDataContext";

import FadeInOut from "../Utility/FadeInOut";
import DetailRow from "./DetailRow";
import FooterNav from "./FooterNav";
import SearchBar from "./SearchBar";
import ForecastDay from "./ForecastDay";

type activeTabType = "details" | "forecast";

const DetailsPanel = () => {
  const [activeTab, setActiveTab] = useState<activeTabType>("details");

  const { weatherData, appSettings } = useContext(
    WeatherDataContext
  ) as WeatherDataContextType;

  const { current, forecast } = weatherData || {};

  // If there the value provided in DetailRow is undefined or null, the value will be set to 0. (For loading purposes)

  const detailsTab = (
    <div className="details-tab tab-container">
      <div className="weather-details detail-section">
        <p>Weather Details</p>
        <DetailRow title="Cloudy" value={current?.cloud} unit="%" />
        <DetailRow
          title="Precipitation"
          value={current?.precip_in}
          unit=" in"
        />
        <DetailRow title="Humidity" value={current?.humidity} unit="%" />
      </div>
      <div className="wind-details detail-section">
        <p>Wind Details</p>
        <DetailRow
          title="Speed"
          value={
            appSettings.speedUnit === "mph"
              ? current?.wind_mph
              : current?.wind_kph
          }
          unit={` ${appSettings.speedUnit}`}
        />
        <DetailRow title="Degree" value={current?.wind_degree} unit="°" />
        <DetailRow title="Direction" value={current?.wind_dir} />
      </div>
    </div>
  );

  const forecastTab = (
    <div className="forecast-tab tab-container">
      <div className="forecast-details detail-section">
        <p>Forecast Details</p>
        {forecast?.forecastday.map((day, index) => {
          return <ForecastDay forecastDay={day} key={index} />;
        })}
      </div>
    </div>
  );

  return (
    <div className="details-panel">
      <SearchBar />
      <div className="tabs-container">
        <p
          className={`tab ${activeTab === "details" && "active"}`}
          onClick={() => activeTab !== "details" && setActiveTab("details")}
        >
          Details
        </p>
        <p
          className={`tab ${activeTab === "forecast" && "active"}`}
          onClick={() => activeTab !== "forecast" && setActiveTab("forecast")}
        >
          Forecast
        </p>
      </div>
      {activeTab === "details" && (
        <FadeInOut isMounted={activeTab === "details"}>{detailsTab}</FadeInOut>
      )}
      {activeTab === "forecast" && (
        <FadeInOut isMounted={activeTab === "forecast"}>
          {forecastTab}
        </FadeInOut>
      )}
      <FooterNav />
    </div>
  );
};

export default DetailsPanel;
