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

function Blob3({ width, height, viewBox, preserveAspectRatio }) {
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
        width={255.4}
        height={211.93}
        transform="translate(35.8 3.04)"
        xlinkHref="#blob3"
      />
    </Svg>
  );
}

export default Blob3;
