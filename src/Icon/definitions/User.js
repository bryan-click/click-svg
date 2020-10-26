import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Phone({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12,8.5A2.5,2.5,0,1,0,14.5,11,2.5,2.5,0,0,0,12,8.5Zm0-2A4.5,4.5,0,1,1,7.5,11,4.49,4.49,0,0,1,12,6.5Zm0-4.36A9.85,9.85,0,0,0,6.05,19.85,6.53,6.53,0,0,1,12,16,6.49,6.49,0,0,1,17.81,20,9.85,9.85,0,0,0,12,2.14ZM12,18a4.74,4.74,0,0,0-3.37,1.47,2.61,2.61,0,0,0-.8,1.46,9.36,9.36,0,0,0,1.48.55,15.28,15.28,0,0,0,2.82.21,16.19,16.19,0,0,0,2.65-.24A10.68,10.68,0,0,0,16.05,21l0,.09a3.53,3.53,0,0,0-.74-1.4l-.13-.15A4.32,4.32,0,0,0,12,18ZM12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Phone;
