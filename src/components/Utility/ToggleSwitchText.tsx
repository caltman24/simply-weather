import React from "react";
import { ToggleSwitchOptions } from "../../@types/weather";

interface ToggleSwitchProps {
  options: ToggleSwitchOptions;
}

const ToggleSwitchText = ({ options }: ToggleSwitchProps) => {
  const { option1, option2, state } = options;
  return (
    <div className="toggle-switch-btn">
      <input
        id={option1.id}
        type="radio"
        value={option1.value}
        checked={option1.checked}
        onChange={option1.onChange}
      />
      <label htmlFor="ferinheit-option">{option1.label}</label>
      <input
        id={option2.id}
        type="radio"
        value={option2.value}
        checked={option2.checked}
        onChange={option2.onChange}
      />
      <label htmlFor="celsius-option">{option2.label}</label>
      <span
        className="toggle-switch-active"
        style={{
          transform: `translateX(${state === option1.value ? "0" : "100"}%)`,
        }}
      ></span>
    </div>
  );
};

export default ToggleSwitchText;
