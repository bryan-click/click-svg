import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Eye_Open({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M23.64,11.5c-.21-.3-5.23-7.24-11.64-7.24S.57,11.2.36,11.5L0,12l.36.5c.21.3,5.23,7.24,11.64,7.24S23.43,12.8,23.64,12.5L24,12Zm-4.71,3.31A15.41,15.41,0,0,1,15.69,17a8.67,8.67,0,0,1-3.69.91A8.67,8.67,0,0,1,8.31,17a15.41,15.41,0,0,1-3.24-2.15A21.63,21.63,0,0,1,2.34,12,20.47,20.47,0,0,1,5.07,9.2,15.09,15.09,0,0,1,8.31,7,8.67,8.67,0,0,1,12,6.13,8.67,8.67,0,0,1,15.69,7,15.09,15.09,0,0,1,18.93,9.2,20.47,20.47,0,0,1,21.66,12a21.63,21.63,0,0,1-2.73,2.81ZM16.22,12A4.22,4.22,0,1,1,12,7.78,4.22,4.22,0,0,1,16.22,12Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Eye_Open;
