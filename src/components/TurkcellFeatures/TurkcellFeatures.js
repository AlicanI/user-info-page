import {
  alertIconRadial,
  cardIconRadial,
  changeIconRadial,
  turkcellIconRadial,
} from "../../exporter/imgExporter";

import "./TurkcellFeatures.scss";

const TurkcellFeatures = () => {
  return (
    <div className="modal-container">
      <div className="features-left">
        <h1>Turkcell'de neler var?</h1>
      </div>
      <div className="features-right">
        <ul>
          <li>
            <button>
              <img src={alertIconRadial} alt="" />
              <span>Yenilikçi Hizmet</span>
            </button>
          </li>
          <li>
            <button>
              <img src={cardIconRadial} alt="" />
              <span>Ertesi gün teslimat</span>
            </button>
          </li>
          <li>
            <button>
              <img src={changeIconRadial} alt="" />
              <span>7/24 Müşteri Hizmetleri</span>
            </button>
          </li>
          <li>
            <button>
              <img src={turkcellIconRadial} alt="" />
              <span>En hızlı internet bağlantısı</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TurkcellFeatures;
