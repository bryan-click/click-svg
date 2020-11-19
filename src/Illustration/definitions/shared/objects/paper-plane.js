import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, {
  G,
  Path,
  Use,
  Defs,
  Symbol,
  Ellipse,
  Rect
} from "react-native-svg";

function PaperPlane() {
  return (
    <Fragment>
      <Symbol id="paper-plane" data-name="Paper Plane" viewBox="0 0 140 130">
        <Path
          fill="#ffc09a"
          d="M0 79.69L34.06 95.7 45.3 130l15.54-21.79L107.06 130 140 0 0 79.69z"
        />
        <Path
          fill="#fd9757"
          d="M48.13 100.79l-1.67 20.25-7.55-23.81 94.43-87.9-85.21 91.46z"
        />
      </Symbol>
    </Fragment>
  );
}

export default PaperPlane;
