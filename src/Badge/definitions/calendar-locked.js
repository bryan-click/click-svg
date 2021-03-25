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

import { BackgroundCircle, Locked, Calendar } from "./shared";

function CalendarAchieved({ width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 96}
      height={width / 1.0 || 96}
      viewBox={viewBox || "0 0 96 96"}
    >
      <Defs>
        <BackgroundCircle />
        <Locked />
        <Calendar />
      </Defs>
      <Use width={96} height={96} xlinkHref="#background-circle-locked" />
      <Use
        width={64}
        height={58.38}
        transform="translate(16 18.81)"
        xlinkHref="#calendar-locked"
      />
      <Use
        width={24}
        height={24}
        transform="translate(72 72)"
        xlinkHref="#locked"
      />
    </Svg>
  );
}

export default CalendarAchieved;
