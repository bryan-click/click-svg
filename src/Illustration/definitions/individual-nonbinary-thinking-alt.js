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

import { Backdrop, Blobs, Wheelchair, ThoughtBubbles } from "./shared";

import { NonBinarySitting } from "./shared/humans";

function IndividualNonBinaryThinkingAlt({
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
        <Wheelchair />
        <ThoughtBubbles />
        <NonBinarySitting />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={282}
        height={205}
        transform="translate(22.5 6.5)"
        xlinkHref="#blob4"
      />
      <Use
        width={121.52}
        height={62.38}
        transform="translate(20 6.6)"
        xlinkHref="#expression-thinking"
      />
      <Use
        width={117.98}
        height={70.76}
        transform="translate(85.08 129.06) scale(1.23)"
        xlinkHref="#wheelchair"
      />
      <Use
        width={127.92}
        height={175.45}
        transform="translate(85.08 38.32)"
        xlinkHref="#nonbinary-sitting-alt"
      />
    </Svg>
  );
}

export default IndividualNonBinaryThinkingAlt;
