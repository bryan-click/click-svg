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
        d="M12,1.51a1.29,1.29,0,0,1,1.06.76l10.6,18.37c.58,1,.1,1.85-1.07,1.85H1.41c-1.17,0-1.65-.83-1.07-1.85L10.94,2.27A1.29,1.29,0,0,1,12,1.51Zm0,3.18L3,20.36H21Zm0,14.15a1.07,1.07,0,0,0,0-2.13,1.07,1.07,0,1,0,0,2.13Zm0-3.19a1.07,1.07,0,0,1-1.07-1.06V9.05a1.07,1.07,0,0,1,2.13,0v5.54A1.07,1.07,0,0,1,12,15.65Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Alert;
