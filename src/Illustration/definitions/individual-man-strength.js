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

function IndividualManStrength({
  width,
  height,
  viewBox,
  preserveAspectRatio
}) {
  return (
    <Svg
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 327}
      height={height || 218}
      viewBox={viewBox || "0 0 327 218"}
    >
      <Defs>
        <Backdrop />
        <Blobs />
        <ManStrength />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={327}
        height={169}
        transform="translate(0 8)"
        xlinkHref="#blob2"
      />
      <Use
        width={104.49}
        height={182.65}
        transform="translate(114 17)"
        xlinkHref="#man_strength"
      />
    </Svg>
  );
}

export default IndividualManStrength;
