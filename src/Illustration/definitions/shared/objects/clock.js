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

function Clock() {
  return (
    <Fragment>
      <Symbol id="clock" data-name="Clock" viewBox="0 0 33 30">
        <G data-name="Clock">
          <G data-name="Frame">
            <Path
              d="M18.08 0c-.52 0-1 0-1.54.08a15 15 0 010 29.84c.5 0 1 .08 1.54.08a15 15 0 000-30z"
              fill="#ff904a"
            />
            <Path
              data-name="Frame"
              d="M16.54.08C16 0 15.52 0 15 0a15 15 0 000 30c.52 0 1 0 1.54-.08a15 15 0 000-29.84z"
              fill="#ffa46b"
            />
          </G>
          <Path
            d="M6.15 15a11.23 11.23 0 019.71-11.11H15a11.15 11.15 0 000 22.3h.86A11.23 11.23 0 016.15 15z"
            fill="#ff924f"
          />
          <Path
            data-name="Face"
            d="M26.15 15a8.71 8.71 0 000-1 11.16 11.16 0 00-9.87-10h-.37a11.21 11.21 0 000 22.22h.37a11.16 11.16 0 009.87-10 9.29 9.29 0 000-1.06z"
            fill="#ffaf7d"
          />
          <Path
            data-name="MM Indicator"
            fill="#ff924f"
            d="M19.26 12.4l1.48 1.35-8.46 9.23-1.48-1.35 8.46-9.23z"
          />
          <Path
            data-name="HH Indicator"
            fill="#ff924f"
            d="M16.3 8.05l3.84 8.46-1.82.83-3.85-8.46 1.83-.83z"
          />
        </G>
      </Symbol>
    </Fragment>
  );
}

export default Clock;
