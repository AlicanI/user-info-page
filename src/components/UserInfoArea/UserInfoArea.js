import React, { useState } from "react";
import { User, GreetingsArea } from "../../exporter/exporter";
import "./UserInfoArea.scss";

const UserInfoArea = (props) => {
  const [changeColor, setChangeColor] = useState("firstColor");

  const colorChangeHandler = () => {
    if (changeColor === "firstColor") {
      setChangeColor("secondColor");
    } else {
      setChangeColor("firstColor");
    }
  };

  return (
    <div className="mid-body-container">
      <button onClick={colorChangeHandler} className="change-button">
        Change Color
      </button>
      <GreetingsArea color={changeColor} />
      <User />
    </div>
  );
};

export default UserInfoArea;
