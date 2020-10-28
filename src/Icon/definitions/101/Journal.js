import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Journal({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M23,3.91H20.75V3.19a1.75,1.75,0,0,0-2.18-1.7L12,3.13,5.43,1.49a1.75,1.75,0,0,0-2.18,1.7v.72H1a1,1,0,0,0-1,1v14.5a2.51,2.51,0,0,0,2.5,2.5h19a2.51,2.51,0,0,0,2.5-2.5V4.91A1,1,0,0,0,23,3.91Zm-20.5,16a.5.5,0,0,1-.5-.5V5.91H3.25V17.34A2.76,2.76,0,0,0,5,19.91Zm8.75,0L11,19.88,5.7,18.56a1.25,1.25,0,0,1-1-1.22V3.19a.24.24,0,0,1,.1-.2A.26.26,0,0,1,5,2.94h.06l3.85,1,2.34.58ZM13,19.88l-.25.06V4.49l2.34-.58,3.85-1a.24.24,0,0,1,.21.05.24.24,0,0,1,.1.2V17.34a1.25,1.25,0,0,1-.95,1.22Zm9-.47a.5.5,0,0,1-.5.5H19a2.76,2.76,0,0,0,1.77-2.57V5.91H22ZM18.73,9.22a.76.76,0,0,1-.55.91l-4,1-.18,0a.75.75,0,0,1-.18-1.48l4-1A.75.75,0,0,1,18.73,9.22Zm0-2.61a.76.76,0,0,1-.55.91l-4,1-.18,0a.75.75,0,0,1-.18-1.48l4-1A.75.75,0,0,1,18.73,6.61Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Journal;
