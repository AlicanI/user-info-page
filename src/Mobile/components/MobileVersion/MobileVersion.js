import React, { Fragment } from "react";
import {
  NavigationMobile,
  TurkcellFeaturesMobile,
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
      <footer>
        <TurkcellFeaturesMobile />
      </footer>
    </Fragment>
  );
};

export default MobileVersion;
