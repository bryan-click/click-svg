import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Chevron_Up({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12,5.48a1.24,1.24,0,0,1,.88.36L23.63,16.42a1.21,1.21,0,0,1,0,1.74,1.26,1.26,0,0,1-1.76,0L12,8.45,2.13,18.16a1.26,1.26,0,0,1-1.76,0,1.21,1.21,0,0,1,0-1.74L11.12,5.84A1.24,1.24,0,0,1,12,5.48Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Chevron_Up;
