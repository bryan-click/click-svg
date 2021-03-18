import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function ArrowLeft({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M.34,12.82,8.5,21.14a1.14,1.14,0,0,0,1.63,0,1.19,1.19,0,0,0,0-1.66L3.94,13.17h18.9a1.18,1.18,0,0,0,0-2.35H4l6.19-6.3a1.19,1.19,0,0,0,0-1.66,1.13,1.13,0,0,0-.81-.35,1.15,1.15,0,0,0-.82.35L.34,11.16A1.19,1.19,0,0,0,.34,12.82Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default ArrowLeft;
