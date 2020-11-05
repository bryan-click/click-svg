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

function Wreath() {
  return (
    <Fragment>
      <Symbol id="wreath" data-name="Wreath" viewBox="0 0 31 15.1">
        <Path
          data-name="Path"
          d="M15.5 0A1.49 1.49 0 0117 1.36V9.5a1.5 1.5 0 01-3 .14V1.5A1.5 1.5 0 0115.5 0zM30.25 5.37a1.51 1.51 0 01.62 1.92l-.07.13-4 6.93A1.5 1.5 0 0124.13 13l.07-.13 4-6.93a1.5 1.5 0 012.05-.57zM.75 5.37a1.5 1.5 0 012 .43l.08.12 4 6.93a1.5 1.5 0 01-2.52 1.62l-.08-.12L.2 7.42a1.5 1.5 0 01.55-2.05z"
          fill="#fd9f64"
        />
      </Symbol>
    </Fragment>
  );
}

export default Wreath;
