import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Star({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M18.75,23.44a1.11,1.11,0,0,1-.5-.12L12,20,5.75,23.32a1.07,1.07,0,0,1-1.56-1.13l1.19-7L.32,10.32a1.09,1.09,0,0,1-.27-1.1,1.07,1.07,0,0,1,.87-.73l7-1L11,1.16a1.07,1.07,0,0,1,1.92,0l3.13,6.32,7,1a1.07,1.07,0,0,1,.87.73,1.09,1.09,0,0,1-.27,1.1l-5.06,4.92,1.18,6.9a.85.85,0,0,1,0,.23,1.07,1.07,0,0,1-1.07,1.07Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Star;
