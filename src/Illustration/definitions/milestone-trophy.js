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

import { Backdrop, Blobs, Confetti } from "./shared";

function MilestoneTrophy({ width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 327}
      height={width / 1.5 || 218}
      viewBox={viewBox || "0 0 327 218"}
    >
      <Defs>
        <Backdrop />
        <Blobs />
        <Confetti />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={183.04}
        height={176.8}
        transform="translate(71.98 20.6)"
        xlinkHref="#blob7"
      />
      <Use
        width={180}
        height={180}
        transform="translate(73.5 19.99)"
        xlinkHref="#confetti"
      />
    </Svg>
  );
}

export default MilestoneTrophy;
