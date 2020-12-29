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

function IntrospectiveDatetime({
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
        <Calendar />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={293}
        height={184}
        transform="translate(17 17)"
        xlinkHref="#blob1"
      />
      <Use
        width={169}
        height={155.33}
        transform="translate(79 31.33)"
        xlinkHref="#calendar-large"
      />
    </Svg>
  );
}

export default IntrospectiveDatetime;
