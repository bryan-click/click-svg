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

import { Backdrop, Blobs, ECigarette } from "./shared";

function Vaping({ width, height, viewBox, preserveAspectRatio }) {
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
        <ECigarette />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={315}
        height={199.05}
        transform="translate(6 9.48)"
        xlinkHref="#blob6"
      />
      <Use
        width={196.92}
        height={114.68}
        transform="translate(65.04 51.66)"
        xlinkHref="#e-cigarette"
      />
    </Svg>
  );
}

export default Vaping;
