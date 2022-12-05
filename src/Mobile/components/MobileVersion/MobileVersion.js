import React, { Fragment } from "react";
import {
  NavigationMobile,
  UserInfoAreaMobile,
} from "../../../exporter/exporter";

const MobileVersion = () => {
  return (
    <Fragment>
      <nav>
        <NavigationMobile />
      </nav>
      <main>
        <UserInfoAreaMobile />
      </main>
    </Fragment>
  );
};

export default MobileVersion;
