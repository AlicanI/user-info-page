import React, { useState } from "react";
import { GreetingsAreaMobile } from "../../../exporter/exporter";
import "./UserInfoAreaMobile.scss";

const UserInfoAreaMobile = () => {
  const [changeColor, setChangeColor] = useState("firstColor");

  const colorChangeHandler = () => {
    if (changeColor === "firstColor") {
      setChangeColor("secondColor");
    } else {
      setChangeColor("firstColor");
    }
  };

  return (
    <div className="mid-body-container-mobile">
      <button className="change-button" onChange={colorChangeHandler}>
        Change Color
      </button>
      <GreetingsAreaMobile color={changeColor} />
    </div>
  );
};

export default UserInfoAreaMobile;
