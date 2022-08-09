import SearchBar from "./SearchBar";
import DetailRow from "./DetailRow";
import FooterNav from "./FooterNav";
import { useState } from "react";

const DetailsPanel = () => {
  const [activeTab, setActiveTab] = useState("details");

  const detailsTab = (
    <div className="details-tab tab-container">
      <div className="weather-details detail-section">
        <p>Weather Details</p>
        <DetailRow title="Cloudy" value="0%" />
        <DetailRow title="Precipitation" value="0 in" />
        <DetailRow title="Humidity" value="34%" />
      </div>
      <div className="wind-details detail-section">
        <p>Wind Details</p>
        <DetailRow title="Speed" value="34 m/h" />
        <DetailRow title="Degree" value="34" />
        <DetailRow title="Direction" value="N" />
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
      {activeTab === "details" ? detailsTab : forecastTab}
      <FooterNav />
    </div>
  );
};

export default DetailsPanel;
