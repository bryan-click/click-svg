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

import { Backdrop, Blobs, Lungs, Sparkles } from "./shared";

function MilestoneLungRecovery({
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
        <Sparkles />
        <Lungs />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={282}
        height={205}
        transform="translate(22.5 6.5)"
        xlinkHref="#blob4"
      />
      <Use
        width={145.07}
        height={118.28}
        transform="translate(90.97 49.86)"
        xlinkHref="#lungs"
      />
      <Use
        width={132.75}
        height={120.94}
        transform="translate(102.13 53.53)"
        xlinkHref="#sparkles"
      />
    </Svg>
  );
}

export default MilestoneLungRecovery;
