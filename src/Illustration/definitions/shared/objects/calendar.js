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

function Calendar() {
  return (
    <Fragment>
      <Symbol id="calendar" data-name="Calendar" viewBox="0 0 63.47 57.9">
        <Path
          d="M94.81 0a2.35 2.35 0 00-2.23 2.44V4.8h-8.15a2.2 2.2 0 00-1.6.71 2.47 2.47 0 00-.66 1.71v48.27a2.34 2.34 0 002.26 2.41h58.93a2.35 2.35 0 002.27-2.41V7.22a2.52 2.52 0 00-.63-1.71 2.24 2.24 0 00-1.61-.71h-7.92V2.44a2.56 2.56 0 00-.7-1.74 2.18 2.18 0 00-1.63-.7 2.36 2.36 0 00-2.24 2.44V4.8H97.11V2.44A2.56 2.56 0 0096.44.7a2.18 2.18 0 00-1.63-.7z"
          fill="#f8b890"
        />
        <Path
          data-name="Path"
          d="M88.21 9.63h4.3v2.42a2.49 2.49 0 001 2.22 1.94 1.94 0 002.23 0 2.51 2.51 0 001-2.22V9.63h34.38v2.42a2.49 2.49 0 001.06 2.14 2 2 0 002.17 0 2.5 2.5 0 001.07-2.14V9.63h4.29v9.66h-51.5zM88.21 24.13h51.56V53.08H88.21V24.13z"
          fill="#fee7d9"
        />
      </Symbol>
    </Fragment>
  );
}

export default Calendar;
