import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Alert({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M23.69,3.84a1.09,1.09,0,0,0-1.52,0L7.83,17.93l-6-5.9A1.09,1.09,0,0,0,.31,12a1.06,1.06,0,0,0,0,1.49l6.74,6.62,0,0a1.06,1.06,0,0,0,.76.31,1.07,1.07,0,0,0,.76-.31l0,0L23.69,5.33A1.06,1.06,0,0,0,23.69,3.84Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Alert;
