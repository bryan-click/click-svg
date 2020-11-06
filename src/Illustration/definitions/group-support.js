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

import { Backdrop, Blobs, Plant3, LampPost } from "./shared";
import { ManSupport, NonBinarySupport } from "./shared/humans";

function GroupSupport({ width, height, viewBox, preserveAspectRatio }) {
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
        <ManSupport />
        <NonBinarySupport />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={282}
        height={205}
        transform="translate(22 7)"
        xlinkHref="#blob4"
      />
      <Use
        width={51.19}
        height={132}
        transform="translate(253 49)"
        xlinkHref="#plant3"
      />
      <Use
        width={19.21}
        height={159.98}
        transform="translate(22.4 10.25)"
        xlinkHref="#lamp-post"
      />
      <Use
        width={125.82}
        height={182.65}
        transform="translate(42 25)"
        xlinkHref="#man-support"
      />
      <Use
        width={104.66}
        height={182.94}
        transform="translate(161.74 24.81)"
        xlinkHref="#nonbinary-support"
      />
      <Use
        width={31}
        height={15.1}
        transform="translate(149.34 11.25)"
        xlinkHref="#graphic"
      />
    </Svg>
  );
}

export default GroupSupport;
