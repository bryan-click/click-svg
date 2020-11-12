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

import { Backdrop, Blobs, StarArch, Trophy, Confetti } from "./shared";

function MilestonePostQuitWeek1({
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
        <Confetti />
        <Trophy />
        <StarArch />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={183.04}
        height={176.8}
        transform="translate(71.98 20.6)"
        xlinkHref="#blob7"
      />
      <Use
        width={180}
        height={180}
        transform="translate(73.5 19.99)"
        xlinkHref="#confetti"
      />
      <Use
        width={100.38}
        height={120}
        transform="translate(113.31 49)"
        xlinkHref="#trophy"
      />
      <Use
        width={34.8}
        height={12.7}
        transform="translate(146.1 64.87)"
        xlinkHref="#star-arch-1"
      />
    </Svg>
  );
}

export default MilestonePostQuitWeek1;
