import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Thinking({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M16.79,16.37a.61.61,0,0,1,.48.79,5.17,5.17,0,0,1-4.17,3.75.7.7,0,0,1-.74-.53.71.71,0,0,1,.58-.79A3.8,3.8,0,0,0,16,16.85.61.61,0,0,1,16.79,16.37ZM12,2.64,9.35,7.2l-.13.23L8.58,8.48l-.43.71c-2,3.16-2.64,4.7-2.64,6.62a6.49,6.49,0,1,0,13,0c0-1.84-.62-3.34-2.41-6.22L15,7.93l-.16-.25-.29-.48ZM12.58.38l3.46,6c.3.5.62,1,.94,1.52l.32.51c1.45,2.3,2.86,4.66,2.86,7.41a8.16,8.16,0,1,1-16.32,0c0-2.55,1.21-4.76,2.52-6.9l.31-.51L7,7.89c.31-.51.63-1,.92-1.52l3.46-6A.7.7,0,0,1,12.58.38Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Thinking;
