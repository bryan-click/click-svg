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

function Star() {
  return (
    <Fragment>
      <Symbol id="star" data-name="Star" viewBox="0 0 9.53 8.69">
        <Path
          d="M7.45 8.69a.45.45 0 01-.2 0L4.77 7.4 2.28 8.65a.45.45 0 01-.45 0 .43.43 0 01-.17-.4l.48-2.64-2-1.87A.39.39 0 010 3.29.43.43 0 01.36 3l2.78-.38L4.38.23A.44.44 0 014.77 0a.43.43 0 01.38.23l1.24 2.4L9.17 3a.43.43 0 01.34.28.39.39 0 01-.11.42l-2 1.87.46 2.63a.28.28 0 010 .09.41.41 0 01-.42.4z"
          fill="#ffc19b"
        />
      </Symbol>
      <Symbol id="star-active" data-name="Star" viewBox="0 0 9.53 8.69">
        <Path
          d="M7.45 8.69a.45.45 0 01-.2 0L4.77 7.4 2.28 8.65a.45.45 0 01-.45 0 .43.43 0 01-.17-.4l.48-2.64-2-1.87A.39.39 0 010 3.29.43.43 0 01.36 3l2.78-.38L4.38.23A.44.44 0 014.77 0a.43.43 0 01.38.23l1.24 2.4L9.17 3a.43.43 0 01.34.28.39.39 0 01-.11.42l-2 1.87.46 2.63a.28.28 0 010 .09.41.41 0 01-.42.4z"
          fill="#ffffff"
        />
      </Symbol>
    </Fragment>
  );
}

export default Star;
