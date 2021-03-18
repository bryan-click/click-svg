import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function ArrowRight({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M23.66,11.17,15.5,2.85a1.14,1.14,0,0,0-1.63,0,1.2,1.2,0,0,0,0,1.67l6.2,6.32H1.15a1.18,1.18,0,0,0,0,2.35h18.9l-6.19,6.31a1.19,1.19,0,0,0,0,1.66,1.13,1.13,0,0,0,.81.35,1.14,1.14,0,0,0,.82-.34l8.17-8.32A1.2,1.2,0,0,0,23.66,11.17Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default ArrowRight;
