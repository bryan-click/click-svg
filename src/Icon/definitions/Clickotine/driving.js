import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Driving({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12,2A10,10,0,0,0,2.46,9l6.45,1.76a3.33,3.33,0,0,1,6.18,0L21.54,9A10,10,0,0,0,12,2Zm0,8.67A1.33,1.33,0,1,0,13.33,12,1.32,1.32,0,0,0,12,10.67ZM22,11l-6.71,1.83A3.35,3.35,0,0,1,13,15.18V22A10,10,0,0,0,22,12C22,11.65,22,11.3,22,11ZM2,12a10,10,0,0,0,9,10V15.18a3.34,3.34,0,0,1-2.24-2.39L2.05,11C2,11.3,2,11.65,2,12ZM12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Driving;
