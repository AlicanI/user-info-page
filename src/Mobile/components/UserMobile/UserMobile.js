import React from "react";
import { Card } from "../../../exporter/exporter";

import "./UserMobile.scss";
const UserMobile = () => {
  return (
    <Card className={"user-info-area-mobile"}>
      <div className="user-info-area-mobile__top">
        <div className="user-info-area-mobile__fullname ">
          <h4>Adı Soyadı</h4>
          <span>Ezgi Dirik</span>
        </div>
        <div className="user-info-area-mobie__number ">
          <h4>Taşınma Talebinde Bulunduğunuz Numara</h4>
          <span>554 239 70 14</span>
        </div>
        <div className="user-info-area-mobile__packet ">
          <h4>Seçmiş Olduğunuz Paket</h4>
          <span>Turbo 12GB Faturalı 90 TL</span>
        </div>
      </div>
      <div className="user-info-area-mobile__down">
        <p>
          Faturasız yeni hat ücretiniz bilgisine başvurunuzu yapacağınız
          mağazadan ulaşabilirsiniz.
        </p>
        <p>
          Mağaza işlemlerinizi tamamladıktan sonra hattınızı teslim
          alabilirsiniz.
        </p>
        <p>Mağazaya gittiğinizde kimliğinizi yanınızda bulundurunuz</p>
      </div>
    </Card>
  );
};

export default UserMobile;
