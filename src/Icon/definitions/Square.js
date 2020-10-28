import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Square({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M20,24H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0H20a4,4,0,0,1,4,4V20A4,4,0,0,1,20,24Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Square;
