import React from "react";
import "./FooterPathWay.scss";

const FooterPathWay = () => {
  return (
    <div className="footer-container">
      <div className="path">
        <span>Ana Sayfa</span> <i className="fa-solid fa-chevron-right"></i>{" "}
        <span>Cihazlar</span>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Akıllı Telefonlar</span>
      </div>
    </div>
  );
};

export default FooterPathWay;
