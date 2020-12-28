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

function IndividualWomanDatetimeAlt({
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
        <WomanPointing />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={315}
        height={199.05}
        transform="translate(6 9.48)"
        xlinkHref="#blob6"
      />
      <Use
        width={63.46}
        height={57.9}
        transform="translate(169.41 18.84)"
        xlinkHref="#calendar"
      />
      <Use
        width={95.14}
        height={165.03}
        transform="translate(91 32.67)"
        xlinkHref="#woman-pointing-alt"
      />
    </Svg>
  );
}

export default IndividualWomanDatetimeAlt;
