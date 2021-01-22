import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function ChevronRight({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M18.52,12a1.24,1.24,0,0,1-.36.88L7.58,23.63a1.21,1.21,0,0,1-1.74,0,1.26,1.26,0,0,1,0-1.76L15.55,12,5.84,2.13a1.26,1.26,0,0,1,0-1.76,1.21,1.21,0,0,1,1.74,0L18.16,11.12A1.24,1.24,0,0,1,18.52,12Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default ChevronRight;
