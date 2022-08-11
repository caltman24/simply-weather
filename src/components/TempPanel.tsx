import Clock from "./Utility/Clock";
import conditionImage from "../assets/images/condition.svg";
import WeatherDataContext from "../WeatherDataContext";
import { useContext } from "react";
import { WeatherDataContextType } from "../@types/weather";

const TempPanel = () => {
  const { weatherData } = useContext(
    WeatherDataContext
  ) as WeatherDataContextType;
  return (
    <div className="temp-panel">
      <Clock />
      <span className="temp-header">
        <h2>16°</h2>
        <img src={conditionImage} alt="" />
      </span>
      <div className="temp-location">
        <p className="city">{weatherData?.location?.name}</p>
        <p className="country">United Kingdom</p>
      </div>
    </div>
  );
};

export default TempPanel;
