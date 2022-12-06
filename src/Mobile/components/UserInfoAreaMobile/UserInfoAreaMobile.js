import React, { useState } from "react";
import { GreetingsAreaMobile, UserMobile } from "../../../exporter/exporter";
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
      <button className="change-button" onClick={colorChangeHandler}>
        Change Color
      </button>
      <GreetingsAreaMobile color={changeColor} />
      <UserMobile />
    </div>
  );
};

export default UserInfoAreaMobile;
