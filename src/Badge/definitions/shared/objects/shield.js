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

function Shield() {
  return (
    <Fragment>
      <Symbol
        id="shield-achieved"
        data-name="Shield Achieved"
        viewBox="0 0 58.15 64"
      >
        <Path
          d="M56.55 6.07C49.52 2.32 39.81 0 29.07 0 18.59 0 8.61 2.45 1.64 6l-.13.07A2.85 2.85 0 000 8.59v32.24a2.8 2.8 0 001.15 2.24l25.77 20.12a3.11 3.11 0 001.79.79h.68a3.11 3.11 0 001.78-.79l25.68-20a2.84 2.84 0 001.3-2.34V8.59a2.84 2.84 0 00-1.6-2.52z"
          fill="#f99757"
          fillRule="evenodd"
        />
        <Path
          fill="#f86608"
          fillRule="evenodd"
          d="M29.05 57.41L16.7 47.78l35.39-33.4v25.05L29.05 57.41zM6.06 10.3a44.2 44.2 0 019.33-3.12 62.56 62.56 0 0113.68-1.47 62.65 62.65 0 0113.69 1.47 47.71 47.71 0 016.41 1.89L12 44.13l-5.94-4.65z"
        />
      </Symbol>
      <Symbol
        id="shield-locked"
        data-name="Shield Locked"
        viewBox="0 0 58.15 64"
      >
        <Path
          d="M56.55 6.07C49.52 2.32 39.81 0 29.07 0 18.59 0 8.61 2.45 1.64 6l-.13.07A2.85 2.85 0 000 8.59v32.24a2.8 2.8 0 001.15 2.24l25.77 20.12a3.11 3.11 0 001.79.79h.68a3.11 3.11 0 001.78-.79l25.68-20a2.84 2.84 0 001.3-2.34V8.59a2.84 2.84 0 00-1.6-2.52z"
          fill="#E4E4E4"
          fillRule="evenodd"
        />
        <Path
          fill="#B3B5B8"
          fillRule="evenodd"
          d="M29.05 57.41L16.7 47.78l35.39-33.4v25.05L29.05 57.41zM6.06 10.3a44.2 44.2 0 019.33-3.12 62.56 62.56 0 0113.68-1.47 62.65 62.65 0 0113.69 1.47 47.71 47.71 0 016.41 1.89L12 44.13l-5.94-4.65z"
        />
      </Symbol>
    </Fragment>
  );
}

export default Shield;
