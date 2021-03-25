import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Options({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M21,9a3,3,0,1,1-3,3A3,3,0,0,1,21,9ZM12,9a3,3,0,1,1-3,3A3,3,0,0,1,12,9ZM3,9a3,3,0,1,1-3,3A3,3,0,0,1,3,9Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Options;
