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

import { ManFinance } from "./shared/humans";

function IndividualManFinance({ width, height, viewBox, preserveAspectRatio }) {
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
        <ManFinance />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={255}
        height={212}
        transform="translate(36 3)"
        xlinkHref="#blob3"
      />
      <Use
        width={103}
        height={183}
        transform="translate(114 17)"
        xlinkHref="#man_cash"
      />
    </Svg>
  );
}

export default IndividualManFinance;
