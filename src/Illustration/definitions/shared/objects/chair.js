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

function Chair() {
  return (
    <Fragment>
      <Symbol id="chair" data-name="Chair" viewBox="0 0 94.78 71">
        <G data-name="Chair" fillRule="evenodd">
          <Path
            fill="#fd9757"
            d="M15.48 56.35L9.26 71H6.43l3.75-15.36 5.3.71z"
          />
          <Path
            data-name="Leg"
            fill="#fd9757"
            d="M45.54 56.35L39.32 71h-2.83l3.75-15.36 5.3.71zM94.78 71h-2.82l-6.22-14.65 5.3-.71L94.78 71zM62.98 71h-2.82l-6.22-14.65 5.3-.71L62.98 71z"
          />
          <Path
            d="M91.78 20.54V56L55 56.08 48.92 21zm-3 3.46l-36.87.4L57 54l31.76-.07z"
            fill="#fd9757"
          />
          <Path
            data-name="Shadow"
            fill="#ffb78a"
            d="M50.23 0l12.58 57h-51.1L0 0h50.23z"
          />
          <Path fill="#ffe9db" d="M50.29 0l8.87 37H20.91L12.04 0h38.25z" />
          <Path
            data-name="Cushion"
            fill="#ffe9db"
            d="M91.78 57h-45V37h45v20z"
          />
          <Path
            data-name="Arm"
            d="M46.78 21.54V57L10 57.08 3.92 22zm-3 3.46l-36.87.4L12 55l31.76-.07z"
            fill="#fd9757"
          />
        </G>
      </Symbol>
    </Fragment>
  );
}

export default Chair;
