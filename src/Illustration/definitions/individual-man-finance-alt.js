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

function IndividualManFinanceAlt({
  alt,
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
        <ManFinance />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={282.25}
        height={202.24}
        transform="translate(22.37 7.88)"
        xlinkHref="#blob7"
      />
      <Use
        width={103}
        height={183}
        transform="translate(111.88 17.68)"
        xlinkHref="#man_cash_alt"
      />
    </Svg>
  );
}

export default IndividualManFinanceAlt;
