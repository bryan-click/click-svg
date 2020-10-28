import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Circle_Hollow({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M5,19a9.85,9.85,0,1,1,7,2.89A9.8,9.8,0,0,1,5,19Zm19-7A12,12,0,1,0,12,24,12,12,0,0,0,24,12Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Circle_Hollow;
