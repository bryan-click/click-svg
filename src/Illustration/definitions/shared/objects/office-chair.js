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

function OfficeChair() {
  return (
    <Fragment>
      <Symbol
        id="office-chair"
        data-name="Office chair"
        viewBox="0 0 55.23 99.91"
      >
        <Path
          d="M55.23 49.17v.35a5.23 5.23 0 01-5.11 5.34h-40C4 54.86-.75 48.94.1 42.3l4.51-37A5.88 5.88 0 0110.25 0H22.1a5.88 5.88 0 015.64 5.34l4.52 37c0 .27.06.53.07.79s.84 6.08 8.6 6.08z"
          fill="#ffcbab"
          fillRule="evenodd"
        />
        <Path
          d="M12.68 96.5a3.41 3.41 0 11-3.41-3.42 3.41 3.41 0 013.41 3.42"
          fill="#ff8032"
          fillRule="evenodd"
        />
        <Path
          d="M43.8 92.48H28.68V59.33l10.12-4.61H15.1l10.12 4.61v33.15H10.1a2.35 2.35 0 100 4.7h12.73a2.35 2.35 0 010-4.7h4.37a2.35 2.35 0 010 4.7h16.6a2.35 2.35 0 000-4.7z"
          fill="#ffa871"
        />
        <Path
          d="M29.56 94.83a2.36 2.36 0 00-2.35-2.35h-4.37a2.35 2.35 0 000 4.7h4.39a2.36 2.36 0 002.33-2.35z"
          fill="#ffa065"
        />
        <Path
          data-name="Wheel"
          d="M24.34 96.5a3.41 3.41 0 11-3.41-3.42 3.41 3.41 0 013.41 3.42M48.26 96.5a3.41 3.41 0 11-3.41-3.42 3.41 3.41 0 013.41 3.42"
          fill="#ff8032"
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default OfficeChair;
