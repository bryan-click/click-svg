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

import { Backdrop, Blobs, Chair, ThoughtBubbles } from "./shared";

import { NonBinarySitting } from "./shared/humans";

function IndividualNonBinaryThinking({
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
        <Chair />
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
        width={94.78}
        height={71}
        transform="matrix(-1.49, 0, 0, 1.49, 250.51, 96.26)"
        xlinkHref="#chair"
      />
      <Use
        width={127.92}
        height={175.45}
        transform="translate(85.08 38.32)"
        xlinkHref="#nonbinary-sitting"
      />
    </Svg>
  );
}

export default IndividualNonBinaryThinking;
