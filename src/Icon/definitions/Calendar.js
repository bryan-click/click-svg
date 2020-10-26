import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Calendar({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M23,3H19.8V2a.8.8,0,0,0-1.6,0V3H5.8V2A.8.8,0,0,0,4.2,2V3H1A1,1,0,0,0,0,4V22a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V4A1,1,0,0,0,23,3ZM2,5H4.2V6A.8.8,0,0,0,5.8,6V5H18.2V6a.8.8,0,1,0,1.6,0V5H22V8.2H2ZM22,21H2V9.8H22Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Calendar;
