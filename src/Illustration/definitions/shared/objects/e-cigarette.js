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

function ECigarette() {
  return (
    <Fragment>
      <Symbol
        id="e-cigarette"
        data-name="E-Cigarette"
        viewBox="0 0 196.92 114.68"
      >
        <Path
          d="M187.44.58l8.74 18.73a1 1 0 01-.48 1.33l-24.78 11.55 1.73 3.71a4.46 4.46 0 01-2.22 5.9l-151 70.43a4.47 4.47 0 01-6-2.09l-13-28a4.45 4.45 0 012.22-5.9l151-70.43a4.44 4.44 0 015.94 2.09l1.73 3.71L186.12.09a1 1 0 011.32.49zM136.73 25.9L95.1 45.31l7.46 16 41.62-19.41z"
          fill="#ffc09a"
          fillRule="evenodd"
        />
        <Path
          d="M173.6 23.89q4.69.66 20.25-8c.4-.18 1 .2 1.26.84l1.63 3.73c.3.65.22 1.33-.17 1.51l-25.51 11.17 2.25 4.86a3.15 3.15 0 01-1.68 4Q15.21 115.32 14.91 114.68l-12-26a3 3 0 014.9-3.33c4.91 5.2 10.94 12 18.19 12.82q12.57 1.39 140.4-63.08a5.67 5.67 0 002.73-4.35l-7.81-18.51c-.32-.65 7.58 11 12.28 11.66zM70.87 57a8.76 8.76 0 11-3.46 9.5 8.77 8.77 0 013.46-9.5z"
          fill="#fd9757"
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default ECigarette;
