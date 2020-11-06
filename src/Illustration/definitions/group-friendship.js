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
import { Friends } from "./shared/humans";

function GroupFriendship({ width, height, viewBox, preserveAspectRatio }) {
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
        <Friends />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={282.25}
        height={202.24}
        transform="translate(22.37 7)"
        xlinkHref="#blob7"
      />
      <Use
        width={208.06}
        height={184.94}
        transform="translate(65.58 26.06)"
        xlinkHref="#friends"
      />
    </Svg>
  );
}

export default GroupFriendship;
