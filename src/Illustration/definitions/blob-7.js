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

import { Blobs } from "./shared";

function Blob7({ width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 327}
      height={width / 1.5 || 218}
      viewBox={viewBox || "0 0 327 218"}
    >
      <Defs>
        <Blobs />
      </Defs>
      <Use
        width={282.25}
        height={202.24}
        transform="translate(22.37 7.88)"
        xlinkHref="#blob7"
      />
    </Svg>
  );
}

export default Blob7;
