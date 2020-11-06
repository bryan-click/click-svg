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

import { ManDevice } from "./shared/humans";

function IndividualManDevice({ width, height, viewBox, preserveAspectRatio }) {
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
        <ManDevice />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={282}
        height={205}
        transform="translate(22 6)"
        xlinkHref="#blob3"
      />
      <Use
        width={145.63}
        height={176.75}
        transform="translate(90 20)"
        xlinkHref="#man_device"
      />
    </Svg>
  );
}

export default IndividualManDevice;
