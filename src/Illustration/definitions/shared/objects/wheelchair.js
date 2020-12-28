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

function Wheelchair() {
  return (
    <Fragment>
      <Symbol id="wheelchair" data-name="Wheelchair" viewBox="0 0 117.98 70.76">
        <Path
          d="M1.5 63.76a1.5 1.5 0 000 3h21.2a1.5 1.5 0 000-3zM79.75 0a10.36 10.36 0 00-2 .2L40.1 7.87a10 10 0 00-7.34 6.2 6.59 6.59 0 00-.61 1.64l-10 45.05h5.08l8-36h50.52a4 4 0 004-4V10a10 10 0 00-10-10z"
          fill="#ffc09a"
          fillRule="evenodd"
        />
        <Ellipse cx={23.19} cy={62.76} rx={8.07} ry={8} fill="#fd9757" />
        <Path
          d="M83.7.57A34.51 34.51 0 10118 35.08 34.4 34.4 0 0083.7.57zm1.7 39l16.67 16.78a27.77 27.77 0 01-16.68 6.87zm-3.4 0v23.61a27.71 27.71 0 01-16.67-6.87zm22.63 14.22l-16.87-17h23.86a28.17 28.17 0 01-6.99 16.96zm-48.85-17h23.85l-16.87 17a28.1 28.1 0 01-6.98-17.02zm6.83-20.18L79.3 33.39H55.78a28.14 28.14 0 016.83-16.8zm49 16.8H88.1l16.65-16.76a28.14 28.14 0 016.87 16.74zM102.22 14L85.4 31V7a27.76 27.76 0 0116.82 7zM82 7v24L65.2 14.06l-.06-.06A27.83 27.83 0 0182 7z"
          fill="#fd9757"
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default Wheelchair;
