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

function Plant1() {
  return (
    <Fragment>
      <Symbol id="plant1" data-name="Plant 1" viewBox="0 0 49.58 100">
        <G data-name="Plant 1">
          <Ellipse cx={26} cy={12.5} rx={9} ry={12.5} fill="#fd9757" />
          <Ellipse
            data-name="Leaf"
            cx={9.5}
            cy={37}
            rx={8.25}
            ry={11.05}
            transform="rotate(-39.81 9.498 37.005)"
            fill="#fd9757"
          />
          <Path
            data-name="Leaf"
            d="M47.43 39.5L30.25 56.68c3.56 3.55 10.29 2.59 15-2.15S51 43.05 47.43 39.5z"
            fill="#fd9757"
            fillRule="evenodd"
          />
          <Path
            fill="#ffcbab"
            d="M44.5 48.48l-4.95-5.11L30 53.23V43.2l10.41-10.76-4.95-5.11L30 32.97V13h-7v30.95L12.63 33.23l-4.95 5.12L23 54.17v5.81l-6.28-6.49-4.95 5.12L23 70.21V78h7V63.46l14.5-14.98z"
          />
          <Path
            d="M31 100H21A14 14 0 017 86.09V73h38v13.09A14 14 0 0131 100"
            fill="#ffe9db"
            fillRule="evenodd"
          />
          <Path fill="#ffcbab" d="M7 76h38v7H7z" />
          <Path data-name="Stripe" fill="#ffcbab" d="M7 84h38v7H7z" />
        </G>
      </Symbol>
    </Fragment>
  );
}

export default Plant1;
