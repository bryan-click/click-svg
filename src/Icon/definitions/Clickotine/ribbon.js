import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Ribbon({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M14.8,20.43l-2.1-2.15a1,1,0,0,0-1.41,0L9.2,20.43V16a7.8,7.8,0,0,0,5.6,0ZM6,8.3A6.24,6.24,0,0,1,7.76,3.92a5.87,5.87,0,0,1,8.48,0,6.32,6.32,0,0,1,0,8.75,5.87,5.87,0,0,1-8.48,0A6.21,6.21,0,0,1,6,8.3Zm14,0A8.12,8.12,0,0,0,12,.05,8.12,8.12,0,0,0,4,8.3a8.32,8.32,0,0,0,3.2,6.59v8a1,1,0,0,0,.62.95A1,1,0,0,0,8.2,24a1,1,0,0,0,.71-.3L12,20.46l3.09,3.18a1,1,0,0,0,1.09.22,1,1,0,0,0,.62-.95v-8A8.32,8.32,0,0,0,20,8.3Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Ribbon;
