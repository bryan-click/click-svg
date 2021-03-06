import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function BandAid({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M8.31,4a1,1,0,1,1-1,1A1,1,0,0,1,8.31,4ZM5,4A1,1,0,1,1,4,5,1,1,0,0,1,5,4ZM5,7.31a1,1,0,1,1-1,1A1,1,0,0,1,5,7.31ZM6.12,2a4.08,4.08,0,0,0-2.93,1.2,4.18,4.18,0,0,0,0,5.9l2.57,2.57,5.9-5.9L9.05,3.15A4.12,4.12,0,0,0,6.12,2ZM19,14.7a1,1,0,1,1-1,1A1,1,0,0,1,19,14.7ZM12.76,7,7.09,12.62l4.66,4.66,5.66-5.67Zm2.93,11.1a1,1,0,1,1-1,1A1,1,0,0,1,15.69,18.05Zm3.35,0a1,1,0,1,1-1,1A1,1,0,0,1,19,18.05Zm-.39-5.3-5.91,5.91,2.2,2.2a4.15,4.15,0,0,0,5.87,0l0,0a4.17,4.17,0,0,0,0-5.87Zm-8.56-11L22.28,13.94a5.9,5.9,0,0,1,0,8.32l0,0a5.9,5.9,0,0,1-8.31,0L1.73,10.1a5.91,5.91,0,0,1,8.36-8.37Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default BandAid;
