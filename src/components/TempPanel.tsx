import { IWeatherData } from "../@types/weather";

import conditionImage from "../assets/images/condition.svg";
import Clock from "./Utility/Clock";

interface TempPanelProps {
  weatherData: IWeatherData | null;
}

const TempPanel = ({ weatherData }: TempPanelProps) => {
  const { temp_f, condition } = weatherData?.current || {};
  const { location } = weatherData || {};
  // TODO: Add condition image based off condition. The one the API provides sucks ass

  return (
    <div className="temp-panel">
      <Clock />
      <span className="temp-header">
        <h2>{temp_f}°</h2>
        <img src={conditionImage} alt={condition?.text} />
      </span>
      <div className="temp-location">
        <p className="city">{location?.name}</p>
        <p className="country">{location?.country}</p>
      </div>
    </div>
  );
};

export default TempPanel;
