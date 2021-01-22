import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function GraphLine({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M20.26,11.39a1.06,1.06,0,0,1-1.51,0l-1.13-1.12-4.55,4.55a1.07,1.07,0,0,1-1.51,0L9,12.24,5.21,16A1.06,1.06,0,0,1,3.7,16a1.07,1.07,0,0,1,0-1.52L8.22,10a1.06,1.06,0,0,1,1.52,0l2.57,2.57L16.84,8l0,0a1.07,1.07,0,0,1,.76-.31,1.06,1.06,0,0,1,.76.31l0,0,1.85,1.85a1.07,1.07,0,0,1,0,1.52Zm1.6-9.25H2.14V21.86H21.86ZM22.93,0A1.07,1.07,0,0,1,24,1.07V22.93A1.07,1.07,0,0,1,22.93,24H1.07A1.07,1.07,0,0,1,0,22.93V1.07A1.07,1.07,0,0,1,1.07,0Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default GraphLine;
