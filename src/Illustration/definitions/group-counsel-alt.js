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

import { Backdrop, Blobs, Clock, OfficeChair, Wallshelf } from "./shared";
import { WomanHealthworkerSitting, ManSitting } from "./shared/humans";

function GroupCounselAlt({ width, height, viewBox, preserveAspectRatio }) {
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
        <Clock />
        <Wallshelf />
        <OfficeChair />
        <WomanHealthworkerSitting />
        <ManSitting />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={293}
        height={184}
        transform="translate(17 17)"
        xlinkHref="#blob1"
      />
      <Use
        width={100}
        height={42}
        transform="translate(177 42)"
        xlinkHref="#wallshelf"
      />
      <Use
        width={33.08}
        height={30}
        transform="translate(144 5)"
        xlinkHref="#clock"
      />
      <Use
        width={55.23}
        height={99.91}
        transform="translate(32 103)"
        xlinkHref="#office-chair"
      />
      <Use
        width={55.23}
        height={99.91}
        transform="matrix(-1 0 0 1 304 103)"
        xlinkHref="#office-chair"
      />
      <Use
        width={130.72}
        height={164.42}
        transform="translate(23 48)"
        xlinkHref="#woman-healthworker-sitting"
      />
      <Use
        width={120.96}
        height={161.78}
        transform="translate(189.04 51.23)"
        xlinkHref="#man-sitting-alt"
      />
    </Svg>
  );
}

export default GroupCounselAlt;
