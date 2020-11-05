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

function Wallshelf() {
  return (
    <Fragment>
      <Symbol id="wallshelf" data-name="Wall Shelf" viewBox="0 0 100 42">
        <G data-name="Wall Shelf">
          <G data-name="Picture Frame" fill="#ffcbab">
            <Path d="M42.43 0h-1.71l-2.93 29.83h23.15L63.87 0zm1.45 25.83h-1.67L44.35 4h15.11l-2.14 21.83z" />
            <Path
              fillRule="evenodd"
              d="M43.33 24.5h13.05l1.95-19.17H45.29L43.33 24.5z"
            />
          </G>
          <G data-name="Picture Frame">
            <Path
              data-name="Frame"
              d="M67.83 8.33h-2l-2.21 21.5h28.05l2.21-21.5zm2.22 17.5h-2l1.39-13.5h20l-1.39 13.5z"
              fill="#ffcbab"
            />
            <Path
              data-name="Picture"
              fill="#ffad7a"
              fillRule="evenodd"
              d="M86.83 13.83l-1.1 10.84H71l1.1-10.84h14.73z"
            />
          </G>
          <Path
            d="M28 22a1.25 1.25 0 110-2.5h7.77v2.55H28m8.66-3.33H13.42a2.5 2.5 0 100 5h23.25v-5"
            fill="#ffae7c"
          />
          <Path
            d="M28 19.5a1.25 1.25 0 100 2.5h7.77V19.55v-.05z"
            fill="#ffcbab"
          />
          <G data-name="Book">
            <Path
              d="M33.29 22.83h-25v1.67h10.26a1.26 1.26 0 110 2.5H8.33v.83h25a2.5 2.5 0 100-5z"
              fill="#ffae7c"
            />
            <Path
              d="M20 25.75a1.36 1.36 0 00-1.45-1.25H8.33V27h10.22A1.36 1.36 0 0020 25.75z"
              fill="#ffcbab"
            />
          </G>
          <G>
            <G data-name="Shade 2" fill="#ffa770">
              <Path d="M85.83 28.67H100V32H85.83z" />
              <Path
                fillRule="evenodd"
                d="M27.5 42V32h-6.44l6.44 10zM76.67 42V32h-6.44l6.44 10z"
              />
            </G>
            <Path
              data-name="Shade 1"
              fill="#ffbf97"
              d="M85.83 28.67H0V32h17.5l6.44 10h3.56l-6.44-10h45.61l6.44 10h3.56l-6.44-10h15.6v-3.33"
            />
          </G>
        </G>
      </Symbol>
    </Fragment>
  );
}

export default Wallshelf;
