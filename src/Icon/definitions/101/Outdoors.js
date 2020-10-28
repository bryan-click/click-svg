import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Outdoors({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M23.25,21.62h-1.5V20.38H23a1,1,0,0,0,0-2h-.28a1.15,1.15,0,0,0,0-.26v-2.5a2,2,0,0,0-2-2h-7.5a2,2,0,0,0-2,2v2.5a1.15,1.15,0,0,0,0,.26H11a1,1,0,0,0,0,2h1.25v1.24H6.75V18.77C9.22,18.16,11,14.54,11,9.88c0-5.14-2.15-9-5-9s-5,3.86-5,9c0,4.66,1.78,8.28,4.25,8.89v2.85H.75a.76.76,0,0,0-.75.76.75.75,0,0,0,.75.74h22.5a.75.75,0,0,0,.75-.74A.76.76,0,0,0,23.25,21.62ZM3,9.88c0-4,1.58-7,3-7s3,3,3,7c0,3.3-1.08,5.91-2.25,6.73V12.38a.75.75,0,1,0-1.5,0v4.23C4.08,15.79,3,13.18,3,9.88Zm9.75,8.24v-2.5a.5.5,0,0,1,.5-.5h7.5a.5.5,0,0,1,.5.5v2.5a.47.47,0,0,1-.08.26H12.83A.47.47,0,0,1,12.75,18.12Zm1,2.26h6.5v1.24h-6.5Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Outdoors;
