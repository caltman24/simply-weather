import { useState, useContext } from "react";
import { WeatherDataContextType } from "../../@types/weather";
import WeatherDataContext from "../../WeatherDataContext";

import FadeInOut from "../Utility/FadeInOut";
import DetailRow from "./DetailRow";
import FooterNav from "./FooterNav";
import SearchBar from "./SearchBar";
import ForecastDay from "./ForecastDay";

type activeTabType = "details" | "forecast";

const getUvIndex = (uv: number | undefined) => {
  if (uv === undefined || uv === null) return "";
  if (uv >= 1 && uv <= 2) return "(Low)";
  if (uv >= 3 && uv <= 5) return "(Moderate)";
  if (uv >= 6 && uv <= 7) return "(High)";
  if (uv >= 8 && uv <= 10) return "(Very High)";
  else return "(Extreme)";
};

const DetailsPanel = () => {
  const [activeTab, setActiveTab] = useState<activeTabType>("details");

  const { weatherData, appSettings } = useContext(
    WeatherDataContext
  ) as WeatherDataContextType;

  const { current, forecast } = weatherData || {};

  // If there the value provided in DetailRow is undefined or null, the value will be set to 0. (For loading purposes)

  const detailsTab = (
    <FadeInOut isMounted={activeTab === "details"}>
      <div className="details-tab tab-container">
        <div className="weather-details detail-section">
          <p>Weather Details</p>
          <DetailRow
            title="UV"
            value={current?.uv}
            unit={` ${getUvIndex(current?.uv)}`}
          />
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
    </FadeInOut>
  );

  const forecastTab = (
    <FadeInOut isMounted={activeTab === "forecast"}>
      <div className="forecast-tab tab-container">
        <div className="forecast-details detail-section">
          <p>Forecast Details</p>
          {forecast ? (
            forecast?.forecastday.map((day, index) => {
              return <ForecastDay forecastDay={day} key={index} />;
            })
          ) : (
            <small>Loading forecast...</small>
          )}
        </div>
      </div>
    </FadeInOut>
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
      {activeTab === "details" && detailsTab}
      {activeTab === "forecast" && forecastTab}
      <FooterNav />
    </div>
  );
};

export default DetailsPanel;
