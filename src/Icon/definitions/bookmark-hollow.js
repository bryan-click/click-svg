import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function BookmarkHollow({
  color,
  width,
  height,
  viewBox,
  preserveAspectRatio
}) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12.85,14.75l5.3,5.2V2.49H5.87V20l5.31-5.2a1.15,1.15,0,0,1,.82-.36A1.27,1.27,0,0,1,12.85,14.75Zm5.65,8.83L12,17.21,5.53,23.58a1.23,1.23,0,0,1-1.3.25,1.15,1.15,0,0,1-.72-1.09V1.25A1.17,1.17,0,0,1,4.68.08H19.32a1.17,1.17,0,0,1,1.17,1.17V22.74a1.15,1.15,0,0,1-.72,1.09A1.21,1.21,0,0,1,18.5,23.58Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default BookmarkHollow;
