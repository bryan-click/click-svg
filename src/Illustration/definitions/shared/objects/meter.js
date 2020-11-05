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

function Meter() {
  return (
    <Fragment>
      <Symbol id="very-high" data-name="Very High" viewBox="0 0 12 96">
        <Rect width={12} height={96} rx={5.5} fill="#333130" />
        <Path
          data-name="Level 4"
          d="M2 25h8V6a4 4 0 00-8 0v19z"
          fill="#e02020"
          fillRule="evenodd"
        />
        <Path data-name="Level 3" fill="#ff6607" d="M2 25h8v23H2z" />
        <Path data-name="Level 2" fill="#f7b500" d="M2 48h8v23H2z" />
        <Path
          data-name="Level 1"
          d="M2 71h8v19a4 4 0 01-8 0V71z"
          fill="#6dd400"
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="high" data-name="High" viewBox="0 0 12 96">
        <Rect width={12} height={96} rx={5.5} fill="#333130" />
        <Path data-name="Level 3" fill="#ff6607" d="M2 25h8v23H2z" />
        <Path data-name="Level 2" fill="#f7b500" d="M2 48h8v23H2z" />
        <Path
          data-name="Level 1"
          d="M2 71h8v19a4 4 0 01-8 0V71z"
          fill="#6dd400"
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="moderate" data-name="Moderate" viewBox="0 0 12 96">
        <Rect width={12} height={96} rx={5.5} fill="#333130" />
        <Path data-name="Level 2" fill="#f7b500" d="M2 48h8v23H2z" />
        <Path
          data-name="Level 1"
          d="M2 71h8v19a4 4 0 01-8 0V71z"
          fill="#6dd400"
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="low" data-name="Low" viewBox="0 0 12 96">
        <Rect width={12} height={96} rx={5.5} fill="#333130" />
        <Path
          data-name="Level 1"
          d="M2 71h8v19a4 4 0 01-8 0V71z"
          fill="#6dd400"
          fillRule="evenodd"
        />
      </Symbol>

      <Symbol id="very-low" data-name="Very Low" viewBox="0 0 12 96">
        <Rect width={12} height={96} rx={5.5} fill="#333130" />
        <Path
          data-name="Level 1"
          d="M2 71h8v19a4 4 0 01-8 0V71z"
          fill="#0091FF"
          fillRule="evenodd"
        />
      </Symbol>
    </Fragment>
  );
}

export default Meter;
