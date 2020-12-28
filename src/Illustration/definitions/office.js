import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, {
  G,
  Path,
  Use,
  Defs,
  Symbol,
  Ellipse,
  Rect
} from "react-native-svg";

import { Backdrop, Blobs, Chair, Plant2, MedicalSign } from "./shared";

function Office({ width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 327}
      height={width / 1.5 || 218}
      viewBox={viewBox || "0 0 327 218"}
    >
      <Defs>
        <Backdrop />
        <Blobs />
        <Chair />
        <Plant2 />
        <MedicalSign />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={327}
        height={169}
        transform="translate(0 24.5)"
        xlinkHref="#blob2"
      />
      <Use
        width={94.78}
        height={71}
        transform="translate(15.55 122.94)"
        xlinkHref="#chair"
      />
      <Use
        width={94.78}
        height={71}
        transform="matrix(-1 0 0 1 311.45 122.94)"
        xlinkHref="#chair"
      />
      <Use
        width={50}
        height={130}
        transform="translate(138 57.79)"
        xlinkHref="#plant2"
      />
      <Use
        width={53}
        height={48}
        transform="translate(244.5 24.06)"
        xlinkHref="#medical-sign"
      />
    </Svg>
  );
}

export default Office;
