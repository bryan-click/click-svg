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

import { Backdrop, Blobs, Table, ThoughtBubbles } from "./shared";

import { WomanHealthworkerStanding } from "./shared/humans";

function IndividualWomanHealthworkerQuitAids({
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
        <Table />
        <ThoughtBubbles />
        <WomanHealthworkerStanding />
      </Defs>
      <Use width={"100%"} height={"100%"} xlinkHref="#backdrop" />
      <Use
        width={315}
        height={199.05}
        transform="translate(6 9.48)"
        xlinkHref="#blob6"
      />
      <Use
        width={119.44}
        height={112.14}
        transform="translate(176 94)"
        xlinkHref="#table"
      />
      <Use
        data-name="Woman Healthworker"
        width={105.68}
        height={171.83}
        transform="translate(42 36)"
        xlinkHref="#woman-healthworker-standing"
      />
      <Use
        width={115.22}
        height={70.38}
        transform="translate(124 4)"
        xlinkHref="#expression-nrt"
      />
    </Svg>
  );
}

export default IndividualWomanHealthworkerQuitAids;
