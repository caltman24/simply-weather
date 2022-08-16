import { Fragment, useContext } from "react";
import { WeatherDataContextType } from "../@types/weather";
import WeatherDataContext from "../WeatherDataContext";
import Clock from "./Utility/Clock";
import RefreshButton from "./Utility/RefreshButton";

const TempPanel = () => {
  const { weatherData, appSettings } = useContext(
    WeatherDataContext
  ) as WeatherDataContextType;

  const { temp_f, temp_c, condition, last_updated } =
    weatherData?.current || {};
  const { location } = weatherData || {};

  const temperature =
    appSettings.tempUnit === "ferinheit"
      ? `${parseFloat(temp_f as string).toFixed(0)}° F`
      : `${parseFloat(temp_c as string).toFixed(0)}° C`;

  const reloadPage = () => {
    window.location.reload();
  };

  const weatherDetails = (
    <Fragment>
      <div className="wrapper">
        <span className="temp-header">
          <h2>{temperature}</h2>
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
