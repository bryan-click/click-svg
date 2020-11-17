import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function NRT_Lozenge({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M20.71,3A10.22,10.22,0,0,0,13.57.2,13.33,13.33,0,0,0,4.12,4.39C-.68,9.36-1,16.82,3.29,21a10.22,10.22,0,0,0,7.14,2.78,13.33,13.33,0,0,0,9.45-4.19C24.68,14.64,25.05,7.18,20.71,3ZM18.44,18.22a11.3,11.3,0,0,1-8,3.58,8.17,8.17,0,0,1-5.75-2.22C1.16,16.17,1.49,10,5.56,5.78a11.3,11.3,0,0,1,8-3.58,8.17,8.17,0,0,1,5.75,2.22C22.84,7.83,22.51,14,18.44,18.22Zm-2.16-.6a8,8,0,0,1-5.34,2.08,10.21,10.21,0,0,1-4.43-1.1.94.94,0,0,1-.41-1.3A1,1,0,0,1,7,16.73a.86.86,0,0,1,.41.1,8.42,8.42,0,0,0,3.59.91,6,6,0,0,0,4-1.58,7.37,7.37,0,0,0,2.81-6.61,1,1,0,0,1,.82-1.15h.19a.92.92,0,0,1,.92.79A9.37,9.37,0,0,1,16.28,17.62Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default NRT_Lozenge;
