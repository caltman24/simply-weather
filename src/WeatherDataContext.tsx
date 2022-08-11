import { createContext } from "react";
import { WeatherDataContextType } from "./@types/weather";

interface WeatherDataProviderProps {
  children: React.ReactNode;
  value: any;
}

const WeatherDataContext = createContext<WeatherDataContextType | null>(null);

export function WeatherDataProvider({
  children,
  value,
}: WeatherDataProviderProps) {
  return (
    <WeatherDataContext.Provider value={value}>
      {children}
    </WeatherDataContext.Provider>
  );
}

export default WeatherDataContext;
