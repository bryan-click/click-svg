import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Admin({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M5.66,8.92H8.48v12.4H5.66Zm7.76,0v12.4H10.61V8.92ZM5.12,6.8l6.88-4,6.88,4ZM18.36,21.32H15.55V8.92h2.81Zm4.48,0H20.49V8.92h2.36a1,1,0,0,0,.91-.53,1.07,1.07,0,0,0-.39-1.45L12.53.7l0,0-.05,0,0,0h0L12.3.6h0l-.06,0h-.4l-.06,0h0l-.06,0h0l0,0-.05,0,0,0L.63,6.94A1.07,1.07,0,0,0,.24,8.39a1,1,0,0,0,.91.53H3.54v12.4H1.16a1.06,1.06,0,0,0,0,2.12H22.84a1.06,1.06,0,0,0,0-2.12Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Admin;
