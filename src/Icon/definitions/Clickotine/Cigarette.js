import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Cigarette({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M23.74,5.79a.62.62,0,0,1-.55.69,1.18,1.18,0,0,0-1.13,1.2,1.53,1.53,0,0,0,.42.62l.32.33a3.22,3.22,0,0,1,1,1.65,2.34,2.34,0,0,1-1.21,2.25.65.65,0,0,1-.89-.13.61.61,0,0,1,.13-.87c.6-.45.77-.77.72-1a1.94,1.94,0,0,0-.54-.83l-.45-.47-.05,0a2.41,2.41,0,0,1-.75-1.31A2.4,2.4,0,0,1,23,5.24.64.64,0,0,1,23.74,5.79Zm-5.3,9.73H9.09v2h9.35Zm4.93-1.13c.32,0,.59.07.63.38V18.2c0,.34-.29.44-.63.44s-.6-.06-.63-.38V14.84C22.74,14.49,23,14.39,23.37,14.39Zm-2.15,0c.33,0,.6.07.63.38V18.2c0,.34-.29.44-.64.44s-.59-.06-.62-.38V14.84C20.59,14.49,20.87,14.39,21.22,14.39Zm-2-.12a.5.5,0,0,1,.51.5v3.49a.5.5,0,0,1-.51.5H0V14.27Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Cigarette;
