import React from "react";

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
    temp_f: number | string;
    temp_c: number | string;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number | string;
    wind_dir: number | string;
    wind_degree: number | string;
    precip_in: number | string;
    humidity: number | string;
    cloud: number | string;
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
