import React from "react";
import { logo, userImg, cartImg, searchImg } from "../../exporter/imgExporter";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="nav-top">
        <span className="small-link">Bireysel</span>
        <span className="small-link">Kurumsal</span>
      </div>
      <div className="nav-bottom">
        <ul className="nav-bottom__left">
          <li>
            <a href="#logo-img" className="logo-img">
              <img src={logo} alt="brand-logo-mini" />
            </a>
          </li>
          <li>
            <a href="#products">Cihazlar</a>
          </li>
          <li>
            <a href="#packets">Paketler</a>
          </li>
          <li>
            <a href="#applications">Uygulamalar</a>
          </li>
          <li>
            <a href="#home-solutions">Ev Çözümleri</a>
          </li>
          <li>
            <a href="#opportunities">Fırsatlar</a>
          </li>
        </ul>

        <div className="nav-bottom__right">
          <button className="nav-button-letter">
            <span>Hızlı İşlemler</span>
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <span className="separation"></span>
          <button className="nav-button">
            <img src={searchImg} alt="" />{" "}
          </button>
          <button className="nav-button">
            <img src={cartImg} alt="" />
          </button>
          <button className="nav-button">
            <img src={userImg} alt="" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
