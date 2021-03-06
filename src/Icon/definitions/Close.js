import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Close({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M20.48,18.81,13.69,12l6.9-6.9a1.23,1.23,0,0,0-.12-1.63,1.16,1.16,0,0,0-1.58-.07L12,10.33l-6.9-6.9A1.17,1.17,0,0,0,3.5,3.5a1.14,1.14,0,0,0-.07,1.57l6.9,6.9-6.9,6.92a1.15,1.15,0,0,0,.07,1.58,1.22,1.22,0,0,0,1.63.12L12,13.67l6.86,6.86a1.15,1.15,0,0,0,1.58-.06A1.25,1.25,0,0,0,20.48,18.81Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Close;
