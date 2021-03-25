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

function Locked() {
  return (
    <Fragment>
      <Symbol id="locked" data-name="Locked" viewBox="0 0 24 24">
        <Circle cx={12} cy={12} r={12} fill="#B3B5B8" />
        <Path
          d="M12.54,14.41v.78a.54.54,0,0,1-1.08,0v-.78a.86.86,0,0,1-.33-.67.87.87,0,0,1,1.73,0A.85.85,0,0,1,12.54,14.41ZM9.18,9.86a2.82,2.82,0,0,1,5.64,0h0v.75H9.18ZM7.89,11.68h8.23v5.25H7.89ZM17.2,17.4V11.14a.54.54,0,0,0-.42-.52H15.9V9.86h0a3.91,3.91,0,0,0-7.81,0v.75H7.35a.54.54,0,0,0-.54.48v6.26a.41.41,0,0,0,0,.11.54.54,0,0,0,.54.54h9.32a.54.54,0,0,0,.54-.54Z"
          fill="#FFF"
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default Locked;
