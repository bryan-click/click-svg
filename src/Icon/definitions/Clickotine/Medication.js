import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Medication({
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
        d="M13.67,5a.67.67,0,1,0,.66.67A.67.67,0,0,0,13.67,5ZM10.33,5a.67.67,0,1,0,.67.67A.67.67,0,0,0,10.33,5Zm3.34,2.34A.66.66,0,0,0,13,8a.67.67,0,1,0,1.33,0A.66.66,0,0,0,13.67,7.34Zm-3.34,0A.66.66,0,0,0,9.67,8a.67.67,0,1,0,.66-.66Zm4-3.68A1.33,1.33,0,0,1,15.66,5V8.74a1.33,1.33,0,0,1-1.33,1.34H9.69A1.33,1.33,0,0,1,8.36,8.74V5A1.33,1.33,0,0,1,9.69,3.66Zm2.78-1.94H6.91a.5.5,0,0,0-.5.5v9.31l.5.49h10.2a.5.5,0,0,0,.5-.49V2.22A.5.5,0,0,0,17.11,1.72ZM8.56,15.49,5.7,18.42l3.2,3.19a2,2,0,0,0,2.94.13l0,0a2.08,2.08,0,0,0-.1-3Zm11.79,2.85a2,2,0,1,0,2,2A2,2,0,0,0,20.35,18.34ZM18,0a1.38,1.38,0,0,1,1.37,1.37v11A1.37,1.37,0,0,1,18,13.74H8.65L13,18a3.35,3.35,0,0,1,0,4.77l0,0a3.49,3.49,0,0,1-4.84,0L1,15.8A3.35,3.35,0,0,1,1,11a3.46,3.46,0,0,1,3.69-.76V1.37A1.38,1.38,0,0,1,6.07,0Zm2.4,16.67a3.67,3.67,0,1,1-3.66,3.67A3.66,3.66,0,0,1,20.35,16.67Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Medication;
