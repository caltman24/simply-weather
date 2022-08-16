import BrandLogo from "../Utility/BrandLogo";
import SettingsIcon from "../Utility/SettingsIcon";
import SettingsModal from "./SettingsModal";
import { useState } from "react";

const FooterNav = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSettingsClick = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <nav className="footer-nav">
      <span className="brand">
        <BrandLogo className="brand-logo" />{" "}
        <p>
          Simply<span className="clr-yellow">Weather</span>
        </p>
      </span>
      <div className="settings">
        <SettingsIcon
          className="settings-icon"
          handleClick={handleSettingsClick}
        />
        <SettingsModal isOpen={modalOpen} setOpen={() => setModalOpen(false)} />
      </div>
    </nav>
  );
};

export default FooterNav;
