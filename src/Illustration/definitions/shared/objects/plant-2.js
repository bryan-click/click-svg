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

function Plant2() {
  return (
    <Fragment>
      <Symbol id="plant2" data-name="Plant 2" viewBox="0 0 50 130">
        <Path
          d="M25.72 103Q30.24 83.78 35 64.27 40.91 39.9 47 16a332.83 332.83 0 00-19.35 61.32A440.27 440.27 0 0024 0c.39 32.1.37 66.35.29 89C19.32 54.32 7 54 7 54c8.53 6.87 17.29 35 15 65 .42-5.45 2.48-10.64 3.72-16z"
          fill="#ffd3b8"
          fillRule="evenodd"
        />
        <Path
          d="M36.6 130H12.88c-10.59-.42-16.47-14.22-10.48-24.17L7.72 97h34.57l5.31 8.83c6 10 .11 23.75-10.47 24.16h-.53"
          fill="#ffe9db"
          fillRule="evenodd"
        />
        <Path d="M0 114.4h50v7.2H0zM1 105.4h47v7.2H1z" fill="#ffc099" />
      </Symbol>
    </Fragment>
  );
}

export default Plant2;
