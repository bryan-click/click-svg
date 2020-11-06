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

import { Backdrop, Blobs, Plant2 } from "./shared";

import {
  WomanHealthworkerStanding,
  NonBinaryHealthworkerClipboard
} from "./shared/humans";

function GroupClinic({ width, height, viewBox, preserveAspectRatio }) {
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
        <Plant2 />
        <WomanHealthworkerStanding />
        <NonBinaryHealthworkerClipboard />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={282}
        height={205}
        transform="translate(22.5 7)"
        xlinkHref="#blob4"
      />
      <Use
        width={50}
        height={130}
        transform="translate(37 59)"
        xlinkHref="#plant2"
      />
      <Use
        width={104.36}
        height={170.31}
        transform="translate(59.53 39.69)"
        xlinkHref="#woman-healthworker-standing"
      />
      <Use
        width={87.63}
        height={177.35}
        transform="translate(173.37 32.65)"
        xlinkHref="#nonbinary-healthworker-clipboard"
      />
    </Svg>
  );
}

export default GroupClinic;
