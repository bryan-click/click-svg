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
          d="M12.64 0a2.35 2.35 0 00-2.22 2.44V4.8H2.27a2.24 2.24 0 00-1.61.71A2.52 2.52 0 000 7.22v48.27a2.35 2.35 0 002.27 2.41H61.2a2.34 2.34 0 002.26-2.41V7.22a2.47 2.47 0 00-.66-1.71 2.2 2.2 0 00-1.6-.71h-7.93V2.44A2.5 2.5 0 0052.61.7 2.22 2.22 0 0051 0a2.34 2.34 0 00-2.23 2.44V4.8H14.94V2.44A2.5 2.5 0 0014.28.7a2.22 2.22 0 00-1.64-.7z"
          fill="#f8b890"
        />
        <Path
          d="M53.31 9.63v2.42a2.49 2.49 0 01-1.06 2.14 2 2 0 01-2.18 0A2.51 2.51 0 0149 12.05V9.63H14.63v2.42a2.49 2.49 0 01-1 2.22 1.94 1.94 0 01-2.23 0 2.51 2.51 0 01-1-2.22V9.63H6v9.66h51.61V9.63zM6.04 41.02v12.06h51.57V24.13H6.04v16.89z"
          fill="#fee7d9"
        />
      </Symbol>
    </Fragment>
  );
}

export default Calendar;
