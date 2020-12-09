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

import { Backdrop, Blobs, Clock } from "./shared";

function IntrospectiveTime({ width, height, viewBox, preserveAspectRatio }) {
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
        <Clock />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={232.17}
        height={185.29}
        transform="translate(47.42 16.35)"
        xlinkHref="#blob5"
      />
      <Use
        width={33}
        height={30}
        transform="matrix(5 0 0 5 70 24)"
        xlinkHref="#clock"
      />
    </Svg>
  );
}

export default IntrospectiveTime;
