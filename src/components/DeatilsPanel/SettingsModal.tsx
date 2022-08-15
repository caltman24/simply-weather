import React, { useContext } from "react";
import { AppSettings, TempUnit, SpeedUnit } from "../../@types/settings";
import {
  ToggleSwitchOptions,
  WeatherDataContextType,
} from "../../@types/weather";
import WeatherDataContext from "../../WeatherDataContext";
import ToggleSwitchText from "../Utility/ToggleSwitchText";

interface SettingsModalProps {
  isOpen: boolean;
  setOpen: () => void;
}

const SettingsModal = ({ isOpen, setOpen }: SettingsModalProps) => {
  const { appSettings, setAppSettings } = useContext(
    WeatherDataContext
  ) as WeatherDataContextType;

  const { tempUnit, speedUnit } = appSettings;

  const handleTempUnitClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === tempUnit) return;
    setAppSettings((prev: AppSettings) => {
      const newSettings: AppSettings = {
        ...prev,
        tempUnit: e.target.value as TempUnit,
      };

      localStorage.setItem("appSettings", JSON.stringify(newSettings));

      return newSettings;
    });
  };

  const handleSpeedUnitClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === speedUnit) return;
    setAppSettings((prev: AppSettings) => {
      const newSettings: AppSettings = {
        ...prev,
        speedUnit: e.target.value as SpeedUnit,
      };

      localStorage.setItem("appSettings", JSON.stringify(newSettings));

      return newSettings;
    });
  };

  const tempOptions: ToggleSwitchOptions = {
    option1: {
      id: "ferinheit-option",
      value: "ferinheit",
      checked: tempUnit === "ferinheit",
      onChange: handleTempUnitClick,
      label: "F°",
    },
    option2: {
      id: "celsius-option",
      value: "celsius",
      checked: tempUnit === "celsius",
      onChange: handleTempUnitClick,
      label: "C°",
    },
    state: tempUnit,
  };

  const speedOptions: ToggleSwitchOptions = {
    option1: {
      id: "mph-option",
      value: "mph",
      checked: speedUnit === "mph",
      onChange: handleSpeedUnitClick,
      label: "mph",
    },
    option2: {
      id: "kph-option",
      value: "kph",
      checked: speedUnit === "kph",
      onChange: handleSpeedUnitClick,
      label: "kph",
    },
    state: speedUnit,
  };

  return (
    <div className={`modal ${isOpen && "open"}`}>
      <div className="close-modal" onClick={setOpen}>
        <div className="close-modal-icon"></div>
      </div>
      <h1>SETTINGS</h1>
      <div className="modal-settings">
        <span className="modal-settings-row">
          <p>Temperature Unit: </p>
          <ToggleSwitchText options={tempOptions} />
        </span>
        <span className="modal-settings-row">
          <p>Speed Unit: </p>
          <ToggleSwitchText options={speedOptions} />
        </span>
      </div>
    </div>
  );
};
export default SettingsModal;
