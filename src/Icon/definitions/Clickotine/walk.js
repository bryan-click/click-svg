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
        d="M8.42,2,3.55,9l13.83,9.69h5v-.93L18.46,16.3l-.5-.87-2.55.22-.11-1.34,1.92-.17-.6-1.06-2.55.23L14,12l1.93-.17-.56-1L12.77,11l-.12-1.33L15,9.5l-.32-4.56Zm-6,8.58-.75,1.08L16.34,22h6V20.65H17.28a1.51,1.51,0,0,1-.85-.23l-.1-.07ZM7.06,1.08A1.66,1.66,0,0,1,9.12.53l6.23,2.9a1.66,1.66,0,0,1,1,1.39l.32,4.57a1.15,1.15,0,0,1,0,.32v.06l0,0,.07.09.06.1.57,1a1.46,1.46,0,0,1,.21.69v0l0,0a1.49,1.49,0,0,1,.41.42l.06.1.61,1.06a1.6,1.6,0,0,1,.22.69v0l.05,0a1.82,1.82,0,0,1,.41.42l.06.1.2.35,3.32,1.24A1.65,1.65,0,0,1,24,17.62V19a1.64,1.64,0,0,1-.14.67,1.7,1.7,0,0,1,.13.56V22a1.67,1.67,0,0,1-1.66,1.66h-6a1.63,1.63,0,0,1-1-.3L.71,13.05A1.66,1.66,0,0,1,.3,10.74L1.24,9.4a1.5,1.5,0,0,1,.5-.47A1.72,1.72,0,0,1,2,8.3Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Thinking;
