import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Lock({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M13.08,16.82v1.56a1.08,1.08,0,0,1-2.16,0V16.82a1.7,1.7,0,0,1-.66-1.34,1.74,1.74,0,0,1,3.47,0A1.71,1.71,0,0,1,13.08,16.82ZM6.36,7.72a5.64,5.64,0,0,1,11.27,0h0v1.5H6.36ZM3.79,11.36H20.23v10.5H3.79ZM22.4,22.81V10.29a1.07,1.07,0,0,0-.85-1H21.5l-.18,0H19.8V7.72h0a7.81,7.81,0,0,0-15.61,0V9.21H2.7a1.09,1.09,0,0,0-1.08,1V22.7a.85.85,0,0,0,0,.23A1.08,1.08,0,0,0,2.68,24H21.32a1.08,1.08,0,0,0,1.09-1.07S22.4,22.85,22.4,22.81Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Lock;
