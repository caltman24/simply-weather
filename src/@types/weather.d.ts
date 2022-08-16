import React from "react";
import { AppSettings } from "./settings";

export interface IForecastDay {
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_f: number;
    mintemp_c: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
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
    temp_f: number;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_kph: number;
    wind_dir: string;
    wind_degree: number;
    precip_in: number;
    humidity: number;
    cloud: number;
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
