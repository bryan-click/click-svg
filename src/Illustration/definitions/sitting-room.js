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

import { Backdrop, Blobs, Chair, Plant1, Wallshelf } from "./shared";

function SittingRoom({ width, height, viewBox, preserveAspectRatio }) {
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
        <Chair />
        <Plant1 />
        <Wallshelf />
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
        transform="translate(177 41)"
        xlinkHref="#wallshelf"
      />
      <Use
        width={33.08}
        height={30}
        transform="translate(144 4)"
        xlinkHref="#clock"
      />
      <Use
        width={94.78}
        height={71}
        transform="translate(28 118)"
        xlinkHref="#chair"
      />
      <Use
        width={49.58}
        height={100}
        transform="translate(247 100)"
        xlinkHref="#plant1"
      />
    </Svg>
  );
}

export default SittingRoom;
