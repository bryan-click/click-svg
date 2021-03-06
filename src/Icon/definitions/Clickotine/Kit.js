import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Kit({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M20.34,21.16H3.66a1.4,1.4,0,0,1-1.39-1.38V13.67a32.64,32.64,0,0,0,6.32,1.15,2.65,2.65,0,0,0,2.63,2.44h1.56a2.63,2.63,0,0,0,2.63-2.44,32.19,32.19,0,0,0,6.29-1.15v6.11A1.36,1.36,0,0,1,20.34,21.16ZM13.16,13.1v1.54a.39.39,0,0,1-.38.38H11.22a.39.39,0,0,1-.38-.38V13.1a.39.39,0,0,1,.38-.38h1.56A.41.41,0,0,1,13.16,13.1ZM3.66,7.33H20.34a1.4,1.4,0,0,1,1.39,1.38V11.3a29.66,29.66,0,0,1-6.34,1.27,2.64,2.64,0,0,0-2.58-2.07H11.24a2.61,2.61,0,0,0-2.57,2.07A27.77,27.77,0,0,1,2.3,11.3V8.71A1.34,1.34,0,0,1,3.66,7.33ZM9.32,3.59a.78.78,0,0,1,.76-.75h3.84a.78.78,0,0,1,.76.75v1.5H9.32Zm11,1.5H17V3.59a3,3,0,0,0-3-3H10.08a3,3,0,0,0-3,3v1.5H3.66A3.64,3.64,0,0,0,0,8.71V19.78A3.64,3.64,0,0,0,3.66,23.4H20.34A3.64,3.64,0,0,0,24,19.78V8.71A3.64,3.64,0,0,0,20.34,5.09Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Kit;
