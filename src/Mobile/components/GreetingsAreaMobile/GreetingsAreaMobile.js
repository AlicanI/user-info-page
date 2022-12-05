import React from "react";
import { fikriyeImg } from "../../../exporter/imgExporter";
import "./GreetingsAreaMobile.scss";

const GreetingsAreaMobile = (props) => {
  const { color } = props;

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
    <div className="greetings-area-mobile">
      <img src={fikriyeImg} alt="" className="fikriye-img" />
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

export default GreetingsAreaMobile;
