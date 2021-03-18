import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Meal({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12.49,7.4A4.61,4.61,0,1,0,17.1,12,4.6,4.6,0,0,0,12.49,7.4Zm-8.27-2c.42,0,.87.25.82.55V9.41A1.61,1.61,0,0,1,3.43,11h0v6.6c0,.29-.39.56-.88.56s-.91-.27-.91-.56V11H1.5A1.6,1.6,0,0,1,0,9.39V6c0-.3.43-.55.84-.55s.77.25.77.55v3a.54.54,0,0,0,.54.54h.71a.54.54,0,0,0,.54-.54V6C3.4,5.66,3.81,5.41,4.22,5.41Zm19.24,0A.55.55,0,0,1,24,6V17.74a.66.66,0,0,1-.73.56c-.42,0-.8-.26-.8-.56V12.18H21a.55.55,0,0,1-.54-.54V8.45A3,3,0,0,1,23.46,5.41Zm-11,0A6.59,6.59,0,1,1,5.93,12,6.6,6.6,0,0,1,12.51,5.41Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Meal;
