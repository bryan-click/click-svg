import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Mission({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M22.71,22.29,13,12.59V9h8a1,1,0,0,0,.88-.53,1,1,0,0,0-.05-1L20.2,5l1.63-2.45a1,1,0,0,0,.05-1A1,1,0,0,0,21,1H13a1,1,0,0,0-2,0V12.59l-9.71,9.7a1,1,0,0,0-.21,1.09A1,1,0,0,0,2,24H22a1,1,0,0,0,.92-.62A1,1,0,0,0,22.71,22.29ZM19.13,3l-1,1.45a1,1,0,0,0,0,1.1l1,1.45H13V3ZM4.41,22,12,14.41,19.59,22Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Mission;
