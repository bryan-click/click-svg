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
        data-name="Background Circle Achieved"
        viewBox="0 0 96 96"
      >
        <Circle
          data-name="Background Circle"
          cx={48}
          cy={48}
          r={48}
          fill="#FFF1E8"
        />
      </Symbol>
      <Symbol
        id="background-circle-locked"
        data-name="Background Circle Locked"
        viewBox="0 0 96 96"
      >
        <Circle
          data-name="Background Circle"
          cx={48}
          cy={48}
          r={48}
          fill="#F5F5F5"
        />
      </Symbol>
    </Fragment>
  );
}

export default BackgroundCircle;
