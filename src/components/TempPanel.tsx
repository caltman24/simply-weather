import Clock from "./Utility/Clock";
import conditionImage from "../assets/images/condition.svg";

const TempPanel = () => {
  return (
    <div className="temp-panel">
      <Clock />
      <span className="temp-header">
        <h2>16°</h2>
        <img src={conditionImage} alt="" />
      </span>
      <div className="temp-location">
        <p className="city">London</p>
        <p className="country">United Kingdom</p>
      </div>
    </div>
  );
};

export default TempPanel;
