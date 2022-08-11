export interface ISearchData {
  name?: string;
  region?: string;
  country?: string;
  id: string | number;
}

export type WeatherDataContextType = {
  searchData: ISearchData[];
  weatherData: any;
  setSearchData: (searchData: ISearchData[]) => void;
};

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
}
