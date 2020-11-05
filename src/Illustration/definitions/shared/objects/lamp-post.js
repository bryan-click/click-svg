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

function LampPost() {
  return (
    <Fragment>
      <Symbol id="lamp-post" data-name="Lamp Post" viewBox="0 0 19.21 159.98">
        <Path
          data-name="Path"
          d="M10.39 6.12H8.82A1.38 1.38 0 007.44 7.5v113.92h4.33V7.5a1.38 1.38 0 00-1.38-1.38"
          fill="#ffd6bd"
        />
        <Path fill="#ffcbab" d="M6.14 131.9h6.93v-11.75H6.14v11.75z" />
        <Path fill="#ffd6bd" d="M4.26 159.84h10.69V125.5H4.26v34.34z" />
        <Path
          d="M14.06 155.29H5.15a3.26 3.26 0 00-3.26 3.26V160h15.43v-1.43a3.26 3.26 0 00-3.26-3.26M15 125.18H4.26a1.6 1.6 0 00-1.6 1.6v.2a1.6 1.6 0 001.6 1.6H15a1.6 1.6 0 001.6-1.6v-.2a1.6 1.6 0 00-1.6-1.6M9.61 0a2.88 2.88 0 00-2.89 2.88v.36a2.89 2.89 0 005.77 0v-.36A2.88 2.88 0 009.61 0M13.87 33.63H5.34a1.6 1.6 0 00-1.6 1.6v.2A1.61 1.61 0 005.34 37h8.53a1.61 1.61 0 001.6-1.61v-.2a1.6 1.6 0 00-1.6-1.6"
          fill="#ffcbab"
        />
        <Path
          d="M12.7 37H6.51a1.06 1.06 0 00-1.06 1.05v.13a1.06 1.06 0 001.06 1.05h6.19a1.06 1.06 0 001.06-1.05v-.13A1.06 1.06 0 0012.7 37"
          fill="#ffcbab"
        />
        <Path
          fill="#ffe9db"
          d="M17.79 11.06l-4.68 22.57h-7L1.42 11.06h16.37z"
        />
        <Path fill="#ffcbab" d="M19.21 12.26l-2.05-4.05H2.05L0 12.26h19.21z" />
      </Symbol>
    </Fragment>
  );
}

export default LampPost;
