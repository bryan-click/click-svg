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

function Blob2({ width, height, viewBox, preserveAspectRatio }) {
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
        width={293}
        height={184}
        transform="translate(0 24.5)"
        xlinkHref="#blob2"
      />
    </Svg>
  );
}

export default Blob2;
