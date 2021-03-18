import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Options({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12,18.19A1.07,1.07,0,0,1,11,17.12V10.69a1.07,1.07,0,1,1,2.14,0v6.43A1.07,1.07,0,0,1,12,18.19ZM12,8A1.07,1.07,0,1,1,13.1,6.89,1.07,1.07,0,0,1,12,8ZM19,19a9.85,9.85,0,1,1,2.89-7A9.8,9.8,0,0,1,19,19ZM20.49,3.51a12,12,0,1,0,0,17A12,12,0,0,0,20.49,3.51Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Options;
