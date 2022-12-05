import React, { Fragment } from "react";
import Media from "react-media";
import {
  Navigation,
  UserInfoArea,
  TurkcellFeatures,
  FooterPathWay,
  MobileVersion,
} from "../../exporter/exporter";

import "./BigComponent.scss";

const DesktopVersion = () => {
  return (
    <Fragment>
      <nav>
        <Navigation />
      </nav>
      <main>
        <UserInfoArea />
      </main>
      <footer>
        <TurkcellFeatures />
        <FooterPathWay />
      </footer>
    </Fragment>
  );
};

const BigComponent = () => {
  return (
    <div className="big-container">
      <Media query="(min-width: 600px)">
        {(matches) => {
          return matches ? <DesktopVersion /> : <MobileVersion />;
        }}
      </Media>
    </div>
  );
};

export default BigComponent;
