export type TempUnit = "ferinheit" | "celsius";
export type SpeedUnit = "mph" | "kph";

export interface AppSettings {
  tempUnit: TempUnit;
  speedUnit: SpeedUnit;
}
