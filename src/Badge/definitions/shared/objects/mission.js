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

function Mission() {
  return (
    <Fragment>
      <Symbol
        id="mission-locked"
        data-name="Mission Badge Locked"
        viewBox="0 0 56.77 64"
      >
        <Path
          d="M25.72 1.65v29.23c0 .86 1.1 1.7 2.4 1.65s2.4-.72 2.4-1.65V1.65c0-.86-1.11-1.65-2.4-1.65s-2.4.73-2.4 1.65z"
          fill="#e4e4e4"
          fillRule="evenodd"
        />
        <Path
          d="M28.8 27.87l27.85 35.27a.53.53 0 01-.09.75.55.55 0 01-.33.11H.53a.53.53 0 01-.53-.53.55.55 0 01.11-.33L28 27.87a.54.54 0 01.75-.09.38.38 0 01.05.09z"
          fill="#e4e4e4"
          fillRule="evenodd"
        />
        <Path
          d="M51.16 2.67H28a2.26 2.26 0 00-2.29 2.25v17.9A2.27 2.27 0 0028 25.07h23.38a2.25 2.25 0 001.79-3.31l-4.32-7.89L53.17 6a2.25 2.25 0 00-2.01-3.33zM28.12 34.67l-20 25.06h40l-20-25.06z"
          fill="#b3b5b8"
          fillRule="evenodd"
        />
      </Symbol>
      <Symbol
        id="mission-achieved"
        data-name="Mission Achieved"
        viewBox="0 0 56.77 64"
      >
        <Path
          d="M25.72 1.65v29.23c0 .86 1.1 1.7 2.4 1.65s2.4-.72 2.4-1.65V1.65c0-.86-1.11-1.65-2.4-1.65s-2.4.73-2.4 1.65z"
          fill="#f99757"
          fillRule="evenodd"
        />
        <Path
          d="M28.8 27.87l27.85 35.27a.53.53 0 01-.09.75.55.55 0 01-.33.11H.53a.53.53 0 01-.53-.53.55.55 0 01.11-.33L28 27.87a.54.54 0 01.75-.09.38.38 0 01.05.09z"
          fill="#f99757"
          fillRule="evenodd"
        />
        <Path
          d="M51.16 2.67H28a2.26 2.26 0 00-2.29 2.25v17.9A2.27 2.27 0 0028 25.07h23.38a2.25 2.25 0 001.79-3.31l-4.32-7.89L53.17 6a2.25 2.25 0 00-2.01-3.33zM28.12 34.67l-20 25.06h40l-20-25.06z"
          fill="#f86608"
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default Mission;
