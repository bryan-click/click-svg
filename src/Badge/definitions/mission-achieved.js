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

import { BackgroundCircle, Done, Mission } from "./shared";

function RibbonAchieved({ width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 96}
      height={width / 1.0 || 96}
      viewBox={viewBox || "0 0 96 96"}
    >
      <Defs>
        <BackgroundCircle />
        <Done />
        <Mission />
      </Defs>
      <Use width={96} height={96} xlinkHref="#background-circle-achieved" />
      <Use
        width={56.77}
        height={64}
        transform="translate(19.62 16)"
        xlinkHref="#mission-achieved"
      />
      <Use
        width={24}
        height={24}
        transform="translate(72 72)"
        xlinkHref="#done"
      />
    </Svg>
  );
}

export default RibbonAchieved;
