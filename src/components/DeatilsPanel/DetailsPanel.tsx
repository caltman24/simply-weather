import { useState, useContext } from "react";
import { WeatherDataContextType } from "../../@types/weather";
import WeatherDataContext from "../../WeatherDataContext";

import FadeInOut from "../Utility/FadeInOut";
import DetailRow from "./DetailRow";
import FooterNav from "./FooterNav";
import SearchBar from "./SearchBar";

const DetailsPanel = () => {
  const [activeTab, setActiveTab] = useState("details");

  const { weatherData } = useContext(
    WeatherDataContext
  ) as WeatherDataContextType;

  const { current } = weatherData || {};

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
        <DetailRow title="Speed" value={current?.wind_mph} unit=" m/h" />
        <DetailRow title="Degree" value={current?.wind_degree} unit="°" />
        <DetailRow title="Direction" value={current?.wind_dir} />
      </div>
    </div>
  );

  const forecastTab = (
    <div className="forecast-tab tab-container">
      <div className="forecast-details detail-section">
        <p>Forecast Details</p>
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
          Deatils
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
