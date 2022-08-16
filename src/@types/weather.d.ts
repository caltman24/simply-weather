import React from "react";
import { AppSettings } from "./settings";

export interface IForecastDay {
  date: string;
  day: {
    maxtemp_c: string;
    maxtemp_f: string;
    mintemp_f: string;
    mintemp_c: string;
    avgtemp_c: string;
    avgtemp_f: string;
    maxwind_mph: string;
    maxwind_kph: string;
    condition: {
      icon: string;
    };
  };
}

export interface ISearchData {
  name?: string;
  region?: string;
  id?: string | number;
  url?: string;
}

export interface IWeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    last_updated: string;
    temp_f: string;
    temp_c: string;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: string;
    wind_kph: string;
    wind_dir: string;
    wind_degree: string;
    precip_in: string;
    humidity: string;
    cloud: string;
  };
  forecast: {
    forecastday: IForecastDay[];
  };
  error?: {
    message: string;
  };
}

export type WeatherData = IWeatherData | null;
export type ConditionText = string | undefined;
export type CurrentLocation = string | null;

export type WeatherDataContextType = {
  weatherData: WeatherData;
  appSettings: AppSettings;
  setAppSettings: React.Dispatch<React.SetStateAction<AppSettings>>;
  setCurrentLocation: React.Dispatch<React.SetStateAction<CurrentLocation>>;
};

export interface SwitchInputOptions {
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export interface ToggleSwitchOptions {
  option1: SwitchInputOptions;
  option2: SwitchInputOptions;
  state: any;
}
