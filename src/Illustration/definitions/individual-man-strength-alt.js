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

import { Backdrop, Blobs } from "./shared";

import { ManStrength } from "./shared/humans";

function IndividualManStrengthAlt({
  width,
  height,
  viewBox,
  preserveAspectRatio
}) {
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
        <ManStrength />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={293}
        height={184}
        transform="translate(17 17)"
        xlinkHref="#blob1"
      />
      <Use
        width={104.49}
        height={182.65}
        transform="translate(111.26 17.68)"
        xlinkHref="#man_strength_alt"
      />
    </Svg>
  );
}

export default IndividualManStrengthAlt;
