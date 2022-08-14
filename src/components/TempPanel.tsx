import { Fragment } from "react";
import { WeatherData } from "../@types/weather";
import Clock from "./Utility/Clock";
import RefreshButton from "./Utility/RefreshButton";
interface TempPanelProps {
  weatherData: WeatherData;
}

const TempPanel = ({ weatherData }: TempPanelProps) => {
  const { temp_f, condition, last_updated } = weatherData?.current || {};
  const { location } = weatherData || {};

  const reloadPage = () => {
    window.location.reload();
  };

  const weatherDetails = (
    <Fragment>
      <span className="temp-header">
        <h2>{temp_f}°</h2>
        <div className="temp-condition">
          <img src={condition?.icon} alt={condition?.text} />
          <p>{condition?.text}</p>
        </div>
      </span>
      <div className="temp-location">
        <p className="city">{location?.name}</p>
        <p className="country">{location?.region}</p>
        <p className="country">{location?.country}</p>
      </div>
      <div className="last-updated">
        <p>last updated: {last_updated}</p>
        <RefreshButton onRefresh={reloadPage} />
      </div>
    </Fragment>
  );

  return (
    <div className="temp-panel">
      <Clock />
      {weatherData ? weatherDetails : <p>Loading...</p>}
    </div>
  );
};

export default TempPanel;
