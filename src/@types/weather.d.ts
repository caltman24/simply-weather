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
    temp_f: number | string;
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
  }
}

export type WeatherDataContextType = {
  weatherData: IWeatherData | null;
  setCurrentLocation: (location: string) => void;
};
