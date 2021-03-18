import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Bottle({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M13,3.73H11L8.16,7.48v3a.42.42,0,0,0,.35.41h6.91a.42.42,0,0,0,.42-.42v-3Zm2.6,9.44H8.39a.22.22,0,1,0,0,.44h7.22a.22.22,0,1,0,0-.44Zm0,2.66H8.34a.21.21,0,0,0-.17.18v0a.22.22,0,0,0,.23.22h7.22a.22.22,0,1,0,0-.44Zm-.14,2.67h-7a.41.41,0,0,0-.29.33V22a.41.41,0,0,0,.42.41h6.84a.41.41,0,0,0,.42-.41v-3a.41.41,0,0,0-.36-.41ZM14.28,0a.82.82,0,0,1,.82.82V2.34a.81.81,0,0,1-.52.76l2.73,3.61a.84.84,0,0,1,.17.5v3.32A2,2,0,0,1,16.85,12a1.87,1.87,0,0,1,.62,1.39,1.84,1.84,0,0,1-.56,1.33,1.84,1.84,0,0,1,.56,1.33,1.87,1.87,0,0,1-.62,1.39,2,2,0,0,1,.62,1.47v3a2,2,0,0,1-2,2.05H8.58A2.05,2.05,0,0,1,6.52,22v-3a2,2,0,0,1,.62-1.47,1.87,1.87,0,0,1-.61-1.27v-.12a1.85,1.85,0,0,1,.57-1.33,1.86,1.86,0,0,1-.56-1.22v-.11A1.87,1.87,0,0,1,7.14,12a2,2,0,0,1-.62-1.47V7.21a.84.84,0,0,1,.17-.5L9.43,3.1a.8.8,0,0,1-.53-.76V.82A.82.82,0,0,1,9.72,0Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Bottle;