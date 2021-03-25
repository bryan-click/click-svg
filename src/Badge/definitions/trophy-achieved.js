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

import { BackgroundCircle, Done, Trophy } from "./shared";

function TrophyAchieved({ width, height, viewBox, preserveAspectRatio }) {
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
        <Trophy />
      </Defs>
      <Use width={96} height={96} xlinkHref="#background-circle-achieved" />
      <Use
        width={53.54}
        height={64}
        transform="translate(21.23 16)"
        xlinkHref="#trophy-achieved"
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

export default TrophyAchieved;
