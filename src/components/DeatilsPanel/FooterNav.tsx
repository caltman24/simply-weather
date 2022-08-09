import BrandLogo from "../Utility/BrandLogo";
import SettingsIcon from "../Utility/SettingsIcon";

const FooterNav = () => {
  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };
  return (
    <nav className="footer-nav">
      <span className="brand">
        <BrandLogo className="brand-logo" />{" "}
        <p>
          Simply<span className="clr-yellow">Weather</span>
        </p>
      </span>
      <SettingsIcon
        className="settings-icon"
        handleClick={handleSettingsClick}
      />
    </nav>
  );
};

export default FooterNav;
