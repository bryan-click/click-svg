import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, {
  G,
  Path,
  Use,
  Defs,
  Symbol,
  Ellipse,
  Circle,
  Rect
} from "react-native-svg";

function Done() {
  return (
    <Fragment>
      <Symbol id="done" data-name="Done" viewBox="0 0 24 24">
        <Circle cx={12} cy={12} r={12} fill="#6DD400" />
        <Path
          d="M17.84 7.92a.53.53 0 00-.75 0L9.91 15l-3-3a.53.53 0 00-.75 0 .51.51 0 000 .74l3.37 3.31a.57.57 0 00.38.15.54.54 0 00.38-.15l7.54-7.41a.51.51 0 00.01-.72z"
          fill="#FFF"
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default Done;
