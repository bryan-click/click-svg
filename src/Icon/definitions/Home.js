import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Home({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M23.68,11.68,12.76.87A1.06,1.06,0,0,0,12,.56a1.07,1.07,0,0,0-.76.31L.32,11.68a1.05,1.05,0,0,0,0,1.5,1.08,1.08,0,0,0,1.51,0l.53-.52v9.72a1.06,1.06,0,0,0,1.07,1.06H8.57a1.09,1.09,0,0,0,.76-.31,1.07,1.07,0,0,0,.31-.75v-7h4.72v7a1.07,1.07,0,0,0,1.07,1.06H20.8a1.07,1.07,0,0,0,.84-1V12.66l.53.52a1.08,1.08,0,0,0,1.51,0A1.05,1.05,0,0,0,23.68,11.68Zm-4.18-.94V21.31h-3v-7h0a1.06,1.06,0,0,0-1.07-1.06H8.57A1.07,1.07,0,0,0,7.5,14.31v7h-3V10.73a.88.88,0,0,0,0-.17L12,3.12l7.52,7.43a.62.62,0,0,0,0,.19Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Home;
