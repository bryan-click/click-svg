import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Tools({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M22.06,6.67H1.94a1,1,0,0,0-.85,1V23.08a1,1,0,0,0,1,1H21.94a1,1,0,0,0,.81-.44h0l.05-.07h0a1,1,0,0,0,.11-.46V7.65A1,1,0,0,0,22.06,6.67ZM3,22.09V8.64H21V22.09ZM21.36,4.29c0,.51-.22.92-.49.92H3.13c-.27,0-.48-.41-.48-.92h0c0-.51.21-.93.48-.93H20.87c.27,0,.49.42.49.93ZM19.8,1.06c0,.51-.22.92-.49.92H4.69c-.27,0-.48-.41-.48-.92h0c0-.51.21-.93.48-.93H19.31c.27,0,.49.42.49.93Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Tools;
