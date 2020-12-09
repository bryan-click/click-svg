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

import { Backdrop, Blobs, Chair, Plant2, ThoughtBubbles } from "./shared";

import { NonBinarySitting } from "./shared/humans";

function IndividualNonBinaryDatetime({
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
        <Plant2 />
        <ThoughtBubbles />
        <NonBinarySitting />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={232.17}
        height={185.29}
        transform="translate(40 16)"
        xlinkHref="#blob4"
      />
      <Use
        width={50}
        height={130}
        transform="translate(35 72)"
        xlinkHref="#plant2"
      />
      <Use
        width={121.52}
        height={62.38}
        transform="translate(85 6)"
        xlinkHref="#expression-date"
      />
      <Use
        width={94.78}
        height={71}
        transform="matrix(-1.49 0 0 1.5 294 96)"
        xlinkHref="#chair"
      />
      <Use
        width={127.92}
        height={175.45}
        transform="translate(140.69 38)"
        xlinkHref="#nonbinary-sitting"
      />
    </Svg>
  );
}

export default IndividualNonBinaryDatetime;
