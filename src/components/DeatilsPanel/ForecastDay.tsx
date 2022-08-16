import windImg from "../../assets/images/wind-ico.svg";
import { IForecastDay, WeatherDataContextType } from "../../@types/weather";
import WeatherDataContext from "../../WeatherDataContext";
import { useContext } from "react";

interface ForecastDayProps {
  forecastDay: IForecastDay;
}

const ForecastDay = ({ forecastDay }: ForecastDayProps) => {
  const { appSettings } = useContext(
    WeatherDataContext
  ) as WeatherDataContextType;

  const { date, day } = forecastDay;

  //    TODO: Format the date from "yyyy-mm-dd" to "m/d" and find the corresponding day of the week.

  const { speedUnit, tempUnit } = appSettings;
  return (
    <div className="forecast-day">
      <div className="date">
        <p>{date}</p>
        {/* <p>8/09</p> */}
      </div>
      <div className="wind">
        <img src={windImg} width={40} />
        <p>
          {speedUnit === "mph"
            ? `${day.maxwind_mph} mph`
            : `${day.maxwind_kph} kph`}
        </p>
      </div>
      <div className="condition">
        <img src={day.condition.icon} width={45} />
        <p>
          {tempUnit === "ferinheit"
            ? `${day.avgtemp_f} °F`
            : `${day.avgtemp_c} °C`}
        </p>
      </div>
      <div className="temps">
        <p>
          H:{" "}
          {tempUnit === "ferinheit"
            ? `${day.maxtemp_f} °F`
            : `${day.maxtemp_c} °C`}
        </p>
        <p>
          L:{" "}
          {tempUnit === "ferinheit"
            ? `${day.mintemp_f} °F`
            : `${day.mintemp_c} °C`}
        </p>
      </div>
    </div>
  );
};

export default ForecastDay;
