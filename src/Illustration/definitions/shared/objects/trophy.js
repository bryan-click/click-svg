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

function Plant3() {
  return (
    <Fragment>
      <Symbol id="plant3" data-name="Plant 3" viewBox="0 0 51.19 132">
        <Path
          d="M25.6 103.73C11.12 103.73 0 94.23 0 77.2 0 41.34 16.34 0 25.6 0s25.59 41.34 25.59 77.2c0 17.03-11.11 26.53-25.59 26.53z"
          fill="#ffcbab"
          fillRule="evenodd"
        />
        <Path
          fill="#ffe9db"
          d="M37.85 84.2l-2.82-2.83-7.43 7.43V76.27l.15-.16-.15-.15v-9.79l6.89-6.9-2.83-2.82-4.06 4.06V49.87h-4v14.64l-.16.15.16.16v7.14l-6.09-6.08-2.82 2.82 8.91 8.92V92.8l-.83.83.83.82V132h4V94.45L37.85 84.2z"
        />
      </Symbol>
    </Fragment>
  );
}

export default Plant3;
