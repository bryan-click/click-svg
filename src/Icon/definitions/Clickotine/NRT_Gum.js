import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function NRT_Gum({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M19.34,10a8.49,8.49,0,0,1,.46,2.78c0,1.68-1.26,2.91-3.16,3.84a30.4,30.4,0,0,1-6.83,2.34,1,1,0,0,1-1.2-.76A1,1,0,0,1,9.38,17a27.9,27.9,0,0,0,6.38-2.18c1.28-.63,2-1.37,2-2a6.44,6.44,0,0,0-.36-2.13,1,1,0,0,1,.63-1.27A1,1,0,0,1,19.34,10ZM13.29,3.06l-.18.06L5.44,5.91a5.22,5.22,0,0,0-3.18,6.51l.06.17L4.2,17.77a5.22,5.22,0,0,0,6.51,3.17l.18-.06,7.67-2.79a5.22,5.22,0,0,0,3.18-6.51l-.06-.17L19.8,6.23A5.22,5.22,0,0,0,13.29,3.06Zm8.39,2.49,1.88,5.17A7.23,7.23,0,0,1,19.25,20l-7.67,2.79a7.23,7.23,0,0,1-9.26-4.32L.44,13.28A7.23,7.23,0,0,1,4.75,4l7.67-2.79A7.23,7.23,0,0,1,21.68,5.55Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default NRT_Gum;
