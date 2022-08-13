import { Fragment } from "react";
import { WeatherData } from "../@types/weather";
import Clock from "./Utility/Clock";

interface TempPanelProps {
  weatherData: WeatherData;
}

const TempPanel = ({ weatherData }: TempPanelProps) => {
  const { temp_f, condition } = weatherData?.current || {};
  const { location } = weatherData || {};

  return (
    <div className="temp-panel">
      <Clock />
      {weatherData ? (
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
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TempPanel;
