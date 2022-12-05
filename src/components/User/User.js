import React from "react";
import { cariedNumberText, choosedPacket } from "../../exporter/imgExporter";
import "./User.scss";

const User = () => {
  return (
    <div className="user-info-area">
      <div className="user-info-area__top">
        <div className="user-info-area__fullname ">
          <h4>Adı Soyadı</h4>
          <span>Ezgi Dirik</span>
        </div>
        <div className="user-info-area__number ">
          {/* <h4>Taşıma Talebinde Bulunduğunuz Numara</h4> */}
          <img src={cariedNumberText} alt="text-img" />
          <span>554 239 70 14</span>
        </div>
        <div className="user-info-area__packet ">
          {/* <h4>Seçmiş olduğunuz Paketiniz</h4> */}
          <img src={choosedPacket} alt="text-img" />
          <span>Turbo 12GB Faturalı 90 TL</span>
        </div>
      </div>
      <div className="user-info-area__down">
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
    </div>
  );
};

export default User;
