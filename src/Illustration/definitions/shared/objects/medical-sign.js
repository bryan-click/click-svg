import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, {
  G,
  Circle,
  Path,
  Use,
  Defs,
  Symbol,
  Ellipse,
  Rect
} from "react-native-svg";

function MedicalSign() {
  return (
    <Fragment>
      <Symbol id="medical-sign" data-name="Medical Sign" viewBox="0 0 53 48">
        <Circle cx={29} cy={24} r={24} fill="#ffa66f" />
        <Circle cx={24} cy={24} r={24} fill="#ffc09a" />
        <Path
          d="M28 8a2 2 0 012 2v9h9a2 2 0 012 2v6a2 2 0 01-2 2h-9v9a2 2 0 01-2 2h-6a2 2 0 01-2-2v-9h-9a2 2 0 01-2-2v-6a2 2 0 012-2h9v-9a2 2 0 012-2z"
          fill="#fff1e8"
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default MedicalSign;
