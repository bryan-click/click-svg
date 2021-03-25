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
        id="ribbon-achieved"
        data-name="Ribbon Achieved"
        viewBox="0 0 43.02 64"
      >
        <G fillRule="evenodd">
          <Path
            d="M43 22.08C43 9.89 33.39 0 21.51 0S0 9.89 0 22.08a22.24 22.24 0 008.6 17.66v21.5a2.77 2.77 0 001.66 2.55 2.63 2.63 0 002.93-.6l8.32-8.53 8.32 8.52a2.65 2.65 0 002.93.59 2.76 2.76 0 001.65-2.55V39.75A22.24 22.24 0 0043 22.08z"
            fill="#fd9757"
          />
          <Path
            d="M21.51 5.52a15.82 15.82 0 0111.41 4.85 16.86 16.86 0 010 23.42 15.85 15.85 0 01-22.82 0 16.89 16.89 0 010-23.42 15.82 15.82 0 0111.41-4.85zM14 42.77a21.09 21.09 0 0015.06 0v11.8l-5.66-5.76a2.65 2.65 0 00-3.8 0L14 54.58z"
            fill="#ff6607"
          />
        </G>
      </Symbol>
      <Symbol
        id="ribbon-locked"
        data-name="Ribbon Achieved"
        viewBox="0 0 43.02 64"
      >
        <G fillRule="evenodd">
          <Path
            d="M43 22.08C43 9.89 33.39 0 21.51 0S0 9.89 0 22.08a22.24 22.24 0 008.6 17.66v21.5a2.77 2.77 0 001.66 2.55 2.63 2.63 0 002.93-.6l8.32-8.53 8.32 8.52a2.65 2.65 0 002.93.59 2.76 2.76 0 001.65-2.55V39.75A22.24 22.24 0 0043 22.08z"
            fill="#E4E4E4"
          />
          <Path
            d="M21.51 5.52a15.82 15.82 0 0111.41 4.85 16.86 16.86 0 010 23.42 15.85 15.85 0 01-22.82 0 16.89 16.89 0 010-23.42 15.82 15.82 0 0111.41-4.85zM14 42.77a21.09 21.09 0 0015.06 0v11.8l-5.66-5.76a2.65 2.65 0 00-3.8 0L14 54.58z"
            fill="#B3B5B8"
          />
        </G>
      </Symbol>
    </Fragment>
  );
}

export default Ribbon;
