import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Timer({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M20.54,13.6A8.23,8.23,0,0,0,18,7.66,8.64,8.64,0,0,0,6,7.66,8.31,8.31,0,0,0,6,19.54a8.64,8.64,0,0,0,12.08,0A8.26,8.26,0,0,0,20.54,13.6Zm2,0A10.5,10.5,0,0,1,12,24,10.5,10.5,0,0,1,1.42,13.6,10.48,10.48,0,0,1,11,3.24V2h-.42a1,1,0,0,1-1-1,1,1,0,0,1,1-1h2.85a1,1,0,0,1,1,1,1,1,0,0,1-1,1H13V3.24a10.72,10.72,0,0,1,5.28,2l1.06-1a1,1,0,0,1,1.44,0,1,1,0,0,1,0,1.41l-1,1A10.25,10.25,0,0,1,22.58,13.6Zm-9-.08a1.63,1.63,0,0,1-3.25,0A1.58,1.58,0,0,1,11,12.27V7.43a1,1,0,0,1,2,0v4.84A1.58,1.58,0,0,1,13.62,13.52Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Timer;
