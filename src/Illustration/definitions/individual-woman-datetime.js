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

import { Backdrop, Blobs, Calendar } from "./shared";

import { WomanPointing } from "./shared/humans";

function IndividualWomanDatetime({
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
        <Calendar />
        <WomanPointing />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={282}
        height={205}
        transform="translate(22 6)"
        xlinkHref="#blob4"
      />
      <Use
        width={64}
        height={58}
        transform="translate(90 20)"
        xlinkHref="#calendar"
      />
      <Use
        width={145.63}
        height={176.75}
        transform="translate(90 20)"
        xlinkHref="#woman_pointing"
      />
    </Svg>
  );
}

export default IndividualWomanDatetime;
