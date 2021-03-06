import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Target({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12,9.09A2.91,2.91,0,1,0,14.91,12,2.92,2.92,0,0,0,12,9.09Zm0-1.67A4.58,4.58,0,1,1,7.42,12,4.58,4.58,0,0,1,12,7.42Zm0-2.66A7.24,7.24,0,1,0,19.24,12,7.24,7.24,0,0,0,12,4.76ZM12,0a1,1,0,0,1,1,.89V3.16a8.93,8.93,0,0,1,7.84,7.66l0,.21H23a1,1,0,0,1,1,1,1,1,0,0,1-.89,1H20.86a8.92,8.92,0,0,1-7.65,7.84l-.21,0V23a1,1,0,0,1-2,.1V20.86a8.91,8.91,0,0,1-7.84-7.65l0-.21H1a1,1,0,0,1-.1-2H3.16a8.92,8.92,0,0,1,7.66-7.84l.21,0V1A1,1,0,0,1,12,0Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Target;
