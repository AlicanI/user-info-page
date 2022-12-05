import React from "react";
import { seloImg } from "../../exporter/imgExporter";

import "./GreetingsArea.scss";

const GreetingsArea = (props) => {
  const { color } = props;
  console.log(color);

  const rectangleClasses = {
    sunRectangle:
      color === "secondColor"
        ? " sun-rectangle sun-rectangle-changed"
        : "sun-rectangle",
    step1: color === "secondColor" ? "step-1 step-1-changed" : "step-1",
    step2: color === "secondColor" ? "step-2 step-2-changed" : "step-2",
    step3: color === "secondColor" ? "step-3 step-3-changed" : "step-3",
  };

  return (
    <div className="greetings-area">
      <img src={seloImg} alt="" className="selo-img" />
      <div className={rectangleClasses.sunRectangle}>
        <div className={rectangleClasses.step1}>
          <div className={rectangleClasses.step2}>
            <div className={rectangleClasses.step3}></div>
          </div>
        </div>

        <h2>Tebrikler Turkcell'e Hoşgeldiniz! </h2>
      </div>
    </div>
  );
};

export default GreetingsArea;
