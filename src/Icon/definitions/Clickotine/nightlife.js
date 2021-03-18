import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Nightlife({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M17.13,5.32a3.21,3.21,0,0,0-2.66,1.07,7.21,7.21,0,0,0-1.11,1.42l-.58-.16a2.36,2.36,0,0,0-.87-.17,2,2,0,0,0-2.23,2v1.11l-.37,0H9.15c-1.17,0-2.33.09-2.77,1.09a8.83,8.83,0,0,0,.78,1.79,8.39,8.39,0,0,0,.9,1.28,4,4,0,0,0,.91.11h9.25c1.87,0,3.83-.9,3.83-3.16a3.83,3.83,0,0,0-2.19-3.2l-.14-.08,0-.17A3,3,0,0,0,17.13,5.32ZM8.33,3.4A8.5,8.5,0,0,0,6,9.42,3.91,3.91,0,0,1,7.85,9H8a3.61,3.61,0,0,1,3.59-3.23,3.47,3.47,0,0,1,1,.14,4.89,4.89,0,0,1,9.11,1.77,4.88,4.88,0,0,1-2.55,9H10.49a8.57,8.57,0,0,0,6,.79.71.71,0,0,1,.68,1.17A9.91,9.91,0,1,1,7.65,2.23.71.71,0,0,1,8.33,3.4Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Nightlife;
