import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Square_Hollow({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M20.09,2a2,2,0,0,1,2,2V20a2,2,0,0,1-2,2h-16a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h16m0-2h-16a4,4,0,0,0-4,4V20a4,4,0,0,0,4,4h16a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Square_Hollow;
