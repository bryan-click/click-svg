import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function ChevronLeft({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M5.48,12a1.24,1.24,0,0,1,.36-.88L16.42.37a1.21,1.21,0,0,1,1.74,0,1.26,1.26,0,0,1,0,1.76L8.45,12l9.71,9.87a1.26,1.26,0,0,1,0,1.76,1.21,1.21,0,0,1-1.74,0L5.84,12.88A1.24,1.24,0,0,1,5.48,12Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default ChevronLeft;
