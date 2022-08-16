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

  const { date_epoch, day } = forecastDay;

  function formatDateEpoch(epoch: number) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(epoch * 1000);
    const dayOfMonth = date.getUTCDate();
    const dayOfWeek = days[date.getUTCDay()];
    const month = date.getUTCMonth() + 1;
    return { dayOfMonth, month, dayOfWeek };
  }

  const { dayOfMonth, month, dayOfWeek } = formatDateEpoch(date_epoch);

  const { speedUnit, tempUnit } = appSettings;
  return (
    <div className="forecast-day">
      <div className="date">
        <p>{dayOfWeek}</p>
        <p>{`${month} / ${dayOfMonth}`}</p>
      </div>
      <div className="center">
        <div className="wind">
          <img src={windImg} />
          <p>
            {speedUnit === "mph"
              ? `${day.maxwind_mph} mph`
              : `${day.maxwind_kph} kph`}
          </p>
        </div>
        <div className="condition">
          <img src={day.condition.icon} />
          <p>
            {tempUnit === "ferinheit"
              ? `${day.avgtemp_f.toFixed(0)} °F`
              : `${day.avgtemp_c.toFixed(0)} °C`}
          </p>
        </div>
      </div>
      <div className="temps">
        <p>
          <span>H: </span>
          {tempUnit === "ferinheit"
            ? `${day.maxtemp_f.toFixed(0)} °F`
            : `${day.maxtemp_c.toFixed(0)} °C`}
        </p>
        <p>
          <span>L: </span>
          {tempUnit === "ferinheit"
            ? `${day.mintemp_f.toFixed(0)} °F`
            : `${day.mintemp_c.toFixed(0)} °C`}
        </p>
      </div>
    </div>
  );
};

export default ForecastDay;
