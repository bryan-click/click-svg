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

import { Meter } from "./shared";

function DependencyLevelHigh({ width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 327}
      height={width / 1.5 || 218}
      viewBox={viewBox || "0 0 327 218"}
    >
      <Defs>
        <Meter />
      </Defs>
      <Use
        width={12}
        height={96}
        transform="translate(149.88) scale(2.27)"
        xlinkHref="#high"
      />
    </Svg>
  );
}

export default DependencyLevelHigh;
