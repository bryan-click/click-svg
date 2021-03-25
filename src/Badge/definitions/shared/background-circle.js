import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, {
  G,
  Path,
  Use,
  Defs,
  Symbol,
  Circle,
  Rect
} from "react-native-svg";

import { CIRCLE_COLOR } from "./colors";

function BackgroundCircle() {
  return (
    <Fragment>
      <Symbol
        id="background-circle-achieved"
        data-name="Background Circle achieved"
        viewBox="0 0 96 96"
      >
        <Circle data-name="Circle" r={48} x={48} y={48} fill={"#fff"} />
      </Symbol>
    </Fragment>
  );
}

export default BackgroundCircle;
