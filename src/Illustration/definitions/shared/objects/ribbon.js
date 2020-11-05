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

function Ribbon() {
  return (
    <Fragment>
      <Symbol
        id="ribbon-generic"
        data-name="Ribbon Generic"
        viewBox="0 0 81.08 120.61"
      >
        <Path
          d="M81.08 41.61C81.08 18.63 62.93 0 40.54 0S0 18.63 0 41.61A41.93 41.93 0 0016.21 74.9v40.51a5.2 5.2 0 003.12 4.8 4.92 4.92 0 001.94.4 5 5 0 003.59-1.52L40.53 103l15.68 16a5 5 0 005.52 1.12 5.19 5.19 0 003.12-4.8V74.91a41.93 41.93 0 0016.23-33.3z"
          fill="#fd9757"
          fillRule="evenodd"
        />
        <Path
          d="M40.54 10.4A29.85 29.85 0 0162 19.54a31.81 31.81 0 010 44.14 29.86 29.86 0 01-43 0 31.79 31.79 0 010-44.14 29.83 29.83 0 0121.54-9.14zm-14.2 70.2a39.81 39.81 0 0028.38 0v22.23L44.1 92a5 5 0 00-7.16 0l-10.6 10.87z"
          fill="#ff6607"
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default Ribbon;
