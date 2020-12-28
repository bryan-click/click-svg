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

import { ManCelebrate, WomanCelebrate } from "./shared/humans";

function GroupCelebrateAlt({ width, height, viewBox, preserveAspectRatio }) {
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
        <ManCelebrate />
        <WomanCelebrate />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={282}
        height={205}
        transform="translate(16 6)"
        xlinkHref="#blob4"
      />
      <Use
        width={127.58}
        height={179.38}
        transform="translate(40 23)"
        xlinkHref="#man-celebrate-alt"
      />
      <Use
        width={104.75}
        height={181.04}
        transform="translate(171 23)"
        xlinkHref="#woman-celebrate-alt"
      />
    </Svg>
  );
}

export default GroupCelebrateAlt;
