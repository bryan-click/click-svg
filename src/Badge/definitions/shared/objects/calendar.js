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
      <Symbol
        id="calendar-achieved"
        data-name="Calendar Achieved"
        viewBox="0 0 64 58.38"
      >
        <Path
          d="M12.75 0a2.36 2.36 0 00-2.24 2.46v2.38H2.29a2.22 2.22 0 00-1.62.72A2.49 2.49 0 000 7.28V56a2.37 2.37 0 002.29 2.42h59.42A2.37 2.37 0 0064 56V7.28a2.49 2.49 0 00-.67-1.72 2.22 2.22 0 00-1.62-.72h-8V2.46a2.49 2.49 0 00-.66-1.75A2.23 2.23 0 0051.4 0a2.36 2.36 0 00-2.25 2.46v2.38H15.07V2.46A2.53 2.53 0 0014.4.71 2.23 2.23 0 0012.75 0z"
          fill="#f99757"
          fillRule="evenodd"
        />
        <Path
          fill="#f86608"
          d="M53.76 9.71v2.45a2.5 2.5 0 01-1.07 2.15 2 2 0 01-2.19 0 2.5 2.5 0 01-1.07-2.15V9.71H14.76v2.45a2.53 2.53 0 01-1 2.23 2 2 0 01-2.25 0 2.53 2.53 0 01-1-2.23V9.71H6.1v9.74h52V9.71zM6.09 41.36v12.17h52V24.33h-52v17.03z"
        />
      </Symbol>
      <Symbol
        id="calendar-locked"
        data-name="Calendar Locked"
        viewBox="0 0 64 58.38"
      >
        <Path
          d="M12.75 0a2.36 2.36 0 00-2.24 2.46v2.38H2.29a2.22 2.22 0 00-1.62.72A2.49 2.49 0 000 7.28V56a2.37 2.37 0 002.29 2.42h59.42A2.37 2.37 0 0064 56V7.28a2.49 2.49 0 00-.67-1.72 2.22 2.22 0 00-1.62-.72h-8V2.46a2.49 2.49 0 00-.66-1.75A2.23 2.23 0 0051.4 0a2.36 2.36 0 00-2.25 2.46v2.38H15.07V2.46A2.53 2.53 0 0014.4.71 2.23 2.23 0 0012.75 0z"
          fill="#E4E4E4"
          fillRule="evenodd"
        />
        <Path
          fill="#B3B5B8"
          d="M53.76 9.71v2.45a2.5 2.5 0 01-1.07 2.15 2 2 0 01-2.19 0 2.5 2.5 0 01-1.07-2.15V9.71H14.76v2.45a2.53 2.53 0 01-1 2.23 2 2 0 01-2.25 0 2.53 2.53 0 01-1-2.23V9.71H6.1v9.74h52V9.71zM6.09 41.36v12.17h52V24.33h-52v17.03z"
        />
      </Symbol>
    </Fragment>
  );
}

export default Calendar;
