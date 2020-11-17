import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Dosage({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M11.62,11.24,3.21,16.91,4.4,18.68,12.81,13ZM23.42,4.6a3.41,3.41,0,0,1-.92,4.73L17,13.06a3.59,3.59,0,0,1-.95.45A1.19,1.19,0,0,1,14,14.69l-.1-.16-9.1,6.14a.44.44,0,0,1-.6-.12l-.61-.91-1.6,1.08a1.08,1.08,0,0,1-1.51-.3l-.24-.36a1.09,1.09,0,0,1,.28-1.51l1.6-1.08-.61-.91a.44.44,0,0,1,.11-.6l9.1-6.14-.16-.22a1.2,1.2,0,0,1,.33-1.66,1.19,1.19,0,0,1,1.54.19,3.31,3.31,0,0,1,.77-.72l5.54-3.73A3.41,3.41,0,0,1,23.42,4.6Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Dosage;
