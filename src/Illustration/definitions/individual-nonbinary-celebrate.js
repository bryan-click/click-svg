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

import { NonBinaryCelebrate } from "./shared/humans";

function IndividualNonBinaryCelebrate({
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
        <NonBinaryCelebrate />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={232.17}
        height={185.29}
        transform="translate(40 16)"
        xlinkHref="#blob3"
      />
      <Use
        width={112.44}
        height={208.73}
        transform="translate(115 3)"
        xlinkHref="#nonbinary-celebrate"
      />
    </Svg>
  );
}

export default IndividualNonBinaryCelebrate;
