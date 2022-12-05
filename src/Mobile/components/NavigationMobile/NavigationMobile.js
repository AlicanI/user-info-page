import React from "react";
import { logo } from "../../../exporter/imgExporter";
import "./NavigationMobile.scss";

const NavigationMobile = () => {
  return (
    <div className="nav-mobile">
      <img src={logo} alt="Turkcell Logo" />
    </div>
  );
};

export default NavigationMobile;
